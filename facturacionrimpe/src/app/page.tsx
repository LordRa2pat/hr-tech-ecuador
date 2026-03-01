import CalculadoraRIMPE from '../components/CalculadoraRIMPE';
import Link from 'next/link';
import { IVA_2026 } from '../constants/legal';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-blue-500/30 selection:text-blue-700 dark:selection:text-blue-400">

      {/* Top Ad Skeleton (Above Header) */}
      <div className="w-full max-w-5xl mx-auto p-4 hidden md:block">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full py-1.5 px-4 mb-4 shadow-sm">
            <span className="flex w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Régimen Simplificado SRI Actualizado</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Calculadora <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">RIMPE Ecuador</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Calcula exactamente tu impuesto anual a la renta si eres Emprendedor o Negocio Popular. Simula facturas con el nuevo IVA del {IVA_2026 * 100}% y retenciones al instante.
          </p>
        </header>

        <section className="w-full mb-16">
          <CalculadoraRIMPE />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-400 dark:text-slate-500 font-mono italic">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose dark:prose-invert prose-blue mb-16 px-4">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white border-b-4 border-blue-600 pb-4 mb-10">¿Cómo funciona el RIMPE en 2026?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">P</span>
                Negocio Popular
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4">
                Personas naturales con ingresos brutos hasta <strong>$20,000 USD</strong> anuales.
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 mb-6">
                <li>• Cuota fija anual (desde $3.00).</li>
                <li>• Emisión de <strong>Notas de Venta</strong>.</li>
                <li>• No desglosan IVA en sus ventas.</li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">E</span>
                Emprendedores
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4">
                Ingresos entre <strong>$20,001 y $300,000 USD</strong> anuales.
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 mb-6">
                <li>• Tabla progresiva (1% al 2%).</li>
                <li>• Facturación electrónica obligatoria.</li>
                <li>• <strong>Retención del 1%</strong> en la fuente.</li>
              </ul>
              <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded-xl border border-blue-200 dark:border-blue-900/30">
                <p className="text-[10px] font-mono text-blue-600 dark:text-blue-500 mb-1 uppercase">IVA 2026:</p>
                <code className="text-sm font-bold text-slate-900 dark:text-white">Tarifa General: {IVA_2026 * 100}%</code>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                  ¿Qué sucede si sobrepaso los $300,000 USD?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Inmediatamente serás excluido del régimen RIMPE a partir del siguiente año fiscal, y pasarás al <strong>Régimen General</strong>, donde tu impuesto se calculará según la tabla general de impuestos del SRI (hasta el 37%).
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                  ¿Debo declarar IVA siendo negocio popular?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  No en el formato mensual tradicional. Para Negocios Populares, el IVA está contenido en la cuota integrada anual. Sin embargo, si tienes actividades no sujetas a RIMPE, sí deberás declarar según corresponda.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900 py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-slate-900 dark:text-white">Red ECO Ecuatoriana</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es estrictamente informativa. No sustituye asesoría contable profesional ni resoluciones oficiales del SRI. Legislación 2026.
            </p>
            <p className="text-[10px] text-slate-600 dark:text-slate-500 leading-tight">
              Cumplimiento LOPDP: Los cálculos se realizan localmente. No almacenamos datos sensibles ni personales.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg">Ecosistema Tributario</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
              <li><a href="https://calculaimpuestos.ec" className="hover:text-blue-600 dark:hover:text-blue-400">Impuesto a la Renta 2026</a></li>
              <li><a href="https://misdecimos.ec" className="hover:text-blue-600 dark:hover:text-blue-400">Calculadora de Décimos</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-blue-600 dark:hover:text-blue-400">Validador de Cédula/RUC</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-blue-600 dark:hover:text-blue-400">Liquidador Laboral</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-blue-600 dark:hover:text-blue-400">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-600 dark:hover:text-blue-400">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-600 dark:hover:text-blue-400">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20tu%20impuesto%20RIMPE%20f%C3%A1cilmente%20con%20esta%20herramienta%20gratuita:%20https://facturacionrimpe.com"
              target="_blank"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir Herramienta
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
