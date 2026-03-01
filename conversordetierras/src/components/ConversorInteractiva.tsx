"use client";

import { useState, useEffect } from 'react';
import { UNIDADES_AREA, UnidadArea } from '../constants/legal';
import { convertirArea, obtenerTodasEquivalencias } from '../lib/formulas';

export default function ConversorInteractiva() {
    const [valor, setValor] = useState<string>('1');
    const [unidadOrigen, setUnidadOrigen] = useState<UnidadArea>('CUADRA_EC');
    const [resultados, setResultados] = useState<{ unidad: string, valor: number }[]>([]);

    useEffect(() => {
        const num = parseFloat(valor);
        if (!isNaN(num) && num > 0) {
            const uOrigen = UNIDADES_AREA.find(u => u.id === unidadOrigen);
            if (uOrigen) {
                const enMetros = num * uOrigen.metrosCuadrados;
                setResultados(obtenerTodasEquivalencias(enMetros));
            }
        } else {
            setResultados([]);
        }
    }, [valor, unidadOrigen]);

    const formatNumber = (n: number) => {
        return new Intl.NumberFormat('es-EC', { maximumFractionDigits: 4 }).format(n);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {/* Input Side */}
                    <div className="space-y-6">
                        <div>
                            <label className="label-text">Cantidad a convertir</label>
                            <input
                                type="number"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                className="input-field text-2xl font-bold"
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label className="label-text">Unidad de origen</label>
                            <select
                                value={unidadOrigen}
                                onChange={(e) => setUnidadOrigen(e.target.value as UnidadArea)}
                                className="input-field cursor-pointer"
                            >
                                {UNIDADES_AREA.map(u => (
                                    <option key={u.id} value={u.id}>{u.nombre}</option>
                                ))}
                            </select>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-xl border border-green-100 dark:border-green-900/50">
                            <p className="text-xs text-green-800 dark:text-green-400 font-medium italic">
                                {UNIDADES_AREA.find(u => u.id === unidadOrigen)?.descripcion}
                            </p>
                        </div>
                    </div>

                    {/* Results Side */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-4 px-2">Equivalencias calculadas:</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {resultados.map((res, index) => (
                                <div
                                    key={index}
                                    className={`flex justify-between items-center p-4 rounded-xl border transition-all ${res.unidad.includes(UNIDADES_AREA.find(u => u.id === unidadOrigen)?.nombre || '')
                                            ? 'bg-green-600/10 border-green-500/30 ring-1 ring-green-500/20'
                                            : 'bg-white dark:bg-stone-900/60 border-stone-200 dark:border-stone-800'
                                        }`}
                                >
                                    <span className="text-sm font-medium text-stone-600 dark:text-stone-400">{res.unidad}</span>
                                    <span className="text-lg font-mono font-bold text-stone-900 dark:text-stone-50">{formatNumber(res.valor)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
