import { TABLA_IR_2026, REBAJAS_CARGAS, CANASTA_BASICA_2026, TramoIR } from '../constants/legal';

export interface ImpuestoRentaInput {
    ingresosAnuales: number;
    gastosDeducibles: number;
    cargasFamiliares: number; // 0 a 5+
}

export interface DetalleCalculoIR {
    baseImponible: number;
    tramoAplicable: TramoIR;
    impuestoBase: number;
    limiteGastos: number;
    gastosAceptados: number;
    rebajaAplicada: number;
    impuestoCausado: number;
}

export function calcularImpuestoRenta({
    ingresosAnuales,
    gastosDeducibles,
    cargasFamiliares
}: ImpuestoRentaInput): DetalleCalculoIR {

    // 1. Encontrar el tramo correspondiente
    const tramo = TABLA_IR_2026.slice().reverse().find(t => ingresosAnuales > t.fraccionBasica) || TABLA_IR_2026[0];

    // 2. Calcular Impuesto Base
    let impuestoBase = tramo.impuestoFraccionBasica;
    if (ingresosAnuales > tramo.fraccionBasica) {
        const excedente = ingresosAnuales - tramo.fraccionBasica;
        impuestoBase += excedente * tramo.porcentajeExcedente;
    }

    // 3. Calcular Límites y Rebajas
    const limiteGastosLegales = CANASTA_BASICA_2026 * 7;
    const gastosAceptados = Math.min(gastosDeducibles, limiteGastosLegales);

    const cargas = Math.min(Math.max(cargasFamiliares, 0), 5) as keyof typeof REBAJAS_CARGAS;
    const porcentajeRebaja = REBAJAS_CARGAS[cargas];
    const rebajaAplicada = gastosAceptados * porcentajeRebaja;

    // 4. Impuesto Causado Final
    const impuestoCausado = Math.max(impuestoBase - rebajaAplicada, 0);

    return {
        baseImponible: ingresosAnuales,
        tramoAplicable: tramo,
        impuestoBase,
        limiteGastos: limiteGastosLegales,
        gastosAceptados,
        rebajaAplicada,
        impuestoCausado
    };
}
