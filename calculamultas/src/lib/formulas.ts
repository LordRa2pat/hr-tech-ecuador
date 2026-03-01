import { SBU_2026, TASA_ACTIVA_BCE_REFERENCIAL, MULTAS_ANT } from '../constants/legal';
import { differenceInDays } from 'date-fns';

// ─── CÁLCULO DE MORA SRI ───

export interface DatosSRI {
    obligacion: number; // Monto de la obligación tributaria original impaga
    fechaVencimiento: Date;
    fechaPago: Date;
}

export interface ResultadoSRI {
    diasMora: number;
    tasaAplicada: number;
    interesMora: number;
    totalPagar: number;
}

export function calcularMoraSRI(datos: DatosSRI): ResultadoSRI {
    if (datos.fechaPago <= datos.fechaVencimiento || datos.obligacion <= 0) {
        return { diasMora: 0, tasaAplicada: 0, interesMora: 0, totalPagar: datos.obligacion };
    }

    const diasMora = differenceInDays(datos.fechaPago, datos.fechaVencimiento);

    // Tasa de mora = Tasa Activa referencial BCE × 1.5, per ley actual referencial
    // Rule dice: "Obligación × TasaBCE×1.1 × (DíasMora / 90)" (Wait, the prompt rule says: TasaBCE×1.1 × (DíasMora / 90) but sometimes it changes, let's use the explicit prompt formula)
    // GLOBAL_RULES.md: `Obligación × TasaBCE×1.1 × (DíasMora / 90)` — interés simple.
    // We'll treat TasaBCE as the quarterly/annual active rate provided in constants.
    const tasaAplicada = TASA_ACTIVA_BCE_REFERENCIAL * 1.1;

    // Asumiendo la fórmula de simulación: "Obligación × tasaAplicada × (DíasMora / 90)"
    // Usually the divider is 360 for daily interest, but if the rule says 90, we follow the rule verbatim for the simulator.
    // We'll use 360 or 365 as standard logic, but let's stick to the prompt's exact phrasing: (DíasMora / 360) for annual rate... 
    // Wait, if it says (DíasMora / 90), it means TasaBCE is QUARTERLY. Let's adjust to that interpretation.

    const interesMora = datos.obligacion * tasaAplicada * (diasMora / 90);

    return {
        diasMora,
        tasaAplicada: parseFloat(tasaAplicada.toFixed(4)),
        interesMora: parseFloat(interesMora.toFixed(2)),
        totalPagar: parseFloat((datos.obligacion + interesMora).toFixed(2))
    };
}

// ─── CÁLCULO DE MULTAS TRÁNSITO ANT ───

export type TipoMultaANT =
    | 'LEVE_1' | 'LEVE_2' | 'LEVE_3'
    | 'GRAVE_1' | 'GRAVE_2' | 'GRAVE_3'
    | 'MUY_GRAVE';

export interface DatosANT {
    tipoMulta: TipoMultaANT;
    diasRetraso: number; // Para calcular recargos por mora en la ANT (2% mensual, tope 100%)
}

export interface ResultadoANT {
    valorMultaFija: number;
    porcentajeSBU: number;
    recargoMora: number; // La ANT cobra 2% adicional por cada mes completo de retraso
    totalPagar: number;
}

export function calcularMultaANT(datos: DatosANT): ResultadoANT {
    let porcentajeSBU = 0;

    switch (datos.tipoMulta) {
        case 'LEVE_1': porcentajeSBU = MULTAS_ANT.LEVE.PRIMERA_CLASE; break;
        case 'LEVE_2': porcentajeSBU = MULTAS_ANT.LEVE.SEGUNDA_CLASE; break;
        case 'LEVE_3': porcentajeSBU = MULTAS_ANT.LEVE.TERCERA_CLASE; break;
        case 'GRAVE_1': porcentajeSBU = MULTAS_ANT.GRAVE.PRIMERA_CLASE; break;
        case 'GRAVE_2': porcentajeSBU = MULTAS_ANT.GRAVE.SEGUNDA_CLASE; break;
        case 'GRAVE_3': porcentajeSBU = MULTAS_ANT.GRAVE.TERCERA_CLASE; break;
        case 'MUY_GRAVE': porcentajeSBU = MULTAS_ANT.MUY_GRAVE; break;
    }

    const valorMultaFija = SBU_2026 * porcentajeSBU;

    // Recargo por mora ANT: 2% por cada mes de retraso de la multa (aprox 30 días)
    const mesesCompletos = Math.floor(datos.diasRetraso / 30);
    const porcentajeRecargo = Math.min(mesesCompletos * 0.02, 1.00); // Tope del 100% de la multa principal
    const recargoMora = valorMultaFija * porcentajeRecargo;

    const totalPagar = valorMultaFija + recargoMora;

    return {
        valorMultaFija: parseFloat(valorMultaFija.toFixed(2)),
        porcentajeSBU,
        recargoMora: parseFloat(recargoMora.toFixed(2)),
        totalPagar: parseFloat(totalPagar.toFixed(2))
    };
}
