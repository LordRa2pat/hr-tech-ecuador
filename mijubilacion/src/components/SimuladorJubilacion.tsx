"use client";

import { useState } from 'react';
import { calcularJubilacionIESS, calcularJubilacionPatronal, ResultadoIESS, ResultadoPatronal } from '../lib/formulas';

type TabActivo = 'iess' | 'patronal';

export default function SimuladorJubilacion() {
    const [tab, setTab] = useState<TabActivo>('iess');

    // IESS State
    const [imposiciones, setImposiciones] = useState('');
    const [sueldoActual, setSueldoActual] = useState('');
    const [edadActual, setEdadActual] = useState('');
    const [resultadoIESS, setResultadoIESS] = useState<ResultadoIESS | null>(null);

    // Patronal State
    const [aniosTrabajados, setAniosTrabajados] = useState('');
    const [sueldosTexto, setSueldosTexto] = useState(''); // Sueldos anuales separados por coma
    const [sexo, setSexo] = useState<'m' | 'f'>('m');
    const [edadJubilacion, setEdadJubilacion] = useState('65');
    const [resultadoPatronal, setResultadoPatronal] = useState<ResultadoPatronal | null>(null);

    const formatCurrency = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v);

    const calcularIESS = (e: React.FormEvent) => {
        e.preventDefault();
        setResultadoIESS(calcularJubilacionIESS({
            imposicionesTotales: parseInt(imposiciones) || 0,
            sueldoActual: parseFloat(sueldoActual) || 0,
            edadActual: parseInt(edadActual) || 0,
        }));
    };

    const calcularPatronal = (e: React.FormEvent) => {
        e.preventDefault();
        const sueldos = sueldosTexto.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s));
        setResultadoPatronal(calcularJubilacionPatronal({
            aniosTrabajados: parseInt(aniosTrabajados) || 0,
            mejoresSueldos: sueldos,
            sexo,
            edadJubilacion: parseInt(edadJubilacion) || 60
        }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8">

            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden border border-slate-700">
                <button onClick={() => { setTab('iess'); setResultadoPatronal(null); }} className={`flex-1 py-3 px-4 text-sm font-semibold border-b-2 transition-all ${tab === 'iess' ? 'tab-active' : 'tab-inactive'}`}>
                    Jubilación IESS
                </button>
                <button onClick={() => { setTab('patronal'); setResultadoIESS(null); }} className={`flex-1 py-3 px-4 text-sm font-semibold border-b-2 transition-all ${tab === 'patronal' ? 'tab-active' : 'tab-inactive'}`}>
                    Jubilación Patronal
                </button>
            </div>

            {/* IESS Form */}
            {tab === 'iess' && (
                <div className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden bg-slate-900 shadow-2xl border-2 border-slate-700">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <form onSubmit={calcularIESS} className="space-y-8 relative z-10">
                        <div>
                            <label className="label-text text-xl text-white font-bold mb-3 block">Total de Imposiciones (meses aportados)</label>
                            <input type="number" min="0" required value={imposiciones} onChange={e => setImposiciones(e.target.value)} className="input-field text-2xl py-4 bg-slate-800 text-white border-slate-500" placeholder="Ej: 240" />
                            <p className="text-sm text-slate-300 mt-2 font-medium">Mínimo para jubilación ordinaria: 120 (10 años).</p>
                        </div>
                        <div>
                            <label className="label-text text-xl text-white font-bold mb-3 block">Sueldo Mensual Actual (USD)</label>
                            <div className="relative">
                                {!sueldoActual && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl font-bold">$</span>}
                                <input type="number" step="0.01" min="1" required value={sueldoActual} onChange={e => setSueldoActual(e.target.value)} className={`input-field ${!sueldoActual ? 'pl-14' : 'pl-4'} text-2xl py-5 bg-slate-800 text-white border-slate-500`} placeholder="Ej: 1200.00" />
                            </div>
                        </div>
                        <div>
                            <label className="label-text text-xl text-white font-bold mb-3 block">Edad Actual (años)</label>
                            <input type="number" min="18" max="85" required value={edadActual} onChange={e => setEdadActual(e.target.value)} className="input-field text-2xl py-4 bg-slate-800 text-white border-slate-500" placeholder="Ej: 65" />
                        </div>
                        <button type="submit" className="btn-primary py-5 text-2xl font-black bg-orange-600 hover:bg-orange-500 text-white shadow-lg transition-transform hover:scale-105 active:scale-95">Simular Jubilación</button>
                    </form>
                </div>
            )}

            {/* Patronal Form */}
            {tab === 'patronal' && (
                <div className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden bg-slate-900 shadow-2xl border-2 border-slate-700">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <form onSubmit={calcularPatronal} className="space-y-8 relative z-10">
                        <div>
                            <label className="label-text text-xl text-white font-bold mb-3 block">Años con el Mismo Empleador</label>
                            <input type="number" min="0" required value={aniosTrabajados} onChange={e => setAniosTrabajados(e.target.value)} className="input-field text-2xl py-4 bg-slate-800 text-white border-slate-500" placeholder="Ej: 28" />
                            <p className="text-sm text-slate-300 mt-2 font-medium">Mínimo requerido: 25 años.</p>
                        </div>
                        <div>
                            <label className="label-text text-xl text-white font-bold mb-3 block">5 Mejores Sueldos Anuales (USD)</label>
                            <input type="text" required value={sueldosTexto} onChange={e => setSueldosTexto(e.target.value)} className="input-field text-xl py-4 bg-slate-800 text-white border-slate-500" placeholder="18000, 19200, 20400, 21600, 22800" />
                            <p className="text-sm text-slate-300 mt-2 font-medium italic">Separa los valores por comas.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="label-text text-white font-bold mb-2 block">Sexo</label>
                                <select value={sexo} onChange={e => setSexo(e.target.value as 'm' | 'f')} className="input-field bg-slate-800">
                                    <option value="m">Hombre</option>
                                    <option value="f">Mujer</option>
                                </select>
                            </div>
                            <div>
                                <label className="label-text text-white font-bold mb-2 block">Edad de Jubilación</label>
                                <input type="number" min="39" max="78" value={edadJubilacion} onChange={e => setEdadJubilacion(e.target.value)} className="input-field bg-slate-800" />
                            </div>
                        </div>
                        <button type="submit" className="btn-primary py-5 text-2xl font-black bg-amber-600 hover:bg-amber-500 text-white shadow-lg transition-transform hover:scale-105 active:scale-95">Simular Patronal</button>
                    </form>
                </div>
            )}

            {/* IESS Result */}
            {resultadoIESS && (
                <div className="glass-panel rounded-2xl overflow-hidden border-4 border-orange-500 animate-in fade-in zoom-in duration-500 bg-slate-950">
                    <div className="bg-orange-600/20 p-8 text-center border-b border-orange-500/30">
                        <p className="text-lg text-orange-200 uppercase tracking-widest font-bold mb-2">Pensión Estimada</p>
                        <p className="text-5xl md:text-7xl font-black text-white font-mono">
                            {formatCurrency(resultadoIESS.pensionFinal)}
                            <span className="text-2xl text-orange-400">/mes</span>
                        </p>
                    </div>
                    <div className="p-8 space-y-5">
                        <div className={`p-5 rounded-xl text-xl font-bold text-center ${resultadoIESS.cumpleImposiciones ? 'bg-green-600/20 text-green-300 border-2 border-green-500' : 'bg-red-600/20 text-red-300 border-2 border-red-500'}`}>
                            {resultadoIESS.mensaje}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
                            <div className="bg-slate-800 p-5 rounded-xl border-2 border-slate-700 shadow-inner">
                                <span className="text-sm text-slate-400 block font-bold mb-1">Años Aportados</span>
                                <span className="text-3xl font-black text-white">{resultadoIESS.aniosAportados}</span>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border-2 border-slate-700 shadow-inner">
                                <span className="text-sm text-slate-400 block font-bold mb-1">Pensión Mínima (2026)</span>
                                <span className="text-3xl font-black text-white">{formatCurrency(resultadoIESS.pensionMinima)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Patronal Result */}
            {resultadoPatronal && (
                <div className="glass-panel rounded-2xl overflow-hidden border-4 border-amber-500 animate-in fade-in zoom-in duration-500 bg-slate-950">
                    <div className="bg-amber-600/20 p-8 text-center border-b border-amber-500/30">
                        <p className="text-lg text-amber-200 uppercase tracking-widest font-bold mb-2">Pensión Patronal Estimada</p>
                        <p className="text-5xl md:text-7xl font-black text-white font-mono">
                            {formatCurrency(resultadoPatronal.pensionMensualEstimada)}
                            <span className="text-2xl text-amber-400">/mes</span>
                        </p>
                    </div>
                    <div className="p-8 space-y-5">
                        <div className={`p-5 rounded-xl text-xl font-bold text-center ${resultadoPatronal.cumpleRequisito ? 'bg-green-600/20 text-green-300 border-2 border-green-500' : 'bg-red-600/20 text-red-300 border-2 border-red-500'}`}>
                            {resultadoPatronal.mensaje}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
                            <div className="bg-slate-800 p-5 rounded-xl border-2 border-slate-700 shadow-inner">
                                <span className="text-sm text-slate-400 block font-bold mb-1">Promedio Anual (5 Mejores)</span>
                                <span className="text-2xl font-black text-white">{formatCurrency(resultadoPatronal.promedioMejoresAnios)}</span>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border-2 border-slate-700 shadow-inner">
                                <span className="text-sm text-slate-400 block font-bold mb-1">Años Registrados</span>
                                <span className="text-3xl font-black text-white">{aniosTrabajados}</span>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border-2 border-slate-700 shadow-inner md:col-span-2">
                                <span className="text-sm text-slate-400 block font-bold mb-1">Haber Individual (Art. 216)</span>
                                <span className="text-3xl font-black text-amber-400">{formatCurrency(resultadoPatronal.haberIndividual)}</span>
                                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">Fórmula: (Promedio * 0.05) * Años Servicio</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
