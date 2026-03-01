import Link from 'next/link';

export const metadata = { title: "Términos y Condiciones | Conversor de Tierras" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose dark:prose-invert prose-stone">
                <Link href="/" className="inline-block mb-10 text-green-700 dark:text-green-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Conversor
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead">Última actualización: Febrero 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Naturaleza del Servicio</h2>
                        <p>Este sitio web proporciona una herramienta de conversión de medidas de superficie basada en coeficientes tradicionales ecuatorianos y métricos internacionales. La información se ofrece con fines educativos e informativos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Exclusión de Responsabilidad Legal</h2>
                        <p><strong>IMPORTANTE:</strong> Los resultados de esta calculadora no constituyen un certificado legal. El "Conversor de Tierras" no tiene validez legal para procesos judiciales, catastrales, notariales ni de registro de la propiedad. No reemplaza las mediciones topográficas profesionales (CPA) ni las certificaciones del MAG o GADs Municipales.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Uso del Contenido</h2>
                        <p>Queda prohibida la reproducción total o parcial de los algoritmos y la interfaz de este sitio sin autorización expresa de los autores del ecosistema One Page Ecuador.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
