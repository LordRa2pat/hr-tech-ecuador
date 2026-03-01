import Link from 'next/link';

export const metadata = { title: "Términos de Uso | CalculaMultas.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-red">
                <Link href="/" className="inline-block mb-10 text-red-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead border-l-4 border-red-500 pl-4 bg-red-500/5 py-2 uppercase tracking-widest text-xs font-bold font-mono">Control de Penalidades 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Naturaleza de la Herramienta</h2>
                        <p>CalculaMultas.ec es un simulador matemático independiente que proyecta el cobro de intereses por mora tributaria y administrativa en Ecuador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Descargo de Responsabilidad</h2>
                        <p><strong>REGLA FUNDAMENTAL:</strong> El valor calculado es una proyección **referencial** y no vinculante. Solo los sistemas transaccionales del SRI, ANT o GADM correspondientes emiten el valor exacto a pagar. Este sitio no es responsable de diferencias entre el cálculo simulado y el cobro oficial.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Actualización de Tasas</h2>
                        <p>Aunque nos esforzamos por mantener las tasas vigentes, el Banco Central del Ecuador (BCE) puede realizar ajustes trimestrales que podrían no reflejarse instantáneamente en este portal.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
