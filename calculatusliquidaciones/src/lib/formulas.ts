import { SBU_2026, Region, MotivoSalida } from '../constants/legal';
import { differenceInDays, differenceInMonths, differenceInYears, setYear } from 'date-fns';

export interface DatosLiquidacion {
    fechaInicio: Date;
    fechaFin: Date;
    remuneracionMensual: number;
    region: Region;
    motivo: MotivoSalida;
    vacacionesGozadasAnioEnCurso: number; // en días
    recibeFondosReservaMensual: boolean;
    recibeDecimoTerceroMensual: boolean;
    recibeDecimoCuartoMensual: boolean;
}

export interface ResultadosLiquidacion {
    aniosCompletos: number;
    fraccionAnio: number; // porcentaje (ej. 0.5 años)
    diasTrabajadosUltimoAnio: number;
    mesesTrabajadosUltimoAnio: number;

    // Beneficios proporcionales
    proporcionalDecimoTercero: number;
    proporcionalDecimoCuarto: number;
    vacacionesNoGozadas: number;
    fondosDeReserva: number;

    // Indemnizaciones
    desahucio: number;
    despidoIntempestivo: number;

    totalRecibir: number;
    alertas: string[];
}

export function calcularLiquidacion(datos: DatosLiquidacion): ResultadosLiquidacion {
    const alertas: string[] = [];

    const diasTotales = differenceInDays(datos.fechaFin, datos.fechaInicio) + 1;
    const mesesTotales = Math.floor(diasTotales / 30);
    const aniosTrabajados = differenceInYears(datos.fechaFin, datos.fechaInicio);
    const diasTrabajadosUltimoAnio = diasTotales - (aniosTrabajados * 365);
    const fraccionAnio = diasTrabajadosUltimoAnio / 365;

    // 1. DÉCIMO TERCERO PROPORCIONAL (Periodo: 1 dic anterior a 30 nov actual)
    let inicioDecimoTercero;
    if (datos.fechaFin.getMonth() >= 11) { // Diciembre
        inicioDecimoTercero = new Date(datos.fechaFin.getFullYear(), 11, 1);
    } else {
        inicioDecimoTercero = new Date(datos.fechaFin.getFullYear() - 1, 11, 1);
    }

    if (datos.fechaInicio > inicioDecimoTercero) {
        inicioDecimoTercero = datos.fechaInicio;
    }

    const diasDecimoTercero = Math.max(0, differenceInDays(datos.fechaFin, inicioDecimoTercero) + 1);
    // (Sueldo anual o proporcional) / 12 ... Simplificamos usando sueldo diario nominal
    let proporcionalDecimoTercero = 0;
    if (!datos.recibeDecimoTerceroMensual) {
        proporcionalDecimoTercero = ((datos.remuneracionMensual * 12) * (diasDecimoTercero / 360)) / 12;
    }

    // 2. DÉCIMO CUARTO PROPORCIONAL
    // Costa: 1 mar - 28/29 feb
    // Sierra: 1 ago - 31 jul
    let mesInicioD14 = datos.region === 'Costa' ? 2 : 7; // 2=Marzo, 7=Agosto
    let inicioDecimoCuarto = new Date(datos.fechaFin.getFullYear(), mesInicioD14, 1);

    if (datos.fechaFin < inicioDecimoCuarto) {
        inicioDecimoCuarto = new Date(datos.fechaFin.getFullYear() - 1, mesInicioD14, 1);
    }

    if (datos.fechaInicio > inicioDecimoCuarto) {
        inicioDecimoCuarto = datos.fechaInicio;
    }

    const diasDecimoCuarto = Math.max(0, differenceInDays(datos.fechaFin, inicioDecimoCuarto) + 1);
    let proporcionalDecimoCuarto = 0;
    if (!datos.recibeDecimoCuartoMensual) {
        proporcionalDecimoCuarto = (SBU_2026 * diasDecimoCuarto) / 360;
    }

    // 3. VACACIONES NO GOZADAS (Art. 71)
    // Fórmula: Remuneración anual / 24 por el tiempo efectivamente trabajado
    const remuneracionAnualEquivalente = datos.remuneracionMensual * 12;
    // Solo se calcula del último año/fracción si las anteriores ya se gozaron
    let pagoPorDiasVacaciones = 0;
    const diasDerechoVacacion = 15; // Base, simplificado sin días adicionales por antigüedad v1
    const diasProporcionalesVacacion = (diasTrabajadosUltimoAnio / 365) * diasDerechoVacacion;
    const diasPagarVacacion = Math.max(0, diasProporcionalesVacacion - datos.vacacionesGozadasAnioEnCurso);

    const valorDiaVacacion = (remuneracionAnualEquivalente / 24) / 15;
    const vacacionesNoGozadas = diasPagarVacacion * valorDiaVacacion;

    // 4. FONDOS DE RESERVA (Art. 196) - A partir del 2do año (mes 13)
    let fondosDeReserva = 0;
    if (mesesTotales >= 12 && !datos.recibeFondosReservaMensual) {
        // Calcular meses acumulados en el último año no pagados al IESS (asumimos que si no mensualiza los retiene el empleador hasta depositar)
        // Para simplificar, asumimos que se le deben los fondos correspondientes al último año/fracción trabajado (desde mes 13 en adelante)
        const mesesDerecho = Math.max(0, mesesTotales - 12);
        // Si el usuario marca no recibir mensual, calcularemos el pendiente del último año en curso
        const mesesPendientesUltimoAnio = (diasTrabajadosUltimoAnio / 30);
        fondosDeReserva = (datos.remuneracionMensual * 0.0833) * mesesPendientesUltimoAnio;
    }

    // 5. DESAHUCIO (Art. 185)
    // 25% de la última remuneración por cada año completo de servicio (o fracción)
    let desahucio = 0;
    const aniosDesahucio = aniosTrabajados + (diasTrabajadosUltimoAnio > 0 ? 1 : 0); // Toda fracción se cuenta como año para desahucio

    // Aplica en todos los casos de despido o renuncia por mutuo acuerdo
    if (diasTotales > 90) { // No aplica en periodo de prueba
        desahucio = (datos.remuneracionMensual * 0.25) * aniosDesahucio;
    }

    // 6. DESPIDO INTEMPESTIVO (Art. 188)
    let despidoIntempestivo = 0;
    if (datos.motivo === 'DESPIDO_INTEMPESTIVO') {
        if (diasTotales <= 90) {
            alertas.push('El despido intempestivo durante el período de prueba (90 días) NO genera indemnización de despido.');
        } else if (aniosTrabajados <= 3) {
            despidoIntempestivo = datos.remuneracionMensual * 3;
        } else {
            const aniosDespido = Math.min(25, aniosTrabajados + (diasTrabajadosUltimoAnio > 0 ? 1 : 0)); // Máximo 25 meses de sueldo, fracción cuenta como año
            despidoIntempestivo = datos.remuneracionMensual * aniosDespido;
        }
    }

    const totalRecibir =
        proporcionalDecimoTercero +
        proporcionalDecimoCuarto +
        vacacionesNoGozadas +
        fondosDeReserva +
        desahucio +
        despidoIntempestivo;

    return {
        aniosCompletos: aniosTrabajados,
        fraccionAnio: parseFloat(fraccionAnio.toFixed(2)),
        diasTrabajadosUltimoAnio,
        mesesTrabajadosUltimoAnio: parseFloat((diasTrabajadosUltimoAnio / 30).toFixed(2)),

        proporcionalDecimoTercero,
        proporcionalDecimoCuarto,
        vacacionesNoGozadas,
        fondosDeReserva,

        desahucio,
        despidoIntempestivo,

        totalRecibir,
        alertas
    };
}
