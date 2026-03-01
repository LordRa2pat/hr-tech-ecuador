import Link from 'next/link';

export const metadata = { title: "Términos de Uso | ValidaCedula.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-blue">
                <Link href="/" className="inline-block mb-10 text-blue-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Validador
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead font-mono text-sm opacity-60">Versión 2.0 (2026)</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Alcance Técnico</h2>
                        <p>ValidaCedula.ec ofrece una validación matemática de la estructura de documentos de identidad ecuatorianos. El servicio es de libre acceso y gratuito.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Limitación de Garantías</h2>
                        <p><strong>REGLA CRÍTICA:</strong> Un resultado positivo implica que el número es "matemáticamente posible" según los estándares del Registro Civil, pero de ninguna manera garantiza que dicho número corresponda a un ciudadano real o que esté activo. Use esta información como referencia inicial.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. No Afiliación</h2>
                        <p>Este sitio es un proyecto independiente del ecosistema One Page Ecuador y no tiene vínculo oficial con la Dirección General de Registro Civil, Identificación y Cedulación ni con el SRI.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
