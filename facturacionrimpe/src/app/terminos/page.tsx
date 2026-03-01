import Link from 'next/link';

export const metadata = { title: "Términos y Condiciones | Plataforma RIMPE" };

export default function Terminos() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-12 px-4 md:px-8">
            <article className="max-w-3xl mx-auto prose dark:prose-invert prose-blue">
                <Link href="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 no-underline font-medium">
                    &larr; Volver a la Calculadora
                </Link>

                <h1>Términos y Condiciones de Uso</h1>
                <p className="lead">Última actualización: Febrero 2026</p>

                <h2>1. Naturaleza de la Herramienta</h2>
                <p>Esta calculadora fiscal se proporciona "tal cual" (as is) y tiene una finalidad única y estrictamente <strong>informativa/educativa</strong>. Este portal <strong>no guarda afiliación, auspicio, ni nexo institucional alguno</strong> con el Servicio de Rentas Internas (SRI), ni el Gobierno de la República del Ecuador.</p>

                <h2>2. Ausencia de Asesoramiento Legal o Contable</h2>
                <p>Los algoritmos utilizados se basan en publicaciones tributarias y tablas progresivas del régimen RIMPE al corte de su última actualización en el Código Tributario y Ley de Régimen Tributario Interno. Sin embargo, los resultados mostrados NO sustituyen bajo ningún concepto la opinión de un Contador Público Autorizado (CPA) o la preliquidación expedida en el portal oficial "SRI en Línea".</p>

                <h2>3. Descargo de Responsabilidad</h2>
                <p>Renunciamos expresamente a cualquier responsabilidad por decisiones financieras, tributarias o pago de multas o intereses causados directa o indirectamente por el uso de esta calculadora. Corresponde al usuario corroborar siempre la vigencia de los datos en su matriz contable.</p>

                <h2>4. Derechos de Autor</h2>
                <p>El código propietario de cálculo y el diseño de la interfaz son propiedad del ecosistema de desarrollo de software ecuatoriano y están protegidos contra reproducciones masivas no autorizadas. Las tablas tributarias mostradas son de dominio y acceso público estatal.</p>

            </article>
        </main>
    );
}
