import Link from 'next/link';

export const metadata = { title: "Términos de Uso | MisDécimos.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-slate">
                <Link href="/" className="inline-block mb-10 text-ecu-yellow no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead">Última actualización: Febrero 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Uso del Servicio</h2>
                        <p>MisDécimos.ec proporciona una herramienta gratuita para el cálculo referencial de beneficios laborales en Ecuador. El uso de esta web es responsabilidad exclusiva del usuario.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Exclusión de Responsabilidad</h2>
                        <p><strong>IMPORTANTE:</strong> Los resultados obtenidos son simulaciones informativas basadas en la legislación laboral vigente. Este portal no emite certificaciones legales. Recomendamos consultar con un profesional antes de tomar decisiones basadas en estos cálculos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Propiedad Intelectual</h2>
                        <p>El diseño, código y algoritmos de este portal pertenecen al ecosistema One Page Ecuador. Queda prohibida su reproducción sin autorización previa.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
