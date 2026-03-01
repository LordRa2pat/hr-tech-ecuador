import CalculadoraDecimos from '../components/CalculadoraDecimos';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-ecu-yellow/30 selection:text-ecu-yellow">

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
            <span className="text-xs font-medium text-slate-300">Actualizado SBU 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Calcula tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecu-yellow to-yellow-500">Décimos</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto">
            Descubre exactamente cuánto te corresponde recibir por el Tercer y Cuarto sueldo en Ecuador según la ley.
          </p>
        </header>

        <section className="w-full">
          <CalculadoraDecimos />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-slate mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-emerald-500 pb-4 mb-10">¿Cómo se calculan los décimos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
                <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">13</span>
                Décimo Tercero
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm italic mb-4">
                "Bono Navideño" (Art. 111 Código del Trabajo)
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-yellow-900/30">
                <p className="text-xs font-mono text-yellow-500 mb-1 uppercase">Fórmula:</p>
                <code className="text-sm text-white font-bold">Σ(Ingresos 12 Meses) / 12</code>
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Incluye: Sueldo base, horas extras, comisiones y bonos permanentes. <br />
                Período: <strong>1 Dic</strong> (año anterior) - <strong>30 Nov</strong>.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">14</span>
                Décimo Cuarto
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm italic mb-4">
                "Bono Escolar" (Art. 113 Código del Trabajo)
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/30">
                <p className="text-xs font-mono text-emerald-500 mb-1 uppercase">Valor 2026:</p>
                <code className="text-sm text-white font-bold">1 SBU Vigente (Completo)</code>
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Sierra/Oriente: Pago hasta 15 Ago. <br />
                Costa/Galápagos: Pago hasta 15 Mar.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué pasa si mi sueldo varía cada mes?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Para el décimo tercero, se suman todos tus ingresos brutos del período y se divide para 12. No importa si ganas $500 un mes y $700 el siguiente; el cálculo se hace sobre el total acumulado de forma automática.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Puedo recibir los décimos mensualmente?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Sí, puedes solicitar por escrito a tu empleador la "mensualización". De esta forma, recibes la parte proporcional cada mes junto con tu sueldo normal, en lugar de recibir el acumulado en una sola fecha.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">MisDécimos.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es estrictamente informativa y no sustituye el asesoramiento legal profesional. Legislación vigente 2026.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: No recopilamos datos personales. Los cálculos se procesan íntegramente en tu navegador para garantizar tu privacidad.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ecosistema Red ECO</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://calculaimpuestos.ec" className="hover:text-yellow-400 transition-colors">Impuesto a la Renta 2026</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-yellow-400 transition-colors">Liquidador Laboral (Despido)</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-yellow-400 transition-colors">Validador de Cédula/RUC</a></li>
              <li><a href="https://mijubilacion.ec" className="hover:text-yellow-400 transition-colors">Simulador de Jubilación</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-yellow-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-yellow-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-yellow-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20tus%20d%C3%A9cimos%20f%C3%A1cilmente%20con%20esta%20herramienta%20gratuita:%20https://misdecimos.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir Herramienta
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
