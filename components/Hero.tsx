'use client';

import { useEffect, useState } from "react";
import ClientsMarquee from "@/components/Client";

interface HeroProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Hero({ isOpen, toggleMobileMenu }: HeroProps) {
  const [activeSection, setActiveSection] = useState("home");

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const offset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (isOpen) toggleMobileMenu();
  };

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -20% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado esquerdo - Conteúdo */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Desenvolvimento de <span className="text-cyan-400">soluções</span>
              <br />
              que <span className="text-violet-400">entregam valor</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-lg">
              Full Stack Developer | QA & Test Automation | Software Sob Medida
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                onClick={(e) => handleSmoothScroll(e, "contato")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all text-center"
              >
                Fale conosco
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
                className="px-8 py-4 border border-slate-400 hover:border-white font-semibold rounded-xl transition-all text-center"
              >
                Ver projetos
              </a>
            </div>
          </div>

          {/* Lado direito - Imagem (apenas desktop) */}
          <div className="relative order-1 md:order-2 hidden md:flex justify-center">
            <div className="aspect-square w-full max-w-[420px] bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-3xl shadow-2xl p-3">
              <div className="max-w-[450px] h-full object-cover rounded-3xl container" />
            </div>
          </div>
        </div>

        {/* Clients Marquee */}
        <div className="mt-16 md:mt-20 relative z-10">
          <ClientsMarquee />
        </div>
      </div>
    </section>
  );
}