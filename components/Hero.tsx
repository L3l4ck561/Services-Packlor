'use client';

import { useEffect, useState } from "react";
import ClientsMarquee from "@/components/Client";

interface HeaderProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Hero({ isOpen, toggleMobileMenu }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll suave + Offset (para não ficar atrás da navbar fixa)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const offset = 80; // altura da navbar + margem
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Fecha menu mobile se estiver aberto
    if (isOpen) toggleMobileMenu();
  };

  // Detecta seção ativa durante o scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px -20% 0px"
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "portfolio", label: "Portfolio" },
    { href: "contato", label: "Contato" }
  ];
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Desenvolvimento de <span className="text-cyan-400">soluções</span>
            <br />
            que <span className="text-violet-400">entregam valor</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg">
            QA & Test Automation |
            Criação de Software Sob Medida
          </p>

          <div className="flex gap-4">
            <a
              href="Contato"
              onClick={(e) => handleSmoothScroll(e, "contato")}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all"
            >
              Fale conosco
            </a>
            <a
              href="Portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
              className="px-8 py-4 border border-slate-400 hover:border-white font-semibold rounded-xl transition-all"
            >
              Ver projetos
            </a>
          </div>

          <div className="flex gap-8 pt-4">
            {/* <div>
              <span className="block text-3xl font-bold text-cyan-400">
                50+
              </span>
              <span className="text-sm text-slate-400">
                Projetos entregues
              </span>
            </div> */}

            {/* <div>
              <span className="block text-3xl font-bold text-cyan-400">
                98%
              </span>
              <span className="text-sm text-slate-400">
                Satisfação
              </span>
            </div> */}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-3xl">
            <div
              className="w-full h-full object-cover rounded-3xl container"
            />
          </div>
        </div>
        <ClientsMarquee />
      </div>
    </section>
  );
}