import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flinvent — Transformación Digital & Software a Medida",
  description: "Software personalizado e integración IA para empresas que quieren liderar en su industria. Soluciones modernas, soporte 24/7.",
  keywords: "software, IA, transformación digital, desarrollo, cloud",
  openGraph: {
    title: "Flinvent — Transformación Digital",
    description: "Software a medida e IA integrada",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
