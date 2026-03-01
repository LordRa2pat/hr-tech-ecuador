import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liquidador Laboral Ecuador 2026 | Renuncia y Despido",
  description: "Calcula tu liquidación laboral en Ecuador (Desahucio, Despido Intempestivo, Vacaciones, Décimos). Herramienta actualizada con el SBU 2026.",
  openGraph: {
    title: "Calculadora de Liquidaciones Laborales | Ecuador",
    description: "Conoce el valor exacto de tu liquidación por renuncia o despido según el Código del Trabajo ecuatoriano.",
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
              "name": "Liquidador Laboral Ecuatoriano",
              "url": "https://calculatusliquidaciones.ec",
              "description": "Herramienta que proyecta los valores a percibir por concepto de renuncia o despido en base al Código del Trabajo del Ecuador 2026.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
