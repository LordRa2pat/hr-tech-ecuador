"use client";

import { useState } from 'react';
import { calcularMoraSRI, calcularMultaANT, ResultadoSRI, ResultadoANT, TipoMultaANT } from '../lib/formulas';
import { TASA_ACTIVA_BCE_REFERENCIAL } from '../constants/legal';

type TabActivo = 'sri' | 'ant';

export default function CalculadoraMultas() {
    const [tab, setTab] = useState<TabActivo>('sri');

    // SRI State
    const [obligacionSRI, setObligacionSRI] = useState('');
    const [fechaVencimientoSRI, setFechaVencimientoSRI] = useState('');
    const [fechaPagoSRI, setFechaPagoSRI] = useState('');
    const [resultadoSRI, setResultadoSRI] = useState<ResultadoSRI | null>(null);

    // ANT State
    const [tipoMultaANT, setTipoMultaANT] = useState<TipoMultaANT>('LEVE_1');
    const [mesesRetrasoANT, setMesesRetrasoANT] = useState('0');
    const [resultadoANT, setResultadoANT] = useState<ResultadoANT | null>(null);

    const formatCurrency = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v);
    const formatPct = (v: number) => new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(v);

    const handleSRI = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fechaVencimientoSRI || !fechaPagoSRI) return;
        setResultadoSRI(calcularMoraSRI({
            obligacion: parseFloat(obligacionSRI) || 0,
            fechaVencimiento: new Date(fechaVencimientoSRI),
            fechaPago: new Date(fechaPagoSRI),
        }));
    };

    const handleANT = (e: React.FormEvent) => {
        e.preventDefault();
        const meses = parseInt(mesesRetrasoANT) || 0;
        setResultadoANT(calcularMultaANT({
            tipoMulta: tipoMultaANT,
            diasRetraso: meses * 30, // Aproximación mensual para recargos ANT
        }));
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8">
            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                <button
                    onClick={() => { setTab('sri'); setResultadoANT(null); }}
                    className={`flex-1 py-4 px-4 text-sm font-bold border-b-2 transition-all ${tab === 'sri' ? 'tab-active' : 'tab-inactive'}`}
                >
                    Mora Tributaria (SRI)
                </button>
                <button
                    onClick={() => { setTab('ant'); setResultadoSRI(null); }}
                    className={`flex-1 py-4 px-4 text-sm font-bold border-b-2 transition-all ${tab === 'ant' ? 'tab-active' : 'tab-inactive'}`}
                >
                    Multas de Tránsito (ANT)
                </button>
            </div>

            {/* SRI Form */}
            {tab === 'sri' && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden animate-in fade-in duration-300 border-l-4 border-l-red-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="mb-6 border-b border-slate-700/50 pb-4">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Calculadora de Mora SRI
                        </h3>
                        <p className="text-sm text-slate-400 mt-1">Cotizado con Tasa Activa Referencial BCE: {formatPct(TASA_ACTIVA_BCE_REFERENCIAL)}</p>
                    </div>

                    <form onSubmit={handleSRI} className="space-y-6 relative z-10">
                        <div>
                            <label className="label-text">Monto de la Obligación Evadida o Atrasada (USD)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono">$</span>
                                <input type="number" step="0.01" min="1" required value={obligacionSRI} onChange={e => setObligacionSRI(e.target.value)} className="input-field pl-8 font-mono text-lg" placeholder="100.00" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label-text">Fecha Máxima de Pago (Vencimiento)</label>
                                <input type="date" required value={fechaVencimientoSRI} onChange={e => setFechaVencimientoSRI(e.target.value)} className="input-field" />
                            </div>
                            <div>
                                <label className="label-text">Fecha Exacta a Pagar (Hoy)</label>
                                <input type="date" required value={fechaPagoSRI} onChange={e => setFechaPagoSRI(e.target.value)} className="input-field" />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary mt-4">Calcular Deuda SRI</button>
                    </form>

                    {/* SRI Results inline */}
                    {resultadoSRI && (
                        <div className="mt-8 bg-slate-800 rounded-xl border border-red-900/50 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-red-900/30 p-4 text-center border-b border-red-900/50">
                                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Total a Pagar SRI</p>
                                <p className="text-4xl font-black text-white font-mono">{formatCurrency(resultadoSRI.totalPagar)}</p>
                            </div>
                            <div className="p-5 space-y-3 text-sm">
                                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md">
                                    <span className="text-slate-400">Impuesto Original</span>
                                    <span className="font-mono text-slate-200">{formatCurrency(parseFloat(obligacionSRI))}</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md">
                                    <span className="text-slate-400">Días de Retraso</span>
                                    <span className="font-mono text-red-400">{resultadoSRI.diasMora} días</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md border border-red-500/30">
                                    <span className="text-slate-300 font-bold">Intereses por Mora</span>
                                    <span className="font-mono text-red-400 font-bold">+{formatCurrency(resultadoSRI.interesMora)}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ANT Form */}
            {tab === 'ant' && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden animate-in fade-in duration-300 border-l-4 border-l-amber-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="mb-6 border-b border-slate-700/50 pb-4">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Multas de Tránsito (Revisión y Recargos)
                        </h3>
                        <p className="text-sm text-slate-400 mt-1">Basado en el C.O.I.P Ecuatoriano y SBU vigente.</p>
                    </div>

                    <form onSubmit={handleANT} className="space-y-6 relative z-10">
                        <div>
                            <label className="label-text">Gravedad de la Infracción de Tránsito</label>
                            <select
                                className="input-field appearance-none bg-slate-800"
                                value={tipoMultaANT}
                                onChange={e => setTipoMultaANT(e.target.value as TipoMultaANT)}
                            >
                                <optgroup label="Contravenciones Leves">
                                    <option value="LEVE_1">Primera Clase (Ej: No usar cinturón) - 5% SBU</option>
                                    <option value="LEVE_2">Segunda Clase (Ej: Usar bocina en exceso) - 10% SBU</option>
                                    <option value="LEVE_3">Tercera Clase (Ej: Estacionar mal) - 15% SBU</option>
                                </optgroup>
                                <optgroup label="Contravenciones Graves">
                                    <option value="GRAVE_1">Primera Clase (Ej: Exceso límite velocidad margen) - 30% SBU</option>
                                    <option value="GRAVE_2">Segunda Clase (Ej: No respetar señales pare/luz roja) - 40% SBU</option>
                                    <option value="GRAVE_3">Tercera Clase (Ej: Llantas lisas, derrame fluidos) - 50% SBU</option>
                                </optgroup>
                                <optgroup label="Infracciones Muy Graves">
                                    <option value="MUY_GRAVE">Muy Grave (Ej: Conducir sin licencia, exceso velocidad fuera de rango) - 100% SBU</option>
                                </optgroup>
                            </select>
                        </div>

                        <div>
                            <label className="label-text">Meses en mora (recargo legal 2% mensual, máximo 100%)</label>
                            <input type="number" min="0" max="60" required value={mesesRetrasoANT} onChange={e => setMesesRetrasoANT(e.target.value)} className="input-field" placeholder="0" />
                        </div>

                        <button type="submit" className="btn-primary !from-amber-600 !to-yellow-600 !shadow-amber-900/30 hover:!from-amber-500 hover:!to-yellow-500 mt-4">Consultar Multa</button>
                    </form>

                    {/* ANT Results inline */}
                    {resultadoANT && (
                        <div className="mt-8 bg-slate-800 rounded-xl border border-amber-900/50 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-amber-900/30 p-4 text-center border-b border-amber-900/50">
                                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">Valor Vigente a Pagar ANT</p>
                                <p className="text-4xl font-black text-white font-mono">{formatCurrency(resultadoANT.totalPagar)}</p>
                            </div>
                            <div className="p-5 space-y-3 text-sm">
                                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md">
                                    <span className="text-slate-400">Sanción Base (COIP)</span>
                                    <span className="font-mono text-slate-200">{formatCurrency(resultadoANT.valorMultaFija)}</span>
                                </div>
                                {resultadoANT.recargoMora > 0 && (
                                    <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md border border-red-500/30">
                                        <span className="text-slate-300 font-bold">Recargo Acumulado por Servir Mora</span>
                                        <span className="font-mono text-red-500 font-bold">+{formatCurrency(resultadoANT.recargoMora)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
