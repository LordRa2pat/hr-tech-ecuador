import Link from 'next/link';

export const metadata = { title: "Términos de Uso | CalculaTusLiquidaciones.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-amber">
                <Link href="/" className="inline-block mb-10 text-amber-500 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead border-l-4 border-amber-600 pl-4 bg-amber-600/5 py-2 uppercase tracking-widest text-xs font-bold">Aviso legal obligatorio para el año 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Carácter del Servicio</h2>
                        <p>CalculaTusLiquidaciones.ec ofrece una simulación técnica gratuita basada en las fórmulas vigentes del Código del Trabajo del Ecuador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Descargo de Responsabilidad</h2>
                        <p><strong>IMPORTANTE:</strong> El resultado obtenido es de carácter estrictamente referencial. No constituye una liquidación legal exigible ni reemplaza al Acta de Finiquito del Ministerio del Trabajo. Recomendamos validar los resultados con un abogado laboralista colegiado.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Veracidad de Datos</h2>
                        <p>La exactitud del cálculo depende enteramente de la veracidad y precisión de los datos ingresados por el usuario respecto a sus fechas de ingreso, salida y remuneraciones.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
