import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de Jubilación Ecuador 2026 | IESS y Patronal",
  description: "Simula tu jubilación en Ecuador: Jubilación Patronal (Art. 216 CT) y Jubilación del IESS. Calcula tu pensión estimada gratis.",
  openGraph: {
    title: "Simulador de Jubilación Ecuador 2026",
    description: "Herramienta gratuita para proyectar tu jubilación según la legislación ecuatoriana vigente.",
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
              "name": "Simulador de Jubilación Ecuatoriano",
              "url": "https://mijubilacion.ec",
              "description": "Herramienta para simular la jubilación patronal e IESS en Ecuador.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
