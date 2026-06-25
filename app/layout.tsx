import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Packlor | Custom Software Development",
  description: "Criação de Software Sob Medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="PT-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/14988029965?text=Olá!%20Tenho%20interesse%20nos%20serviços"
          target="_blank"
          className="fixed bottom-6 right-6 bg-[#00A651] text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition text-4xl z-50"
        >
          <FaWhatsapp />
        </a>
      </body>
    </html>
  );
}
