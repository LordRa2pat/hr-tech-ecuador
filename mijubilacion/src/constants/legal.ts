export const SBU_2026 = 482.00; // Salario Básico Unificado Ecuador 2026

// Jubilación Patronal — Art. 216 Código del Trabajo
export const JUBILACION_PATRONAL = {
    ANIOS_MINIMOS: 25,
    MEJORES_ANIOS_PROMEDIO: 5,
    PENSION_MINIMA: 30.00,
    COEFICIENTES_ART_218: {
        39: { m: 13.62405, f: 14.42472 },
        40: { m: 13.49030, f: 14.30569 },
        41: { m: 13.35063, f: 14.18106 },
        42: { m: 13.20495, f: 14.05069 },
        43: { m: 13.05313, f: 13.91441 },
        44: { m: 12.89506, f: 13.77208 },
        45: { m: 12.73032, f: 13.62354 },
        46: { m: 12.55978, f: 13.46868 },
        47: { m: 12.38246, f: 13.30737 },
        48: { m: 12.19866, f: 13.13951 },
        49: { m: 12.00833, f: 12.96499 },
        50: { m: 11.81150, f: 12.78377 },
        51: { m: 11.60819, f: 12.59580 },
        52: { m: 11.39850, f: 12.40102 },
        53: { m: 11.18250, f: 12.19945 },
        54: { m: 10.96033, f: 11.99112 },
        55: { m: 10.73218, f: 11.77606 },
        56: { m: 10.49821, f: 11.55438 },
        57: { m: 10.25868, f: 11.32618 },
        58: { m: 10.01387, f: 11.09165 },
        59: { m: 9.76410, f: 10.85092 },
        60: { m: 9.50969, f: 10.60427 },
        61: { m: 9.25106, f: 10.35195 },
        62: { m: 8.98864, f: 10.09428 },
        63: { m: 8.72288, f: 9.83160 },
        64: { m: 8.45429, f: 9.56430 },
        65: { m: 8.18341, f: 9.29285 },
        66: { m: 7.91081, f: 9.01768 },
        67: { m: 7.63707, f: 8.73933 },
        68: { m: 7.36281, f: 8.45835 },
        69: { m: 7.08868, f: 8.17533 },
        70: { m: 6.81531, f: 7.89089 },
        71: { m: 6.54339, f: 7.60566 },
        72: { m: 6.27355, f: 7.32034 },
        73: { m: 6.00649, f: 7.03559 },
        74: { m: 5.74284, f: 6.75212 },
        75: { m: 5.48324, f: 6.47066 },
        76: { m: 5.22833, f: 6.19188 },
        77: { m: 4.97871, f: 5.91652 },
        78: { m: 4.73492, f: 5.64527 },
    }
} as const;

// Jubilación IESS — Ley de Seguridad Social
export const JUBILACION_IESS = {
    ANIOS_MINIMOS: 10, // Con 70 años de edad
    IMPOSICIONES_MINIMAS: 120, // 10 años
    MEJORES_SUELDOS_PROMEDIO: 60, // mejores 60 sueldos (5 años)
    PENSION_MINIMA: SBU_2026, // Pensión mínima = SBU vigente
    APORTE_PERSONAL_PCT: 9.45,
    // Tabla de coeficientes simplificada para el simulador (Estimación basada en Ley de Seguridad Social)
    COEFICIENTES: [
        { anios: 10, pct: 0.500 },
        { anios: 15, pct: 0.562 },
        { anios: 20, pct: 0.625 },
        { anios: 25, pct: 0.687 },
        { anios: 30, pct: 0.750 },
        { anios: 35, pct: 0.812 },
        { anios: 38, pct: 0.900 },
        { anios: 40, pct: 1.000 },
    ]
} as const;
