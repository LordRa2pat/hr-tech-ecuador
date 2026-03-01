import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | CalculaImpuestos.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-emerald">
                <Link href="/" className="inline-block mb-10 text-emerald-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-2">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Tratamiento de Datos</h2>
                        <p>En CalculaImpuestos.ec, protegemos su privacidad. Los datos financieros que usted ingresa (ingresos, gastos, cargas) <strong>se procesan única y exclusivamente en su navegador local</strong>. Nuestra plataforma no recolecta, almacena ni envía esta información a servidores externos ni a bases de datos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Cookies de Terceros</h2>
                        <p>Este sitio web utiliza servicios de publicidad de terceros (Google AdSense y Monetag) que podrían emplear cookies para ofrecer anuncios basados en sus intereses. Estos datos son anónimos y no vinculan su identidad con su comportamiento de navegación.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Seguridad de la Información</h2>
                        <p>Al funcionar como una aplicación cliente-side, la seguridad de sus datos depende de su propio dispositivo. Recomendamos no compartir su pantalla mientras utiliza esta calculadora en entornos públicos.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
