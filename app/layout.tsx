import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"; // <-- Importamos nuestro Toaster
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sovereign | Taller Mecánico",
  description: "Sistema de gestión de taller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
        
        {/* El Toaster global se queda escuchando eventos en el fondo */}
        <Toaster />
      </body>
    </html>
  );
}