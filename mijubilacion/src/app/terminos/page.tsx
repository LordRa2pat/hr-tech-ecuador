import Link from 'next/link';

export const metadata = { title: "Términos de Uso | MiJubilacion.ec" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-orange">
                <Link href="/" className="inline-block mb-10 text-orange-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Simulador
                </Link>

                <h1 className="text-4xl font-black mb-8">Términos y Condiciones de Uso</h1>
                <p className="lead font-bold uppercase tracking-tighter opacity-50">Versión Legislativa 2026</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Objeto del Sitio</h2>
                        <p>MiJubilacion.ec es una plataforma de simulación actuarial simplificada para fines educativos e informativos sobre pensiones en Ecuador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Exención de Responsabilidad</h2>
                        <p><strong>ATENCIÓN:</strong> El cálculo de pensión del IESS o jubilación patronal emitido por esta web es una <strong>estimación referencial</strong>. Bajo ninguna circunstancia compromete al IESS, al Ministerio del Trabajo o a empleadores privados. Solo el historial oficial de aportes en el portal del IESS determina la pensión final.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Uso de la Información</h2>
                        <p>El usuario es responsable de verificar la exactitud de los datos que ingresa en las calculadoras de simulación.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
