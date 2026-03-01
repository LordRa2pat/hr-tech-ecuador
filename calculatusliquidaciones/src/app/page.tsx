import LiquidadorLaboral from '../components/LiquidadorLaboral';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-amber-500/30 selection:text-amber-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-600 font-mono text-center">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1.5 px-4 mb-4">
            <span className="flex w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Derechos y Beneficios Laborales 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Calcula tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Liquidaciones</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Descubre cuánto te corresponde por despido intempestivo, renuncia voluntaria o desahucio según el Código del Trabajo.
          </p>
        </header>

        <section className="w-full">
          <LiquidadorLaboral />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-amber mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-amber-500 pb-4 mb-10">¿Cómo se calcula tu liquidación?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">1</span>
                El Desahucio
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Bonificación por finalizar la relación laboral (Art. 185 CT).
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-amber-900/30 mt-4">
                <p className="text-xs font-mono text-amber-500 mb-1 uppercase">Fórmula:</p>
                <code className="text-sm text-white font-bold">25% × Última Remuneración × Años de Servicio</code>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                * Aplica en renuncias voluntarias y despidos. Toda fracción de año se cuenta como año completo.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">2</span>
                Despido Intempestivo
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Indemnización por terminación unilateral sin causa (Art. 188 CT).
              </p>
              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li>• <strong>De 1 a 3 años:</strong> 3 meses de sueldo.</li>
                <li>• <strong>Más de 3 años:</strong> 1 mes por cada año (máx. 25).</li>
                <li>• Cualquier fracción de año cuenta como año completo.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué pasa si estoy en período de prueba?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Durante los primeros 90 días (período de prueba), cualquiera de las partes puede dar por terminada la relación laboral sin derecho a indemnización por despido, solo se pagan los proporcionales de ley (décimos y vacaciones).
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Las vacaciones no gozadas se pagan?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Sí, la liquidación debe incluir obligatoriamente el pago de las vacaciones no gozadas (Art. 71 CT), calculadas sobre la 24ava parte de la remuneración percibida.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">CalculaTusLiquidaciones.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es informativa y no sustituye un Acta de Finiquito oficial ni el asesoramiento legal. Legislación vigente 2026.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: No almacenamos datos sensibles. Todos los cálculos se realizan de forma anónima en tu dispositivo.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Servicios Ecuatorianos</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://misdecimos.ec" className="hover:text-amber-400 transition-colors">Calculadora de Décimos</a></li>
              <li><a href="https://calculaimpuestos.ec" className="hover:text-amber-400 transition-colors">Impuesto a la Renta 2026</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-amber-400 transition-colors">Validador de Cédula/RUC</a></li>
              <li><a href="https://mijubilacion.ec" className="hover:text-amber-400 transition-colors">Simulador de Jubilación</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-amber-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-amber-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-amber-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20tus%20liquidaciones%20laborales%20en%20Ecuador%20f%C3%A1cilmente:%20https://calculatusliquidaciones.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir Herramienta
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
