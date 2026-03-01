export type UnidadArea = 'METRO_CUADRADO' | 'HECTAREA' | 'CUADRA_EC' | 'SOLAR_GYE' | 'FANEGADA_SIERRA' | 'MANZANA' | 'YUGADA';

export interface EquivalenciaArea {
    id: UnidadArea;
    nombre: string;
    metrosCuadrados: number;
    descripcion: string;
}

// Valores según GLOBAL_RULES.md §2.8
export const UNIDADES_AREA: EquivalenciaArea[] = [
    { id: 'METRO_CUADRADO', nombre: 'Metros Cuadrados (m²)', metrosCuadrados: 1, descripcion: 'Unidad base del Sistema Internacional.' },
    { id: 'HECTAREA', nombre: 'Hectáreas (ha)', metrosCuadrados: 10000, descripcion: 'Medida universal agraria.' },
    { id: 'CUADRA_EC', nombre: 'Cuadra Ecuatoriana', metrosCuadrados: 7056, descripcion: 'Medida tradicional equivalente a 84×84 metros.' },
    { id: 'SOLAR_GYE', nombre: 'Solar (Guayaquil)', metrosCuadrados: 560, descripcion: 'Lotización urbana tradicional costeña.' },
    { id: 'FANEGADA_SIERRA', nombre: 'Fanegada (Sierra)', metrosCuadrados: 6400, descripcion: 'Medida agraria de la región interandina.' },
    { id: 'MANZANA', nombre: 'Manzana', metrosCuadrados: 10000, descripcion: 'Equivalente rústico a 1 hectárea.' },
    { id: 'YUGADA', nombre: 'Yugada', metrosCuadrados: 3200, descripcion: 'Porción de tierra que una yunta ara en un día.' }
];
