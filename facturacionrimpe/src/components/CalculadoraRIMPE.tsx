"use client";

import { useState } from 'react';
import { calcularImpuestoRIMPE, simularFactura, ResultadoRIMPE, FacturaDetalle } from '../lib/formulas';
import { IVA_2026, RETENCION_IR_EMPRENDEDOR } from '../constants/legal';

type TabActivo = 'anual' | 'factura';

export default function CalculadoraRIMPE() {
    const [tab, setTab] = useState<TabActivo>('anual');

    // Cálculo Anual State
    const [ingresosTotales, setIngresosTotales] = useState('');
    const [resultadoAnual, setResultadoAnual] = useState<ResultadoRIMPE | null>(null);

    // Simulador Factura State
    const [subtotalFactura, setSubtotalFactura] = useState('');
    const [esEmprendedor, setEsEmprendedor] = useState(true);
    const [detalleFactura, setDetalleFactura] = useState<FacturaDetalle | null>(null);

    const formatCurrency = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v);
    const formatPct = (v: number) => new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(v);

    const handleAnual = (e: React.FormEvent) => {
        e.preventDefault();
        setResultadoAnual(calcularImpuestoRIMPE({
            ingresosAnuales: parseFloat(ingresosTotales) || 0,
        }));
    };

    const handleFactura = (e: React.FormEvent) => {
        e.preventDefault();
        setDetalleFactura(simularFactura({
            subtotal: parseFloat(subtotalFactura) || 0,
            esRIMPEEmprendedor: esEmprendedor
        }));
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8">
            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-xl">
                <button
                    onClick={() => { setTab('anual'); setDetalleFactura(null); }}
                    className={`flex-1 py-4 px-4 text-sm font-bold border-b-2 transition-all ${tab === 'anual' ? 'tab-active' : 'tab-inactive'}`}
                >
                    Proyección Anual RIMPE
                </button>
                <button
                    onClick={() => { setTab('factura'); setResultadoAnual(null); }}
                    className={`flex-1 py-4 px-4 text-sm font-bold border-b-2 transition-all ${tab === 'factura' ? 'tab-active' : 'tab-inactive'}`}
                >
                    Simulador de Facturas/Retenciones
                </button>
            </div>

            {/* Proyección Anual Form */}
            {tab === 'anual' && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden animate-in fade-in duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Calculadora de Impuestos SRI</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Descubre en qué rango tributario recae tu negocio y cuánto le debes al fisco.</p>
                    </div>

                    <form onSubmit={handleAnual} className="space-y-6 relative z-10">
                        <div>
                            <label className="label-text">Ingresos Brutos Anuales (Proyección en USD)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input type="number" step="0.01" min="1" required value={ingresosTotales} onChange={e => setIngresosTotales(e.target.value)} className="input-field pl-12 font-mono text-lg" placeholder="15000.00" />
                            </div>
                            <p className="text-xs text-slate-500 mt-2">No incluyas el IVA en tu cálculo de ingresos brutos.</p>
                        </div>

                        <button type="submit" className="btn-primary mt-4">Calcular Impuesto a la Renta</button>
                    </form>

                    {resultadoAnual && (
                        <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-blue-900/50 overflow-hidden shadow-md animate-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 text-center border-b border-blue-100 dark:border-blue-900/50">
                                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Impuesto Anual Calculado</p>
                                <p className={`text-4xl font-black font-mono ${resultadoAnual.tipo === 'REGIMEN_GENERAL' ? 'text-red-500' : 'text-blue-700 dark:text-white'}`}>
                                    {resultadoAnual.tipo === 'REGIMEN_GENERAL' ? "Régimen General" : formatCurrency(resultadoAnual.impuestoPagar)}
                                </p>
                                <p className="text-sm text-blue-600/80 dark:text-blue-300 mt-2 font-medium">{resultadoAnual.mensaje}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Simulador Factura Form */}
            {tab === 'factura' && (
                <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden animate-in fade-in duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Crea Facturas sin Equivocarte</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Conoce cuánto IVA {formatPct(IVA_2026)} cobrar y qué retenciones aplican a tu factura.</p>
                    </div>

                    <form onSubmit={handleFactura} className="space-y-6 relative z-10">
                        <div>
                            <label className="label-text">Subtotal de la Venta (Sin Impuestos)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    required
                                    value={subtotalFactura}
                                    onChange={e => setSubtotalFactura(e.target.value)}
                                    className="input-field pl-12"
                                    placeholder="Ej: 15000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="label-text">Categoría Registrada SRI</label>
                            <div className="flex gap-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" checked={esEmprendedor} onChange={() => setEsEmprendedor(true)} className="w-5 h-5 text-indigo-600 bg-slate-100 border-slate-300 focus:ring-indigo-500 dark:bg-slate-700 dark:border-slate-600" />
                                    <span className="text-slate-700 dark:text-slate-200">RIMPE Emprendedor</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" checked={!esEmprendedor} onChange={() => setEsEmprendedor(false)} className="w-5 h-5 text-indigo-600 bg-slate-100 border-slate-300 focus:ring-indigo-500 dark:bg-slate-700 dark:border-slate-600" />
                                    <span className="text-slate-700 dark:text-slate-200">Negocio Popular</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary !from-indigo-600 !to-purple-600 mt-4">Simular Factura</button>
                    </form>

                    {detalleFactura && (
                        <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl border border-indigo-200 dark:border-indigo-900/50 overflow-hidden shadow-md animate-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 text-center border-b border-indigo-100 dark:border-indigo-900/50">
                                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Monto Líquido a Recibir</p>
                                <p className="text-4xl font-black text-indigo-700 dark:text-white font-mono">{formatCurrency(detalleFactura.totalARecibir)}</p>
                                <p className="text-xs text-slate-500 mt-1">(Tras posibles retenciones aplicables del cliente final)</p>
                            </div>
                            <div className="p-5 space-y-3 text-sm">
                                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-md">
                                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                                    <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{formatCurrency(detalleFactura.subtotal)}</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-md">
                                    <span className="text-slate-600 dark:text-slate-400">IVA ({esEmprendedor ? formatPct(IVA_2026) : 'N/A'})</span>
                                    <span className="font-mono text-indigo-500 font-medium">+{formatCurrency(detalleFactura.iva)}</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-3 rounded-md font-bold">
                                    <span className="text-slate-700 dark:text-slate-200">Total en Factura</span>
                                    <span className="font-mono text-slate-900 dark:text-white">{formatCurrency(detalleFactura.totalFactura)}</span>
                                </div>
                                {detalleFactura.retencionIR > 0 && (
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-md border border-red-200 dark:border-red-900/30 mt-2">
                                        <span className="text-slate-600 dark:text-slate-400">Retención Esperada en la Fuente (1%)</span>
                                        <span className="font-mono text-red-500">-{formatCurrency(detalleFactura.retencionIR)}</span>
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
