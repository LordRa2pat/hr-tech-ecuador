import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | CalculaMultas.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-red">
                <Link href="/" className="inline-block mb-10 text-red-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead border-l-4 border-red-500 pl-4 bg-red-500/5 py-2">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Datos de Infracciones</h2>
                        <p>En CalculaMultas.ec, priorizamos su anonimato. Los valores de multas o fechas de infracción que usted ingresa <strong>se procesan única y exclusivamente en su navegador local</strong>. Nuestra plataforma no recolecta, almacena ni transmite estos datos a terceras partes ni a entidades gubernamentales.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Cookies de Publicidad</h2>
                        <p>Usamos servicios de publicidad (Google AdSense y Monetag) que podrían utilizar cookies técnicas para mejorar la relevancia de los anuncios. Estos datos son disociados y no permiten identificar al usuario final.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. No Registro</h2>
                        <p>No solicitamos cuentas ni correos electrónicos para utilizar el simulador de multas.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
