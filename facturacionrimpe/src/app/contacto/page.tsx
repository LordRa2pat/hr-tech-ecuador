import Link from 'next/link';

export default function Contacto() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 flex flex-col p-8 md:p-16 lg:p-24 selection:bg-blue-500/30">
            <div className="max-w-3xl mx-auto w-full space-y-12">
                <header className="space-y-4">
                    <Link href="/" className="text-blue-600 dark:text-blue-400 font-bold flex items-center mb-8 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Volver al Inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Contáctanos</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        ¿Tienes dudas sobre tu categoría RIMPE o necesitas reportar una discrepancia en el simulador? Déjanos un mensaje.
                    </p>
                </header>

                <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Consultas Técnicas</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Para soporte sobre el simulador o errores técnicos:
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center space-x-4 group hover:border-blue-500/50 transition-colors">
                            <div className="bg-blue-600/10 p-3 rounded-xl text-blue-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                            </div>
                            <span className="text-xl font-mono text-slate-900 dark:text-white select-all">soporte@ecuadoresmejor.com</span>
                        </div>
                    </div>
                </section>

                <footer className="text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-900 pt-8 text-center">
                    <p>© 2026 Red ECO Ecuatoriana. Herramientas cívicas y privadas.</p>
                </footer>
            </div>
        </main>
    );
}
