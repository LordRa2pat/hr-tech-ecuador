import Link from 'next/link';
import ConversorInteractiva from '../components/ConversorInteractiva';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-green-500/30 selection:text-green-800 dark:selection:text-green-400">

      {/* Top Ad Skeleton */}
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="ad-skeleton">
          <span className="text-xs text-stone-400 dark:text-stone-600 font-mono">Espacio Publicitario</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center p-4 md:p-8 lg:p-12 z-10 relative">
        <header className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-full py-1.5 px-4 mb-4 shadow-sm">
            <span className="flex w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">Unidades Agrarias del Ecuador</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-stone-900 dark:text-white">
            Conversor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600">Tierras Agrícolas</span>
          </h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            La herramienta definitiva para el campo ecuatoriano. Convierte con precisión entre cuadras, hectáreas, fanegadas y solares de forma instantánea.
          </p>
        </header>

        <section className="w-full mb-20">
          <ConversorInteractiva />
        </section>

        {/* Mid-page Ad Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-20 text-center">
          <div className="ad-skeleton min-h-[250px] flex items-center justify-center border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-3xl bg-stone-50/50 dark:bg-stone-900/50">
            <span className="text-sm text-stone-400 dark:text-stone-600 font-mono italic">Espacio Publicitario v2026</span>
          </div>
        </div>

        {/* CÓMO SE CALCULA - SEO & ADSENSE READY */}
        <article className="w-full max-w-4xl mx-auto prose dark:prose-invert prose-stone mb-20 px-4">
          <h2 className="text-4xl font-black text-stone-900 dark:text-white border-b-4 border-green-600 pb-4 mb-10">Diccionario de Medidas Agrarias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-panel p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 shadow-xl">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-500 mb-4 flex items-center">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">C</span>
                La Cuadra
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm mb-4">
                Unidad tradicional más usada en la Costa y el agro ecuatoriano.
              </p>
              <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-green-200 dark:border-green-900/30">
                <p className="text-[10px] font-mono text-green-600 dark:text-green-500 mb-1 uppercase">Equivalencia:</p>
                <code className="text-sm font-bold text-stone-900 dark:text-white">7,056 m² (84m x 84m)</code>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 shadow-xl">
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-500 mb-4 flex items-center">
                <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 font-black">H</span>
                La Hectárea
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm mb-4">
                Medida estándar internacional para grandes extensiones de tierra.
              </p>
              <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
                <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-500 mb-1 uppercase">Equivalencia:</p>
                <code className="text-sm font-bold text-stone-900 dark:text-white">10,000 m² (100m x 100m)</code>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-black text-stone-900 dark:text-white">Preguntas Frecuentes (FAQ 2026)</h3>
            <div className="space-y-4 mt-6">
              <details className="group glass-panel rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-850 transition-colors">
                  ¿Qué es una Fanegada en la Sierra?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  Tradicionalmente equivale a <strong>6,400 m²</strong>. Es una medida común en las provincias interandinas para parcelas de cultivo de cereales y legumbres.
                </div>
              </details>

              <details className="group glass-panel rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-bold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-850 transition-colors">
                  ¿Cuántos m² tiene un solar en Guayaquil?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  En lotizaciones tradicionales de la Costa, un solar suele medir <strong>560 m²</strong>. Es la unidad base para la planificación urbana en zonas residenciales populares.
                </div>
              </details>
            </div>
          </div>
        </article>
      </div>

      <footer className="w-full border-t border-stone-200 dark:border-stone-900 bg-white dark:bg-stone-950 py-14 px-4 mt-auto z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-2xl text-stone-900 dark:text-white">Red ECO Ecuatoriana</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase font-bold tracking-tighter">
              Aviso Legal: Esta herramienta es estrictamente orientativa y no tiene validez legal ante el Registro de la Propiedad o el MAG. Legislación 2026.
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-500 leading-tight">
              Cumplimiento LOPDP: No recopilamos ni almacenamos datos de geolocalización o predios privados.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 dark:text-white text-lg">Ecosistema del Agro</h4>
            <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-3">
              <li><a href="https://facturacionrimpe.ec" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Facturación RIMPE 2026</a></li>
              <li><a href="https://calculaimpuestos.ec" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Calculadora de Impuestos</a></li>
              <li><a href="https://misdecimos.ec" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Décimos y Liquidaciones</a></li>
              <li><a href="https://validacedula.ec" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Validador de Identidad</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-stone-900 dark:text-white text-lg">Legal y Soporte</h4>
            <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-3">
              <li><Link href="/privacidad" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacidad LOPDP</Link></li>
              <li><Link href="/terminos" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Términos de Uso</Link></li>
              <li><Link href="/contacto" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Contáctanos</Link></li>
            </ul>

            <a
              href="https://api.whatsapp.com/send?text=Calcula%20cuadras%20y%20hect%C3%A1reas%20f%C3%A1cilmente%20con%20esta%20herramienta%20gratuita:%20https://conversordetierras.ec"
              target="_blank"
              className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl w-full transition-all text-sm shadow-xl"
            >
              Compartir con Productores
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
