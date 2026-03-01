import CalculadoraMultas from '../components/CalculadoraMultas';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-red-500/30 selection:text-red-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-600 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1.5 px-4 mb-4">
            <span className="flex w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Penalidades, Recargos e Interés x Mora 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Calcula tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Multas</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Cotiza inmediatamente los intereses generados por evadir impuestos ante el SRI o atrasarte en pagar resoluciones de tránsito (ANT).
          </p>
        </header>

        <section className="w-full">
          <CalculadoraMultas />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-red mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-red-600 pb-4 mb-10">¿Cómo se calculan las multas?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">$</span>
                Mora SRI
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-4 italic">
                Art. 21 Código Tributario
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-red-900/30">
                <p className="text-xs font-mono text-red-500 mb-1 uppercase">Fórmula:</p>
                <code className="text-sm text-white font-bold">Obligación × (Tasa BCE × 1.1) × (Días / 90)</code>
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Interés simple aplicado trimestralmente sobre el capital impago.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-amber-500 mb-4 flex items-center">
                <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">!</span>
                Multas ANT
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-4 italic">
                Agencia Nacional de Tránsito
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-2">
                <table className="w-full text-left text-[10px] text-slate-400">
                  <thead>
                    <tr className="text-amber-500 uppercase">
                      <th className="p-1">Tipo</th>
                      <th className="p-1">SBU %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-800"><td className="p-1">Leve 1ra</td><td className="p-1 text-white">5%</td></tr>
                    <tr className="border-t border-slate-800"><td className="p-1">Grave 1ra</td><td className="p-1 text-white">30%</td></tr>
                    <tr className="border-t border-slate-800"><td className="p-1">Muy Grave</td><td className="p-1 text-white">100%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Recargo: 2% mensual por mora (máx 100%).
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8 text-left">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué pasa si mi multa es del SRI y de la ANT al mismo tiempo?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Cada institución maneja sus propias tasas y calendarios de cobro. Debes realizar el pago de forma independiente en cada ventanilla o portal digital autorizado.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Se pueden condonar los intereses?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  La condonación total o parcial de intereses suele ocurrir únicamente bajo leyes extraordinarias de <strong>Amnistía Tributaria</strong> aprobadas por el Gobierno nacional.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">CalculaMultas.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Los cálculos son simulaciones informativas. No somos una entidad gubernamental ni reemplazamos el sistema oficial del SRI o la ANT.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: No recopilamos ni almacenamos datos personales o números de cédula.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ecosistema Solidario</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://calculaimpuestos.ec" className="hover:text-red-400 transition-colors">Impuesto a la Renta 2026</a></li>
              <li><a href="https://misdecimos.ec" className="hover:text-red-400 transition-colors">Calculadora de Décimos</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-red-400 transition-colors">Validador de Cédula/RUC</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-red-400 transition-colors">Liquidador de Haberes</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-red-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-red-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-red-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20tus%20multas%20SRI%20y%20ANT%20f%C3%A1cilmente%20con%20esta%20herramienta%20gratuita:%20https://calculamultas.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir Herramienta
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
