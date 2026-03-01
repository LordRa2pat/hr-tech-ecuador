"use client";

import { useState, useEffect } from 'react';
import { validarIdentificacion, ValidacionResult } from '../lib/validators';

export default function ValidadorInput() {
    const [identificacion, setIdentificacion] = useState<string>('');
    const [resultado, setResultado] = useState<ValidacionResult | null>(null);

    useEffect(() => {
        if (identificacion.length >= 10 && identificacion.length <= 13) {
            setResultado(validarIdentificacion(identificacion));
        } else {
            setResultado(null);
        }
    }, [identificacion]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Solo permitir números
        const valor = e.target.value.replace(/\D/g, '').slice(0, 13);
        setIdentificacion(valor);
    };

    return (
        <div className="w-full max-w-xl mx-auto space-y-6">

            <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden text-center z-10 transition-all duration-300">

                {/* Glow effect based on validation */}
                {resultado && (
                    <div className={`absolute inset-0 bg-gradient-to-b opacity-20 transition-all duration-500 rounded-3xl ${resultado.valida ? 'from-green-500 to-transparent' : 'from-red-500 to-transparent'}`} />
                )}

                <div className="relative z-10">
                    <label htmlFor="id-input" className="block text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
                        Ingresa tu número de identidad
                    </label>
                    <input
                        id="id-input"
                        type="text"
                        inputMode="numeric"
                        value={identificacion}
                        onChange={handleChange}
                        placeholder="0000000000"
                        className="input-huge shadow-inner"
                        autoComplete="off"
                        autoFocus
                    />
                    <div className="flex justify-between items-center mt-3 px-2 text-xs">
                        <span className={identificacion.length === 10 ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                            Cédula (10)
                        </span>
                        <span className="text-slate-600 font-mono">{identificacion.length} / 13</span>
                        <span className={identificacion.length === 13 ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                            RUC (13)
                        </span>
                    </div>
                </div>

            </div>

            {resultado && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className={`glass-panel p-6 rounded-2xl border-l-4 ${resultado.valida ? 'border-l-green-500' : 'border-l-red-500'}`}>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                {resultado.valida ? (
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                            </div>
                            <div className="ml-3 w-full">
                                <h3 className={`text-lg font-bold ${resultado.valida ? 'text-green-400' : 'text-red-400'}`}>
                                    {resultado.valida ? 'Identificación Válida' : 'Identificación Inválida'}
                                </h3>
                                <div className="mt-2 text-sm text-slate-300">
                                    <p>{resultado.mensaje}</p>
                                </div>

                                {resultado.valida && (
                                    <div className="mt-4 bg-slate-800/50 rounded-lg p-3 grid grid-cols-2 gap-2 border border-slate-700">
                                        <div>
                                            <span className="block text-xs uppercase text-slate-500">Tipo de Documento</span>
                                            <span className="font-medium text-slate-200">{resultado.tipo}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase text-slate-500">Provincia Emisora</span>
                                            <span className="font-medium text-slate-200">{resultado.provincia || 'N/A'}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
