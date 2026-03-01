export const SBU_2026 = 482.00; // Baseline hardcoded para v1.0, actualizable vía n8n webhook después
export const DIAS_ANIO_COMERCIAL = 360;
export const MESES_ANIO = 12;

export const REGIONES = {
    SIERRA_ORIENTE: 'SIERRA_ORIENTE',
    COSTA_GALAPAGOS: 'COSTA_GALAPAGOS',
} as const;

export type Region = keyof typeof REGIONES;

// Fechas máximas de pago referenciales
export const FECHAS_PAGO = {
    DECIMO_TERCERO: '24 de Diciembre',
    DECIMO_CUARTO_SIERRA: '15 de Agosto',
    DECIMO_CUARTO_COSTA: '15 de Marzo',
};
