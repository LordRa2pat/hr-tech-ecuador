import Link from 'next/link';

export const metadata = { title: "Políticas de Privacidad | Plataforma RIMPE" };

export default function Privacidad() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-12 px-4 md:px-8">
            <article className="max-w-3xl mx-auto prose dark:prose-invert prose-blue">
                <Link href="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 no-underline font-medium">
                    &larr; Volver a la Calculadora
                </Link>

                <h1>Políticas de Privacidad</h1>
                <p className="lead">Última actualización: Febrero 2026</p>

                <p>En el presente portal (en adelante "El Sitio"), nos tomamos muy en serio tu privacidad fiscal. Cumplimos a cabalidad con la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> de la República del Ecuador.</p>

                <h2>1. Procesamiento Local: Cero Almacenamiento</h2>
                <p><strong>Toda validación de cédulas, ingresos o multas se ejecuta localmente en el navegador del usuario. NO recopilamos, ni enviamos, ni almacenamos información financiera, RUCs o montos facturados en ninguna base de datos.</strong> La herramienta usa JavaScript ejecutado en su propio dispositivo (Client-Side Rendering) garantizando el anonimato total.</p>

                <h2>2. Cookies y Publicidad de Terceros</h2>
                <p>Utilizamos redes publicitarias como Google AdSense para financiar el desarrollo gratuito de la plataforma. Google y sus socios pueden usar cookies para mostrar anuncios relevantes basados en sus visitas previas a este u otros sitios web de internet.</p>
                <p>Puede inhabilitar la publicidad personalizada en cualquier momento visitando la Configuración de anuncios de Google.</p>

                <h2>3. Herramientas de Analítica</h2>
                <p>Usamos herramientas de análisis anónimas (como Google Analytics) que rastrean patrones de uso generales (clicks, tiempo en página) completamente desvinculados de su identidad o inputs financieros.</p>

                <h2>4. Contacto</h2>
                <p>Para peticiones ARCO (Acceso, Rectificación, Cancelación u Oposición), escríbenos a: legal@ecosistema-ec.com</p>
            </article>
        </main>
    );
}
