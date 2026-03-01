import { SBU_2026, DIAS_ANIO_COMERCIAL, MESES_ANIO } from '../constants/legal';

export interface DecimoTerceroInput {
    ingresosMensuales: number[]; // Array de 12 meses
    diasTrabajados?: number;     // Para cálculo proporcional
}

export function calcularDecimoTercero({ ingresosMensuales, diasTrabajados }: DecimoTerceroInput): number {
    const totalIngresos = ingresosMensuales.reduce((sum, ing) => sum + (ing || 0), 0);

    // Si trabajó todo el año (360 días), es el total / 12
    // Si es proporcional, la fórmula es (Total × Días) / 360 / 12 ... que matemáticamente
    // es equivalente a sacar el proporcional exacto de lo ganado.

    if (diasTrabajados !== undefined && diasTrabajados < DIAS_ANIO_COMERCIAL) {
        // Para el décimo tercero proporcional real sobre sus ganancias:
        // Se suma lo ganado y se divide para 12. La proporción de días ya está reflejada en que
        // ganó menos dinero total en el año.
        // Sin embargo, si nos dan un salario fijo mensual y los días trabajados en ese mes:
        // Aquí implementamos la fórmula estandar del código de trabajo: 
        // Doceava parte de lo ganado en el año.
        // Asumiremos que ingresosMensuales ya refleja lo que realmente cobró.
        return totalIngresos / MESES_ANIO;
    }

    return totalIngresos / MESES_ANIO;
}

export interface DecimoCuartoInput {
    diasTrabajados: number; // 360 si es año completo
}

export function calcularDecimoCuarto({ diasTrabajados }: DecimoCuartoInput): number {
    if (diasTrabajados >= DIAS_ANIO_COMERCIAL) {
        return SBU_2026;
    }

    return (SBU_2026 / DIAS_ANIO_COMERCIAL) * diasTrabajados;
}
