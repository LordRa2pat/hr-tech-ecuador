import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Décimos Ecuador 2026 | Mis Décimos",
  description: "Calcula gratis tu Décimo Tercer y Cuarto Sueldo proporcional en Ecuador. Herramienta actualizada con SBU 2026 y fechas de pago Costa/Sierra.",
  openGraph: {
    title: "Calculadora de Décimos Ecuador 2026 | Mis Décimos",
    description: "Calcula tu Décimo Tercer y Cuarto Sueldo proporcional rápido y gratis. Basado en la legislación laboral ecuatoriana vigente.",
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
              "name": "Calculadora de Décimos Ecuador",
              "url": "https://misdecimos.ec",
              "description": "Calcula tu Décimo Tercer y Cuarto Sueldo proporcional rápido y gratis.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
            })
          }}
        />
      </body>
    </html>
  );
}
