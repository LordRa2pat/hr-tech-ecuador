import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | ValidaCedula.ec" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-blue">
                <Link href="/" className="inline-block mb-10 text-blue-400 no-underline font-bold hover:translate-x-[-4px] transition-transform">
                    &larr; Volver al Validador
                </Link>

                <h1 className="text-4xl font-black mb-8">Políticas de Privacidad</h1>
                <p className="lead border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-2">Cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) - Ecuador 2026.</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">1. Privacidad por Diseño</h2>
                        <p>En ValidaCedula.ec, el respeto por su identidad es fundamental. Los números de identificación que usted ingresa para validación <strong>son procesados estrictamente en la memoria de su navegador</strong>. Nuestra aplicación no transmite, guarda ni comparte estos números con ninguna entidad externa.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">2. Publicidad y Cookies</h2>
                        <p>Utilizamos redes de anuncios (Google AdSense y Monetag) que pueden usar cookies para mostrar publicidad relevante. Esta información es anónima y sirve para mantener la gratuidad de este servicio.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">3. Local Processing</h2>
                        <p>Toda la lógica de algoritmos Módulo 10 y 11 se ejecuta en el dispositivo del usuario. No existe comunicación de base de datos para la validación de la estructura del documento.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
