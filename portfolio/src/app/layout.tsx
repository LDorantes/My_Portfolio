import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Leonardo Dorantes — Kerentic",
  description: "Autobiografía profesional, portafolio y archivo de Leonardo Dorantes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-light text-brand-dark font-sans">
        <Navbar />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
