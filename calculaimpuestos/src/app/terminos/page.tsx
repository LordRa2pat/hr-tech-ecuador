import Link from 'next/link';

export const metadata = { title: "Términos de Uso | CalculaImpuestos.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-emerald">
                <Link href="/" className="inline-block mb-10 text-emerald-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead">Vigencia: Año Fiscal 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Naturaleza del Servicio</h2>
                        <p>CalculaImpuestos.ec es una herramienta de simulación gratuita y abierta orientada a facilitar la comprensión del Impuesto a la Renta de Personas Naturales en Ecuador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Descargo de Responsabilidad</h2>
                        <p><strong>ATENCIÓN:</strong> El cálculo generado es una proyección referencial no vinculante. Los datos del SRI, porcentajes de retención y límites de gastos pueden variar por disposición gubernamental. Este sitio no se hace responsable de discrepancias en declaraciones oficiales ante el SRI.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Uso Aceptable</h2>
                        <p>Queda prohibido el uso de esta herramienta para fines ilícitos o la extracción masiva de sus algoritmos de cálculo fuera del ecosistema One Page Ecuador.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
