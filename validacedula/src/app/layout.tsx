import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Validador de Cédula y RUC | Ecuador 2026",
  description: "Valida gratis tu cédula de identidad o número de RUC en Ecuador. Algoritmo actualizado para personas naturales y jurídicas.",
  openGraph: {
    title: "Validador de Cédula y RUC | Ecuador",
    description: "Herramienta gratuita para verificar la validez legal de cédulas y RUCs ecuatorianos.",
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
              "name": "Validador Cédula y RUC Ecuatoriano",
              "url": "https://validacedula.ec",
              "description": "Verifica si una cédula ecuatoriana o un Registro Único de Contribuyente (RUC) son oficialmente válidos estructurálmente.",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
