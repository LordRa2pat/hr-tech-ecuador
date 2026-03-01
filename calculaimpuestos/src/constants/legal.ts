export const CANASTA_BASICA_2026 = 789.57; // Valor referencial proyectado 2026. Afecta el límite de gastos personales.

export interface TramoIR {
    fraccionBasica: number;
    excesoHasta: number | null; // null significa "en adelante"
    impuestoFraccionBasica: number;
    porcentajeExcedente: number;
}

// Tabla referencial 2026 s/ GLOBAL_RULES.md
export const TABLA_IR_2026: TramoIR[] = [
    { fraccionBasica: 0, excesoHasta: 11902, impuestoFraccionBasica: 0, porcentajeExcedente: 0.00 },
    { fraccionBasica: 11902, excesoHasta: 15159, impuestoFraccionBasica: 0, porcentajeExcedente: 0.05 },
    { fraccionBasica: 15159, excesoHasta: 19682, impuestoFraccionBasica: 163, porcentajeExcedente: 0.10 },
    { fraccionBasica: 19682, excesoHasta: 26031, impuestoFraccionBasica: 615, porcentajeExcedente: 0.12 },
    { fraccionBasica: 26031, excesoHasta: 34255, impuestoFraccionBasica: 1377, porcentajeExcedente: 0.15 },
    { fraccionBasica: 34255, excesoHasta: 45407, impuestoFraccionBasica: 2611, porcentajeExcedente: 0.20 },
    { fraccionBasica: 45407, excesoHasta: 60450, impuestoFraccionBasica: 4841, porcentajeExcedente: 0.25 },
    { fraccionBasica: 60450, excesoHasta: 80605, impuestoFraccionBasica: 8602, porcentajeExcedente: 0.30 },
    { fraccionBasica: 80605, excesoHasta: null, impuestoFraccionBasica: 14648, porcentajeExcedente: 0.37 },
];

export const REBAJAS_CARGAS = {
    0: 0.10,
    1: 0.125,
    2: 0.15,
    3: 0.175,
    4: 0.20,
    5: 0.225, // 5 o más
} as const;
