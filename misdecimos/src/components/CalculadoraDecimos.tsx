"use client";

import { useState } from 'react';
import { calcularDecimoTercero, calcularDecimoCuarto } from '../lib/formulas';
import { SBU_2026, FECHAS_PAGO, REGIONES, Region } from '../constants/legal';

export default function CalculadoraDecimos() {
    const [salarioMensual, setSalarioMensual] = useState<string>('');
    const [mesesTrabajados, setMesesTrabajados] = useState<string>('12');
    const [region, setRegion] = useState<Region>(REGIONES.SIERRA_ORIENTE);

    const [resultado, setResultado] = useState<{
        decimoTercero: number;
        decimoCuarto: number;
        total: number;
    } | null>(null);

    const calcular = (e: React.FormEvent) => {
        e.preventDefault();

        const salario = parseFloat(salarioMensual) || 0;
        const meses = Math.min(Math.max(parseInt(mesesTrabajados) || 0, 1), 12);
        const dias = meses * 30; // Simulando mes comercial de 30 días

        // Asumimos un ingreso plano para el ejemplo de v1 simple
        const ingresosAnuales = Array(meses).fill(salario);

        const d13 = calcularDecimoTercero({ ingresosMensuales: ingresosAnuales, diasTrabajados: dias });
        const d14 = calcularDecimoCuarto({ diasTrabajados: dias });

        setResultado({
            decimoTercero: d13,
            decimoCuarto: d14,
            total: d13 + d14
        });
    };

    const formatearMoneda = (valor: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
    };

    return (
        <div className="w-full max-w-xl mx-auto space-y-8">
            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-ecu-yellow to-transparent opacity-20 transform rotate-12 translate-x-8 -translate-y-8" />

                <form onSubmit={calcular} className="space-y-6 relative z-10">

                    <div>
                        <label htmlFor="salario" className="label-text">
                            Salario mensual promedio (USD)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                            <input
                                id="salario"
                                type="number"
                                inputMode="decimal"
                                step="0.01"
                                min="0"
                                required
                                value={salarioMensual}
                                onChange={(e) => setSalarioMensual(e.target.value)}
                                className="input-field pl-8"
                                placeholder="Ej: 460.00"
                            />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Incluye sueldo base, horas extras y comisiones fijas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="meses" className="label-text">
                                Meses laborados
                            </label>
                            <input
                                id="meses"
                                type="number"
                                inputMode="numeric"
                                min="1"
                                max="12"
                                required
                                value={mesesTrabajados}
                                onChange={(e) => setMesesTrabajados(e.target.value)}
                                className="input-field"
                                placeholder="Ej: 12"
                            />
                        </div>

                        <div>
                            <label htmlFor="region" className="label-text">
                                Región (para Décimo Cuarto)
                            </label>
                            <select
                                id="region"
                                value={region}
                                onChange={(e) => setRegion(e.target.value as Region)}
                                className="input-field appearance-none cursor-pointer"
                            >
                                <option value={REGIONES.SIERRA_ORIENTE}>Sierra / Oriente</option>
                                <option value={REGIONES.COSTA_GALAPAGOS}>Costa / Galápagos</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary mt-4">
                        Calcular Décimos 2026
                    </button>
                </form>
            </div>

            {resultado && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl border-t-4 border-t-ecu-yellow animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-ecu-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Tus Resultados (Estimado)
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-slate-800/40 p-4 rounded-xl flex justify-between items-center border border-slate-700/50">
                            <div>
                                <p className="text-sm text-slate-400">Décimo Tercer Sueldo</p>
                                <p className="text-xs text-slate-500 mt-1">Acumulado hasta Noviembre</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-mono font-semibold text-slate-200">{formatearMoneda(resultado.decimoTercero)}</p>
                                <p className="text-xs text-slate-500 mt-1">Pago máx: {FECHAS_PAGO.DECIMO_TERCERO}</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/40 p-4 rounded-xl flex justify-between items-center border border-slate-700/50">
                            <div>
                                <p className="text-sm text-slate-400">Décimo Cuarto Sueldo</p>
                                <p className="text-xs text-slate-500 mt-1">Bono escolar (SBU 2026: ${SBU_2026})</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-mono font-semibold text-slate-200">{formatearMoneda(resultado.decimoCuarto)}</p>
                                <p className="text-xs text-slate-500 mt-1">Pago máx: {region === REGIONES.SIERRA_ORIENTE ? FECHAS_PAGO.DECIMO_CUARTO_SIERRA : FECHAS_PAGO.DECIMO_CUARTO_COSTA}</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-ecu-blue/20 to-transparent p-4 rounded-xl flex justify-between items-center border border-ecu-blue/30 mt-6">
                            <span className="text-base font-medium text-slate-200">Total a recibir</span>
                            <span className="text-2xl font-mono font-bold text-ecu-yellow">{formatearMoneda(resultado.total)}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
