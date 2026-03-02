"use client";

import { useState } from 'react';
import { calcularLiquidacion, ResultadosLiquidacion, DatosLiquidacion } from '../lib/formulas';
import { REGIONES, MotivoSalida } from '../constants/legal';

export default function LiquidadorLaboral() {
    const [datos, setDatos] = useState<Partial<DatosLiquidacion>>({
        region: 'Sierra',
        motivo: 'RENUNCIA',
        vacacionesGozadasAnioEnCurso: 0,
        recibeFondosReservaMensual: true,
        recibeDecimoTerceroMensual: false,
        recibeDecimoCuartoMensual: false,
    });

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [remuneracion, setRemuneracion] = useState('');

    const [resultado, setResultado] = useState<ResultadosLiquidacion | null>(null);

    const calcular = (e: React.FormEvent) => {
        e.preventDefault();

        if (!fechaInicio || !fechaFin || !remuneracion) return;

        const calculo = calcularLiquidacion({
            ...datos,
            fechaInicio: new Date(fechaInicio),
            fechaFin: new Date(fechaFin),
            remuneracionMensual: parseFloat(remuneracion) || 0,
        } as DatosLiquidacion);

        setResultado(calculo);
    };

    const formateaMoneda = (valor: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">

            <div className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                <form onSubmit={calcular} className="space-y-8 relative z-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-200 border-b border-slate-700 pb-2">Datos Base del Contrato</h3>

                            <div>
                                <label className="label-text">Fecha de Ingreso</label>
                                <input
                                    type="date"
                                    required
                                    value={fechaInicio}
                                    onChange={e => setFechaInicio(e.target.value)}
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="label-text">Fecha de Salida</label>
                                <input
                                    type="date"
                                    required
                                    value={fechaFin}
                                    onChange={e => setFechaFin(e.target.value)}
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="label-text">Remuneración Mensual Unificada (USD)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="1"
                                        required
                                        value={remuneracion}
                                        onChange={e => setRemuneracion(e.target.value)}
                                        className="input-field pl-12"
                                        placeholder="Ej: 800.00"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label-text">Motivo de la Salida</label>
                                <select
                                    className="input-field appearance-none"
                                    value={datos.motivo}
                                    onChange={e => setDatos({ ...datos, motivo: e.target.value as MotivoSalida })}
                                >
                                    <option value="RENUNCIA">Renuncia / Desahucio Voluntario</option>
                                    <option value="ACUERDO_MUTUO">Mutuo Acuerdo (Igual a Renuncia)</option>
                                    <option value="DESPIDO_INTEMPESTIVO">Despido Intempestivo (Injustificado)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-200 border-b border-slate-700 pb-2">Configuración de Beneficios</h3>

                            <div>
                                <label className="label-text">Región Laboral (Afecta Décimo 4to)</label>
                                <select
                                    className="input-field appearance-none"
                                    value={datos.region}
                                    onChange={e => setDatos({ ...datos, region: e.target.value as any })}
                                >
                                    <option value={REGIONES.SIERRA}>Sierra / Amazonía</option>
                                    <option value={REGIONES.COSTA}>Costa / Galápagos</option>
                                </select>
                            </div>

                            <div>
                                <label className="label-text">Días de vacaciones gozadas este último año</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="30"
                                    value={datos.vacacionesGozadasAnioEnCurso}
                                    onChange={e => setDatos({ ...datos, vacacionesGozadasAnioEnCurso: parseInt(e.target.value) || 0 })}
                                    className="input-field"
                                />
                                <p className="text-xs text-slate-500 mt-1">Si no tomaste vacaciones desde tu último aniversario, pon 0.</p>
                            </div>

                            <div className="space-y-3 pt-2">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={datos.recibeFondosReservaMensual}
                                        onChange={e => setDatos({ ...datos, recibeFondosReservaMensual: e.target.checked })}
                                        className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-600 focus:ring-yellow-600 focus:ring-offset-slate-900"
                                    />
                                    <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">Cobro Fondos de Reserva mensualizados</span>
                                </label>

                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={datos.recibeDecimoTerceroMensual}
                                        onChange={e => setDatos({ ...datos, recibeDecimoTerceroMensual: e.target.checked })}
                                        className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-600 focus:ring-yellow-600 focus:ring-offset-slate-900"
                                    />
                                    <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">Mensualizo Décimo Tercer Sueldo</span>
                                </label>

                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={datos.recibeDecimoCuartoMensual}
                                        onChange={e => setDatos({ ...datos, recibeDecimoCuartoMensual: e.target.checked })}
                                        className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-600 focus:ring-yellow-600 focus:ring-offset-slate-900"
                                    />
                                    <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">Mensualizo Décimo Cuarto Sueldo</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-6">
                        Generar Proforma de Liquidación
                    </button>
                </form>
            </div>

            {/* RESULTADO (Solo visible tras calcular) */}
            {resultado && (
                <div className="glass-panel rounded-3xl overflow-hidden animate-in zoom-in-95 duration-500">
                    <div className="bg-slate-800/80 border-b border-slate-700/80 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                        <h2 className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-2">Liquidación Estimada</h2>
                        <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-amber-600 font-mono tracking-tight drop-shadow-sm">
                            {formateaMoneda(resultado.totalRecibir)}
                        </p>
                        <p className="text-slate-500 text-xs mt-3 max-w-lg">Valor bruto referencial. No incluye descuentos por anticipos, préstamos o aportes pendientes al IESS del último mes.</p>
                    </div>

                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="space-y-4">
                            <h4 className="text-slate-300 font-bold uppercase text-xs tracking-wider border-b border-slate-700 pb-2">1. Beneficios de Ley y Derechos</h4>

                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Décimo Tercero (Proporcional)</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.proporcionalDecimoTercero)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Décimo Cuarto (Proporcional)</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.proporcionalDecimoCuarto)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Vacaciones no Gozadas</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.vacacionesNoGozadas)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Fondos de Reserva Pendientes</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.fondosDeReserva)}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-slate-300 font-bold uppercase text-xs tracking-wider border-b border-slate-700 pb-2">2. Indemnizaciones (Art. 185 y 188)</h4>

                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Bonificación por Desahucio (25%)</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.desahucio)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Indemnización Despido Intempestivo</span>
                                <span className="font-mono text-slate-200">{formateaMoneda(resultado.despidoIntempestivo)}</span>
                            </div>

                            <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                <span className="text-xs text-slate-500 block mb-1">Tiempo de Servicio Computado:</span>
                                <span className="text-sm font-medium text-slate-300">{resultado.aniosCompletos} años y {resultado.mesesTrabajadosUltimoAnio} meses</span>
                            </div>
                        </div>

                    </div>

                    {resultado.alertas.length > 0 && (
                        <div className="bg-amber-900/30 border-t border-amber-900/50 p-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <div className="text-sm text-amber-200/80">
                                    <span className="font-bold text-amber-500 block mb-1">Avisos del Sistema:</span>
                                    <ul className="list-disc pl-4 space-y-1">
                                        {resultado.alertas.map((a, i) => <li key={i}>{a}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}
