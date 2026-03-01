import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | MiJubilacion.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-orange">
                <Link href="/" className="inline-block mb-10 text-orange-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Simulador
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead border-l-4 border-orange-500 pl-4 bg-orange-500/5 py-2">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Datos Financieros Sensibles</h2>
                        <p>En MiJubilacion.ec, respetamos su planificación de vida. Los datos sobre sueldos, años de aportación y fechas de nacimiento <strong>se procesan estrictamente dentro de su navegador</strong>. No almacenamos esta información en bases de datos ni la compartimos con terceros.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Publicidad (AdSense / Monetag)</h2>
                        <p>Usamos servicios de publicidad de terceros que podrían utilizar cookies anónimas para mostrar anuncios relevantes. Estos datos no identifican al usuario personalmente.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Seguridad Local</h2>
                        <p>Toda la lógica de simulación de jubilación ocurre en tiempo real en el lado del cliente. No se generan perfiles de usuario.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
