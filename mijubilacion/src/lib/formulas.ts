import { JUBILACION_PATRONAL, JUBILACION_IESS, SBU_2026 } from '../constants/legal';

// ─── JUBILACIÓN PATRONAL (Art. 216 CT) ───

export interface DatosPatronal {
    aniosTrabajados: number;
    mejoresSueldos: number[]; // Los 5 mejores sueldos anuales del trabajador
}

export interface ResultadoPatronal {
    cumpleRequisito: boolean;
    aniosFaltantes: number;
    promedioMejoresAnios: number;
    pensionMensualEstimada: number;
    mensaje: string;
}

export function calcularJubilacionPatronal(datos: DatosPatronal): ResultadoPatronal {
    const cumple = datos.aniosTrabajados >= JUBILACION_PATRONAL.ANIOS_MINIMOS;
    const faltantes = Math.max(0, JUBILACION_PATRONAL.ANIOS_MINIMOS - datos.aniosTrabajados);

    // Promedio de los 5 mejores años de remuneración anual → mensual
    const sueldosOrdenados = [...datos.mejoresSueldos].sort((a, b) => b - a).slice(0, JUBILACION_PATRONAL.MEJORES_ANIOS_PROMEDIO);
    const promedioAnual = sueldosOrdenados.length > 0
        ? sueldosOrdenados.reduce((s, v) => s + v, 0) / sueldosOrdenados.length
        : 0;
    const promedioMensual = promedioAnual / 12;

    // Pensión patronal: porcentaje del promedio según años de servicio
    // Coeficiente simplificado: proporcional al tiempo trabajado sobre 25 años
    const coeficiente = Math.min(datos.aniosTrabajados / JUBILACION_PATRONAL.ANIOS_MINIMOS, 1);
    const pensionMensual = cumple ? promedioMensual * coeficiente : 0;

    return {
        cumpleRequisito: cumple,
        aniosFaltantes: faltantes,
        promedioMejoresAnios: parseFloat(promedioMensual.toFixed(2)),
        pensionMensualEstimada: parseFloat(pensionMensual.toFixed(2)),
        mensaje: cumple
            ? `Con ${datos.aniosTrabajados} años de servicio, cumples el requisito de jubilación patronal.`
            : `Te faltan ${faltantes} año(s) para alcanzar los ${JUBILACION_PATRONAL.ANIOS_MINIMOS} años requeridos.`,
    };
}

// ─── JUBILACIÓN IESS ───

export interface DatosIESS {
    imposicionesTotales: number; // Meses de aporte
    sueldoActual: number; // Sueldo mensual actual
    edadActual: number;
}

export interface ResultadoIESS {
    cumpleImposiciones: boolean;
    imposicionesFaltantes: number;
    pensionEstimada: number;
    pensionMinima: number;
    pensionFinal: number;
    aniosAportados: number;
    mensaje: string;
}

export function calcularJubilacionIESS(datos: DatosIESS): ResultadoIESS {
    const aniosAportados = parseFloat((datos.imposicionesTotales / 12).toFixed(1));
    const cumple = datos.imposicionesTotales >= JUBILACION_IESS.IMPOSICIONES_MINIMAS;
    const faltantes = Math.max(0, JUBILACION_IESS.IMPOSICIONES_MINIMAS - datos.imposicionesTotales);

    // Cálculo de pensión IESS:
    // Base: promedio de 60 mejores sueldos (usamos sueldo actual como proxy para v1)
    const promedioSueldos = datos.sueldoActual;

    // Encontrar coeficiente por años aportados
    // Buscamos el tramo más cercano inferior en la tabla
    const coeficientes = [...JUBILACION_IESS.COEFICIENTES].sort((a, b) => b.anios - a.anios);
    const tramo = coeficientes.find(c => aniosAportados >= c.anios) || { anios: 0, pct: 0 };

    // Si tiene más de 40 años, se queda en 100% (1.0)
    const porcentaje = Math.min(tramo.pct, 1.0);

    const pensionCalculada = promedioSueldos * porcentaje;
    const pensionMinima = JUBILACION_IESS.PENSION_MINIMA;
    const pensionFinal = Math.max(pensionCalculada, pensionMinima);

    return {
        cumpleImposiciones: cumple,
        imposicionesFaltantes: faltantes,
        pensionEstimada: parseFloat(pensionCalculada.toFixed(2)),
        pensionMinima,
        pensionFinal: parseFloat(pensionFinal.toFixed(2)),
        aniosAportados,
        mensaje: cumple
            ? `Con ${aniosAportados} años aportados, tu coeficiente de pensión es del ${(porcentaje * 100).toFixed(1)}%.`
            : `Te faltan ${faltantes} imposición(es) para alcanzar el mínimo de jubilación ordinaria.`,
    };
}
