import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | MisDécimos.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-slate">
                <Link href="/" className="inline-block mb-10 text-ecu-yellow no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver a la Calculadora
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Tratamiento de Datos</h2>
                        <p>En MisDécimos.ec, la privacidad es nuestra prioridad. Los datos que usted ingresa en la calculadora (salario, región, etc.) <strong>se procesan única y exclusivamente en su navegador</strong>. No almacenamos, recolectamos ni enviamos su información financiera a ningún servidor externo.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Cookies y Terceros</h2>
                        <p>Utilizamos cookies de terceros a través de Google AdSense y Monetag para personalizar los anuncios y analizar el tráfico de forma anónima. Estos proveedores pueden recopilar información sobre sus visitas a este y otros sitios web.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Seguridad</h2>
                        <p>Al ser un sitio estático de cálculo local, el riesgo de exposición de sus datos personales es nulo, ya que nunca salen de su dispositivo.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
