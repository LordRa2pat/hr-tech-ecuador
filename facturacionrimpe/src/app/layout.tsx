import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora RIMPE Ecuador 2026 | Emprendedor y Negocio Popular",
  description: "Calcula tu impuesto a la renta bajo el régimen RIMPE Emprendedor o la cuota de Negocio Popular en Ecuador. Simula retenciones e IVA 15%.",
  openGraph: {
    title: "Calculadora de Facturación RIMPE",
    description: "Herramienta contable gratuita para emprendedores y negocios populares del Ecuador. Calcula tu impuesto anual fácilmente.",
    locale: "es_EC",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Calculadora Tributaria RIMPE",
              "url": "https://facturacionrimpe.com",
              "description": "Calculadora de tramos y retenciones para el Régimen Simplificado para Emprendedores y Negocios Populares.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
