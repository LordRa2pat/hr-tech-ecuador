export const SBU_2026 = 482.00; // Salario Básico Unificado Ecuador 2026 proyectado

// Regiones para cálculo de fechas de beneficios
export const REGIONES = {
    COSTA: 'Costa', // Incluye Galápagos
    SIERRA: 'Sierra', // Incluye Amazonía
} as const;

export type Region = typeof REGIONES[keyof typeof REGIONES];

export type MotivoSalida =
    | 'RENUNCIA'
    | 'DESPIDO_INTEMPESTIVO'
    | 'ACUERDO_MUTUO';
