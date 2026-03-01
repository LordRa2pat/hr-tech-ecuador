import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Impuesto a la Renta 2026 | Ecuador",
  description: "Calcula gratis tu Impuesto a la Renta en Ecuador para el año 2026. Conoce en qué tramo del SRI te encuentras y descuenta tus cargas familiares.",
  openGraph: {
    title: "Calculadora de Impuesto a la Renta 2026 | Ecuador",
    description: "Calcula tu Impuesto a la Renta según la tabla del SRI 2026. Herramienta gratuita y actualizada.",
    locale: "es_EC",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              "name": "Calculadora de Impuesto a la Renta Ecuador",
              "url": "https://calculaimpuestos.ec",
              "description": "Herramienta para calcular el Impuesto a la Renta en Ecuador con proyecciones de ley.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
