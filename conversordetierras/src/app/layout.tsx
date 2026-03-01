import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conversor de Tierras Agrícolas Ecuador | Cuadras, Hectáreas y Metros",
  description: "Convierte medidas de tierra tradicionales ecuatorianas como cuadras, fanegadas y solares a hectáreas y metros cuadrados. Herramienta gratuita para el campo.",
  openGraph: {
    title: "Conversor de Tierras Ecuatorianas",
    description: "Calculadora de equivalencias agrarias: Cuadras, Hectáreas, Solares y más. Ideal para agricultura y bienes raíces en Ecuador.",
    locale: "es_EC",
    type: "website",
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 min-h-screen antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Conversor de Tierras Agrícolas Ecuador",
              "url": "https://conversordetierras.com",
              "description": "Calculadora de conversión de unidades de superficie agrarias tradicionales de Ecuador.",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
