import { JUBILACION_PATRONAL, JUBILACION_IESS, SBU_2026 } from '../constants/legal';

// ─── JUBILACIÓN PATRONAL (Art. 216 CT) ───

export interface DatosPatronal {
    aniosTrabajados: number;
    mejoresSueldos: number[]; // Los 5 mejores sueldos anuales del trabajador
    edadJubilacion: number;
    sexo: 'm' | 'f';
}

export interface ResultadoPatronal {
    cumpleRequisito: boolean;
    aniosFaltantes: number;
    promedioMejoresAnios: number; // Promedio de remuneración anual de los últimos 5 años
    haberIndividual: number;
    pensionAnual: number;
    pensionMensualEstimada: number;
    mensaje: string;
}

export function calcularJubilacionPatronal(datos: DatosPatronal): ResultadoPatronal {
    const cumple = datos.aniosTrabajados >= JUBILACION_PATRONAL.ANIOS_MINIMOS;
    const faltantes = Math.max(0, JUBILACION_PATRONAL.ANIOS_MINIMOS - datos.aniosTrabajados);

    // 1. Promedio de los últimos 5 años de remuneración anual
    const sueldosOrdenados = [...datos.mejoresSueldos].sort((a, b) => b - a).slice(0, JUBILACION_PATRONAL.MEJORES_ANIOS_PROMEDIO);
    const promedioAnual = sueldosOrdenados.length > 0
        ? sueldosOrdenados.reduce((s, v) => s + v, 0) / sueldosOrdenados.length
        : 0;

    // 2. Haber Individual de Jubilación (5% del promedio * años de servicio)
    const haberIndividual = (promedioAnual * 0.05) * datos.aniosTrabajados;

    // 3. Obtener Coeficiente de la Tabla Art. 218
    const edadBusqueda = Math.min(Math.max(datos.edadJubilacion, 39), 78) as keyof typeof JUBILACION_PATRONAL.COEFICIENTES_ART_218;
    const coefData = JUBILACION_PATRONAL.COEFICIENTES_ART_218[edadBusqueda];
    const coeficiente = datos.sexo === 'm' ? coefData.m : coefData.f;

    // 4. Pensión Anual y Mensual
    let pensionAnual = haberIndividual / coeficiente;
    let pensionMensual = pensionAnual / 12;

    // 5. Aplicar Límites Legales (Art. 216 Regla 2)
    // No mayor a 1 SBU ($482) ni inferior a $30
    if (cumple) {
        if (pensionMensual > SBU_2026) pensionMensual = SBU_2026;
        if (pensionMensual < JUBILACION_PATRONAL.PENSION_MINIMA) pensionMensual = JUBILACION_PATRONAL.PENSION_MINIMA;
    } else {
        pensionMensual = 0;
        pensionAnual = 0;
    }

    return {
        cumpleRequisito: cumple,
        aniosFaltantes: faltantes,
        promedioMejoresAnios: parseFloat(promedioAnual.toFixed(2)),
        haberIndividual: parseFloat(haberIndividual.toFixed(2)),
        pensionAnual: parseFloat(pensionAnual.toFixed(2)),
        pensionMensualEstimada: parseFloat(pensionMensual.toFixed(2)),
        mensaje: cumple
            ? `Cálculo realizado según Art. 216 y 218 del C.T. Coeficiente aplicado: ${coeficiente} (${datos.sexo === 'm' ? 'Hombre' : 'Mujer'}, ${datos.edadJubilacion} años).`
            : `Te faltan ${faltantes} año(s) para alcanzar los ${JUBILACION_PATRONAL.ANIOS_MINIMOS} años requeridos para la jubilación patronal.`,
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
