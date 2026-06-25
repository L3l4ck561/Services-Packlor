'use client';

import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

interface NavBarProps {
    isOpen: boolean;
    toggleMobileMenu: () => void;
}

export default function NavBar({ isOpen, toggleMobileMenu }: NavBarProps) {
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
        { href: "home", label: "Início" },
        { href: "servicos", label: "Serviços" },
        { href: "sobre", label: "Sobre" },
        { href: "portfolio", label: "Portfolio" },
        { href: "contato", label: "Contato" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="https://services.packlor.com/">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                            Packlor
                        </div>
                    </a>


                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={`#${link.href}`}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className={`nav-link transition-colors duration-200 ${activeSection === link.href
                                        ? "text-cyan-400"
                                        : activeSection !== link.href
                                            ? " text-gray-400"
                                            : ""
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-2xl text-slate-200 hover:text-cyan-400 transition-colors"
                        aria-label="Abrir menu"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            <MobileMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
        </>
    );
}