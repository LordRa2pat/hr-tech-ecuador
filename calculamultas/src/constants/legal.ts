export const SBU_2026 = 482.00; // Salario Básico Unificado Ecuador 2026

export const TASA_ACTIVA_BCE_REFERENCIAL = 0.095; // 9.5% anualizada referencial para 2026

export const MULTAS_ANT = {
    LEVE: {
        PRIMERA_CLASE: 0.05, // 5% SBU
        SEGUNDA_CLASE: 0.10, // 10% SBU
        TERCERA_CLASE: 0.15, // 15% SBU
    },
    GRAVE: {
        PRIMERA_CLASE: 0.30, // 30% SBU
        SEGUNDA_CLASE: 0.40, // 40% SBU
        TERCERA_CLASE: 0.50, // 50% SBU
    },
    MUY_GRAVE: 1.00, // 100% SBU
} as const;
