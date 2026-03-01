import { UNIDADES_AREA, UnidadArea } from '../constants/legal';

export function convertirArea(valor: number, desde: UnidadArea, hacia: UnidadArea): number {
    if (isNaN(valor) || valor <= 0) return 0;

    const unidadOrigen = UNIDADES_AREA.find(u => u.id === desde);
    const unidadDestino = UNIDADES_AREA.find(u => u.id === hacia);

    if (!unidadOrigen || !unidadDestino) return 0;

    // 1. Convertir origen a metros cuadrados
    const enMetrosCuadrados = valor * unidadOrigen.metrosCuadrados;

    // 2. Convertir de metros cuadrados a destino
    const resultado = enMetrosCuadrados / unidadDestino.metrosCuadrados;

    return resultado;
}

export function obtenerTodasEquivalencias(valorEnMetros: number): { unidad: string, valor: number }[] {
    if (isNaN(valorEnMetros) || valorEnMetros <= 0) return [];

    return UNIDADES_AREA.map(u => ({
        unidad: u.nombre,
        valor: valorEnMetros / u.metrosCuadrados
    }));
}
