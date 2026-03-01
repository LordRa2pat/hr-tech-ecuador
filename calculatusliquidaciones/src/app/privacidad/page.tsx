import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | CalculaTusLiquidaciones.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-amber">
                <Link href="/" className="inline-block mb-10 text-amber-500 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead border-l-4 border-amber-600 pl-4 bg-amber-600/5 py-2">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Confidencialidad Laboral</h2>
                        <p>En CalculaTusLiquidaciones.ec, entendemos la sensibilidad de su información laboral. Los datos de salarios y fechas que usted ingresa <strong>se procesan exclusivamente en la memoria local de su navegador</strong>. No almacenamos, recolectamos ni enviamos estos datos a ningún servidor externo.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Publicidad y Mediciones</h2>
                        <p>Utilizamos redes publicitarias (Google AdSense y Monetag) que pueden recolectar datos anónimos mediante cookies para fines estadísticos y de personalización de anuncios.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. No Guardado de Cálculos</h2>
                        <p>Al procesarse todo en el lado del cliente, sus cálculos se borran automáticamente al cerrar la pestaña del navegador.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
