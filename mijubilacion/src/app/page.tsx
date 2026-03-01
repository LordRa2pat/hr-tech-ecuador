import SimuladorJubilacion from '../components/SimuladorJubilacion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-orange-500/30 selection:text-orange-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-600 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-10 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1.5 px-4 mb-4">
            <span className="flex w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Art. 216 CT · Ley de Seguridad Social Ecuador</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white m:mb-6">
            Simula tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Jubilación</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto">
            Proyecta tu pensión estimada del IESS o tu Jubilación Patronal con herramientas basadas en la legislación ecuatoriana vigente 2026.
          </p>
        </header>

        <section className="w-full">
          <SimuladorJubilacion />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Publicidad Senior Friendly</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-orange mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-orange-500 pb-4 mb-10">¿Cómo se calcula tu jubilación?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                Jubilación IESS
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Basada en la <strong>Ley de Seguridad Social</strong>. Se calcula promediando las 60 mejores aportaciones (tus 5 mejores años de sueldo).
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-orange-900/30 mt-4">
                <p className="text-xs font-mono text-orange-500 mb-1 uppercase">Fórmula:</p>
                <code className="text-sm text-white font-bold">Promedio 5 mejores años × Coeficiente</code>
              </div>

              <h4 className="text-lg font-bold text-white mt-6 mb-2">Tabla de Coeficientes (2026):</h4>
              <div className="overflow-hidden rounded-xl border border-slate-800">
                <table className="w-full text-sm text-left text-slate-400">
                  <thead className="bg-slate-800 text-xs text-white uppercase font-black">
                    <tr>
                      <th className="px-4 py-2">Años Aporte</th>
                      <th className="px-4 py-2">Coeficiente</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr><td className="px-4 py-2 text-slate-200">10 años</td><td className="px-4 py-2 font-bold text-white">50.0%</td></tr>
                    <tr><td className="px-4 py-2 text-slate-200">20 años</td><td className="px-4 py-2 font-bold text-white">62.5%</td></tr>
                    <tr><td className="px-4 py-2 text-slate-200">30 años</td><td className="px-4 py-2 font-bold text-white">75.0%</td></tr>
                    <tr><td className="px-4 py-2 text-slate-200">40 años</td><td className="px-4 py-2 font-bold text-white">100.0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                Jubilación Patronal
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Amparada bajo el <strong>Artículo 216 del Código del Trabajo</strong>. Es un beneficio para empleados con más de 25 años en la misma empresa.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-amber-900/30 mt-4">
                <p className="text-xs font-mono text-amber-500 mb-1 uppercase">Requisito Legal:</p>
                <p className="text-sm text-white font-bold">25 años continuos o interrumpidos con el mismo empleador.</p>
              </div>
              <p className="text-xs text-slate-500 mt-6 leading-relaxed italic">
                * Nota: La pensión mensual no puede ser mayor al sueldo promedio de los últimos 5 años ni menor al SBU vigente.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6 text-left">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Puedo recibir las dos jubilaciones a la vez?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Sí. La jubilación del IESS y la jubilación patronal son beneficios distintos e independientes. El cumplimiento de uno no anula el derecho al otro.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué pasa si fallece el jubilado?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  En la jubilación del IESS, existe el seguro de muerte para beneficiarios. En la jubilación patronal, un porcentaje de la pensión puede ser heredado por el cónyuge o hijos menores según las reglas de viudez y orfandad.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">MiJubilacion.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es informativa y no sustituye asesoramiento profesional de un abogado laboralista o contador certificado. Legislación vigente al 2026.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: No almacenamos datos personales ni bancarios. Todos los cálculos se procesan en tu navegador.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ecosistema 2026</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://misdecimos.ec" className="hover:text-orange-400 transition-colors">Calculadora de Décimos</a></li>
              <li><a href="https://calculaimpuestos.ec" className="hover:text-orange-400 transition-colors">Impuesto a la Renta 2026</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-orange-400 transition-colors">Liquidador Laboral (Despido)</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-orange-400 transition-colors">Validador de Cédula/RUC</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Soporte y Transparencia</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-orange-400 transition-colors">Políticas de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-orange-400 transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/contacto" className="hover:text-orange-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Simula%20tu%20jubilaci%C3%B3n%20en%20Ecuador%20f%C3%A1cilmente:%20https://mijubilacion.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Compartir con Amigos
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
