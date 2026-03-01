import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Multas Ecuador 2026 | Mora SRI y Tránsito ANT",
  description: "Calcula el interés de mora tributaria del SRI y revisa el tarifario de multas de tránsito de la ANT actualizado al SBU 2026.",
  openGraph: {
    title: "Calculadora de Multas | SRI y ANT",
    description: "Calcula exactamente cuánto debes pagar por retrasos en impuestos SRI o por infracciones de tránsito en Ecuador.",
    locale: "es_EC",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-100 min-h-screen antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Calculadora de Multas Ecuatoriana",
              "url": "https://calculamultas.ec",
              "description": "Herramienta que proyecta penalidades por multas de la ANT e intereses por mora del SRI basado en tasas del BCE.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
