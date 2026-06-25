'use client';

import { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <NavBar isOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <main className="bg-slate-950 text-slate-200 min-h-screen">
            <Hero isOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <Services />
            <About />
            <Portfolio />
            <Contact />
        </main>
    </>);
}