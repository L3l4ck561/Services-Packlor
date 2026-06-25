'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <main className="bg-slate-950 text-slate-200 min-h-screen">
            <Header isOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Contact />
            
        </main>
    );
}