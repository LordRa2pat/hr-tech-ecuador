import ValidadorInput from '../components/ValidadorInput';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-slate-600 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 z-10 relative mt-16 md:mt-0">
        <header className="mb-12 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1.5 px-4 mb-4">
            <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Algoritmo SRCEI / SRI v2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Validador Cédula y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">RUC</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto">
            Verifica la validez estructural de cualquier documento de identidad ecuatoriano de forma instantánea.
          </p>
        </header>

        <section className="w-full">
          <ValidadorInput />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mt-16 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-3xl">
            <span className="text-sm text-slate-600 font-mono">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose prose-invert prose-blue mt-20 px-4">
          <h2 className="text-4xl font-black text-white border-b-4 border-blue-500 pb-4 mb-10">¿Cómo se valida una identificación?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">10</span>
                Algoritmo Módulo 10
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Utilizado para <strong>Cédulas</strong> y <strong>RUC de Personas Naturales</strong>. Sigue estas reglas del Registro Civil:
              </p>
              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li>• Multiplicar dígitos impares por 2 y pares por 1.</li>
                <li>• Si el resultado es &gt; 9, restar 9.</li>
                <li>• Sumar todos los resultados obtenidos.</li>
                <li>• El dígito verificador es la diferencia para llegar a la decena superior.</li>
              </ul>
              <div className="bg-slate-950 p-4 rounded-xl border border-blue-900/30 mt-6">
                <p className="text-[10px] font-mono text-blue-500 mb-1 uppercase">Importancia:</p>
                <p className="text-xs text-white leading-tight">Esencial para evitar errores en contratos, facturación electrónica y trámites legales.</p>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center">
                <span className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">11</span>
                Algoritmo Módulo 11
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Aplicado a <strong>Empresas Privadas</strong> (tercer dígito 9) y <strong>Entidades Públicas</strong> (tercer dígito 6).
              </p>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Utiliza coeficientes específicos (4,3,2,7,6,5,4,3,2) para sociedades privadas, garantizando la integridad de los datos tributarios ante el <strong>SRI</strong>.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Qué significa que una cédula sea "Válida"?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Significa que el número cumple con las reglas matemáticas del Registro Civil. <strong>No confirma</strong> que la persona exista o esté activa en el sistema oficial, sino que el número es estructuralmente correcto.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-white hover:bg-slate-800 transition-colors">
                  ¿Cuáles son los códigos de provincia?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  Van del 01 (Azuay) al 24 (Santa Elena). Existe también el código 30 para ecuatorianos registrados en el exterior. Si una cédula empieza con 25 o más, es estructuralmente inválida.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-slate-800/60 bg-slate-900/80 backdrop-blur-md py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-white">ValidaCedula.ec</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Los datos se procesan localmente. Este portal no almacena ni recopila números de cédula ni identidades personales. Legislación vigente 2026.
            </p>
            <p className="text-[10px] text-slate-600 leading-tight">
              Cumplimiento LOPDP: Encriptación en tránsito y procesamiento client-side para garantizar tu privacidad total.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Ecosistema Ecuatoriano</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><a href="https://misdecimos.ec" className="hover:text-blue-400 transition-colors">Calculadora de Décimos</a></li>
              <li><a href="https://calculaimpuestos.ec" className="hover:text-blue-400 transition-colors">Impuesto a la Renta 2026</a></li>
              <li><a href="https://calculatusliquidaciones.ec" className="hover:text-blue-400 transition-colors">Liquidador Laboral (Despido)</a></li>
              <li><a href="https://mijubilacion.ec" className="hover:text-blue-400 transition-colors">Simulador de Jubilación</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-slate-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-blue-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Valida%20c%C3%A9dulas%20y%20RUC%20de%20Ecuador%20f%C3%A1cilmente%20con%20esta%20herramienta:%20https://validacedula.ec"
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
