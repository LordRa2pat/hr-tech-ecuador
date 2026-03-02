"use client";

import { useState } from 'react';
import { calcularImpuestoRenta, DetalleCalculoIR } from '../lib/formulas';
import { CANASTA_BASICA_2026 } from '../constants/legal';

export default function CalculadoraIR() {
    const [ingresosTotales, setIngresosTotales] = useState<string>('');
    const [gastos, setGastos] = useState<string>('0');
    const [cargas, setCargas] = useState<string>('0');

    const [resultado, setResultado] = useState<DetalleCalculoIR | null>(null);

    const calcular = (e: React.FormEvent) => {
        e.preventDefault();

        // Asumimos IESS descontado en ingresos por simplicidad en v1
        const ingresos = parseFloat(ingresosTotales) || 0;
        const gastosDeducibles = parseFloat(gastos) || 0;
        const cargasF = parseInt(cargas) || 0;

        const calculo = calcularImpuestoRenta({
            ingresosAnuales: ingresos,
            gastosDeducibles: gastosDeducibles,
            cargasFamiliares: cargasF
        });

        setResultado(calculo);
    };

    const formatearMoneda = (valor: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
    };

    const formatearPorcentaje = (valor: number) => {
        return new Intl.NumberFormat('en-US', { style: 'percent' }).format(valor);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-transparent opacity-10 transform rotate-12 translate-x-12 -translate-y-12 rounded-full" />

                <form onSubmit={calcular} className="space-y-6 relative z-10">

                    <div>
                        <label htmlFor="ingresos" className="label-text">
                            Ingresos Anuales Gravados (USD)
                        </label>
                        <div className="relative">
                            {!ingresosTotales && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>}
                            <input
                                id="ingresos"
                                type="number"
                                inputMode="decimal"
                                step="0.01"
                                min="0"
                                required
                                value={ingresosTotales}
                                onChange={(e) => setIngresosTotales(e.target.value)}
                                className={`input-field ${!ingresosTotales ? 'pl-12' : 'pl-4'}`}
                                placeholder="Ej: 24000.00"
                            />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Suma todos tus ingresos del año descontando el aporte al IESS.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="gastos" className="label-text">
                                Gastos Personales Proyectados
                            </label>
                            <div className="relative">
                                {!gastos && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>}
                                <input
                                    id="gastos"
                                    type="number"
                                    inputMode="decimal"
                                    step="0.01"
                                    min="0"
                                    required
                                    value={gastos}
                                    onChange={e => setGastos(e.target.value)}
                                    className={`input-field ${!gastos ? 'pl-12' : 'pl-4'}`}
                                    placeholder="Ej: 35000"
                                />
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1">Límite legal: {formatearMoneda(CANASTA_BASICA_2026 * 7)}</p>
                        </div>

                        <div>
                            <label htmlFor="cargas" className="label-text">
                                Cargas Familiares
                            </label>
                            <select
                                id="cargas"
                                value={cargas}
                                onChange={(e) => setCargas(e.target.value)}
                                className="input-field appearance-none cursor-pointer"
                            >
                                <option value="0">0 cargas (Sin rebaja extra)</option>
                                <option value="1">1 carga familiar</option>
                                <option value="2">2 cargas familiares</option>
                                <option value="3">3 cargas familiares</option>
                                <option value="4">4 cargas familiares</option>
                                <option value="5">5 o más cargas</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary mt-4 py-4">
                        Calcular Impuesto a la Renta 2026
                    </button>
                </form>
            </div>

            {resultado && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl border-t-4 border-t-emerald-500 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Resumen de Liquidación
                    </h2>

                    <div className="space-y-4">

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-400">Base Imponible</p>
                                <p className="text-lg font-mono text-slate-200 mt-1">{formatearMoneda(resultado.baseImponible)}</p>
                            </div>
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                                <p className="text-xs text-slate-400">Tramo Aplicable</p>
                                <p className="text-lg font-mono text-emerald-400 mt-1">{formatearPorcentaje(resultado.tramoAplicable.porcentajeExcedente)}</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/40 p-4 rounded-xl flex justify-between items-center border border-slate-700/50">
                            <div>
                                <p className="text-sm font-medium text-slate-300">Impuesto a la Renta Base</p>
                                <p className="text-xs text-slate-500 mt-1">Antes de deducciones</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-mono font-medium text-slate-200">{formatearMoneda(resultado.impuestoBase)}</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/40 p-4 rounded-xl flex justify-between items-center border border-slate-700/50 border-l-2 border-l-ecu-yellow">
                            <div>
                                <p className="text-sm font-medium text-slate-300">Rebaja por Gastos y Cargas</p>
                                <p className="text-xs text-slate-500 mt-1">Gastos legales: {formatearMoneda(resultado.gastosAceptados)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-mono font-medium text-ecu-yellow">-{formatearMoneda(resultado.rebajaAplicada)}</p>
                            </div>
                        </div>

                        <div className="bg-emerald-900/40 p-5 rounded-xl flex justify-between items-center border border-emerald-500/50 mt-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
                            <div className="relative z-10">
                                <span className="block text-sm font-medium text-emerald-200">Impuesto a Pagar</span>
                                <span className="block text-xs text-emerald-400/70 mt-1">Valor causado al SRI</span>
                            </div>
                            <span className="relative z-10 text-3xl font-mono font-bold text-white">{formatearMoneda(resultado.impuestoCausado)}</span>
                        </div>

                        {resultado.impuestoCausado === 0 && (
                            <p className="text-xs text-center text-emerald-400 mt-4 bg-emerald-950/50 py-2 rounded-lg border border-emerald-900/50">
                                🎉 No debes pagar Impuesto a la Renta este año.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
