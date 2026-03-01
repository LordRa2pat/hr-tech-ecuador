import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | Conversor de Tierras" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose dark:prose-invert prose-stone">
                <Link href="/" className="inline-block mb-10 text-green-700 dark:text-green-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Conversor
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Procesamiento 100% Local</h2>
                        <p>Este conversor de medidas agrarias funciona exclusivamente mediante lógica de cliente (JavaScript). <strong>No enviamos, recolectamos ni almacenamos</strong> el valor de sus tierras, coordenadas geográficas, ni ningún dato ingresado en el buscador en servidores externos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Publicidad y Cookies</h2>
                        <p>Utilizamos servicios de terceros como Google AdSense para la entrega de publicidad. Estos proveedores pueden utilizar cookies para mostrar anuncios basados en sus intereses. Puede gestionar sus preferencias de cookies desde la configuración de su navegador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Seguridad</h2>
                        <p>Al no recopilar datos personales, el riesgo de filtración de información sensible referente a sus predios o patrimonio es nulo en nuestro sistema.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
