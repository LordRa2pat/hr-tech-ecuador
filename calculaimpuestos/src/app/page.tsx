import CalculadoraIR from '../components/CalculadoraIR';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-600 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-10 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1.5 px-4 mb-4">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Tabla SRI 2026 Proyectada</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Calcula tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Impuesto</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto">
            Descubre cuánto Impuesto a la Renta pagarás este año en Ecuador. Incluye límite de deducibles y rebajas de ley.
          </p>
        </header>

        <section className="w-full">
          <CalculadoraIR />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-emerald mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-emerald-500 pb-4 mb-10">Guía del Impuesto a la Renta 2026</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">%</span>
                Tabla Progresiva
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                El impuesto se aplica sobre el excedente de la fracción básica según el nivel de ingresos.
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-800">
                <table className="w-full text-[10px] text-left text-slate-400">
                  <thead className="bg-slate-800 text-white uppercase">
                    <tr>
                      <th className="px-3 py-2">Fracción</th>
                      <th className="px-3 py-2">Base</th>
                      <th className="px-3 py-2">% Exc</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr><td className="px-3 py-1">$0</td><td className="px-3 py-1">$0</td><td className="px-3 py-1">0%</td></tr>
                    <tr><td className="px-3 py-1">$11,902</td><td className="px-3 py-1">$0</td><td className="px-3 py-1">5%</td></tr>
                    <tr><td className="px-3 py-1">$15,159</td><td className="px-3 py-1">$163</td><td className="px-3 py-1">10%</td></tr>
                    <tr><td className="px-3 py-1">$19,682</td><td className="px-3 py-1">$615</td><td className="px-3 py-1">12%</td></tr>
                    <tr><td className="px-3 py-1">$26,031</td><td className="px-3 py-1">$1,377</td><td className="px-3 py-1">15%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-teal-400 mb-4 flex items-center">
                <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">#</span>
                Rebaja por Cargas
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Puedes descontar un porcentaje de tus gastos personales directamente de tu impuesto causado.
              </p>
              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li>• 0 cargas: 10% de rebaja.</li>
                <li>• 1 carga: 12.5% de rebaja.</li>
                <li>• 2 cargas: 15.0% de rebaja.</li>
                <li>• 3 cargas: 17.5% de rebaja.</li>
                <li>• 5+ cargas: 22.5% de rebaja.</li>
              </ul>
              <div className="bg-slate-950 p-4 rounded-xl border border-teal-900/30 mt-6">
                <p className="text-[10px] font-mono text-teal-500 mb-1 uppercase">Límite Gastos:</p>
                <p className="text-xs text-white leading-tight">Hasta 7 Canastas Básicas Familiares (~$5,527 proyectado).</p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué gastos puedo deducir este año?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Puedes deducir gastos de vivienda, alimentación, salud (incluyendo enfermedades raras o catastróficas), educación (incluye arte y cultura), y vestimenta. El límite total de gastos varía según el costo de la canasta básica familiar fijada por el <strong>INEC</strong>.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Quiénes deben declarar el Impuesto a la Renta?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Todas las personas naturales cuyos ingresos anuales superen la fracción básica desgravada ($11,902 en 2026). La declaración se realiza habitualmente en el mes de marzo según el noveno dígito de la cédula ante el <strong>SRI</strong>.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">CalculaImpuestos.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es estrictamente informativa. Los resultados son proyecciones basadas en la normativa SRI 2026 y no sustituyen una declaración tributaria oficial.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: No recopilamos datos financieros ni personales. Todo el cálculo se realiza de forma segura en tu navegador.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ecosistema Tributario</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://misdecimos.ec" className="hover:text-emerald-400 transition-colors">Calculadora de Décimos</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-emerald-400 transition-colors">Liquidador Laboral (Despido)</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-emerald-400 transition-colors">Validador de Cédula/RUC</a></li>
              <li><a href="https://mijubilacion.ec" className="hover:text-emerald-400 transition-colors">Simulador de Jubilación</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-emerald-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-emerald-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20tu%20Impuesto%20a%20la%20Renta%202026%20f%C3%A1cilmente%20con%20esta%20herramienta%20gratuita:%20https://calculaimpuestos.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir Herramienta
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
