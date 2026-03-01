export const SBU_2026 = 482.00; // Salario Básico Unificado Ecuador 2026

// Jubilación Patronal — Art. 216 Código del Trabajo
export const JUBILACION_PATRONAL = {
    ANIOS_MINIMOS: 25,
    MEJORES_ANIOS_PROMEDIO: 5,
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
