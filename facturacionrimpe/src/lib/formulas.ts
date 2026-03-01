import { LIMITE_NEGOCIO_POPULAR, LIMITE_EMPRENDEDOR, TABLA_RIMPE_EMPRENDEDOR, IVA_2026, RETENCION_IR_EMPRENDEDOR, CUOTA_NEGOCIO_POPULAR, TipoRIMPE } from '../constants/legal';

export interface DatosRIMPE {
    ingresosAnuales: number;
}

export interface ResultadoRIMPE {
    tipo: TipoRIMPE | 'REGIMEN_GENERAL';
    impuestoPagar: number;
    retencionEstimada: number;
    totalLiquidoAprox: number;
    mensaje: string;
}

export function calcularImpuestoRIMPE(datos: DatosRIMPE): ResultadoRIMPE {
    const ingresos = datos.ingresosAnuales;

    // Fuera de RIMPE
    if (ingresos > LIMITE_EMPRENDEDOR) {
        return {
            tipo: 'REGIMEN_GENERAL',
            impuestoPagar: 0, // Should be calculated with normal IR tables, handled in phase 2
            retencionEstimada: 0,
            totalLiquidoAprox: 0,
            mensaje: `Tus ingresos de $${ingresos.toFixed(2)} superan el límite de $300,000 para RIMPE. Debes declarar en Régimen General (Calculadora de IR).`
        };
    }

    // Negocio Popular
    if (ingresos <= LIMITE_NEGOCIO_POPULAR) {
        return {
            tipo: 'NEGOCIO_POPULAR',
            // The fixed fee is progressive but starts from $3? Let's assume an average standard fixed yearly tax depending on fractions. 
            // Rule prompt states: "hasta $20,000 (cuota fija desde $3)"
            impuestoPagar: CUOTA_NEGOCIO_POPULAR,
            retencionEstimada: 0, // No les hacen retención
            totalLiquidoAprox: ingresos - CUOTA_NEGOCIO_POPULAR,
            mensaje: `Calificas como RIMPE Negocio Popular. Debes pagar una cuota fija de $${CUOTA_NEGOCIO_POPULAR}.00 y emitir Notas de Venta sin desglosar IVA.`
        };
    }

    // Emprendedor
    // Calcular según tabla progresiva
    let impuestoPagar = 0;
    for (let i = TABLA_RIMPE_EMPRENDEDOR.length - 1; i >= 0; i--) {
        const tramo = TABLA_RIMPE_EMPRENDEDOR[i];
        if (ingresos > tramo.fraccionBasica) {
            const excedente = ingresos - tramo.fraccionBasica;
            impuestoPagar = tramo.impuestoSobreBasica + (excedente * tramo.porcientoExcedente);
            break;
        }
    }

    const retencionEstimada = ingresos * RETENCION_IR_EMPRENDEDOR;
    const totalLiquidoAprox = ingresos - impuestoPagar;

    return {
        tipo: 'EMPRENDEDOR',
        impuestoPagar: parseFloat(impuestoPagar.toFixed(2)),
        retencionEstimada: parseFloat(retencionEstimada.toFixed(2)),
        totalLiquidoAprox: parseFloat(totalLiquidoAprox.toFixed(2)),
        mensaje: `Calificas como RIMPE Emprendedor. Tu tarifa efectiva es del ${((impuestoPagar / ingresos) * 100).toFixed(2)}%. Recuerda facturar con IVA ${IVA_2026 * 100}% desglosado.`
    };
}

export interface FacturaRequest {
    subtotal: number;
    esRIMPEEmprendedor: boolean;
}

export interface FacturaDetalle {
    subtotal: number;
    iva: number;
    totalFactura: number;
    retencionIR: number; // 1% si corresponde
    totalARecibir: number;
}

export function simularFactura(datos: FacturaRequest): FacturaDetalle {
    // Los negocios populares emiten notas de venta y no desglosan IVA, así que el total = subtotal.
    // Pero para emprendedores sí aplica IVA del 15%.
    const iva = datos.esRIMPEEmprendedor ? (datos.subtotal * IVA_2026) : 0;
    const totalFactura = datos.subtotal + iva;
    const retencionIR = datos.esRIMPEEmprendedor ? (datos.subtotal * RETENCION_IR_EMPRENDEDOR) : 0;
    const totalARecibir = totalFactura - retencionIR; // This is purely an estimate of money received via bank transfer if paid by another entity.

    return {
        subtotal: parseFloat(datos.subtotal.toFixed(2)),
        iva: parseFloat(iva.toFixed(2)),
        totalFactura: parseFloat(totalFactura.toFixed(2)),
        retencionIR: parseFloat(retencionIR.toFixed(2)),
        totalARecibir: parseFloat(totalARecibir.toFixed(2))
    };
}
