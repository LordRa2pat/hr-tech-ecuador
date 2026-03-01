export const SBU_2026 = 482.00;
export const IVA_2026 = 0.15; // IVA Ecuador 2026

export type TipoRIMPE = 'NEGOCIO_POPULAR' | 'EMPRENDEDOR';

// Tabla Progresiva RIMPE Emprendedor (Art. 97.4 LRTI, aproximación 2026)
export const TABLA_RIMPE_EMPRENDEDOR = [
    { fraccionBasica: 0, excesoHasta: 20000, impuestoSobreBasica: 0, porcientoExcedente: 0.01 }, // 1%
    { fraccionBasica: 20000, excesoHasta: 50000, impuestoSobreBasica: 60, porcientoExcedente: 0.0125 }, // 1.25%
    { fraccionBasica: 50000, excesoHasta: 75000, impuestoSobreBasica: 435, porcientoExcedente: 0.015 }, // 1.5%
    { fraccionBasica: 75000, excesoHasta: 100000, impuestoSobreBasica: 810, porcientoExcedente: 0.0175 }, // 1.75%
    { fraccionBasica: 100000, excesoHasta: 300000, impuestoSobreBasica: 1247.5, porcientoExcedente: 0.02 }, // 2%
];

// Negocio Popular
export const CUOTA_NEGOCIO_POPULAR = 3; // USD 3 mensuales o proporcionales a ingresos? La cuota fija mínima (simbólica)
// "cuota fija desde $3"
export const LIMITE_NEGOCIO_POPULAR = 20000;
export const LIMITE_EMPRENDEDOR = 300000;

export const RETENCION_IR_EMPRENDEDOR = 0.01; // 1% de retención en la fuente a Emprendedores RIMPE
