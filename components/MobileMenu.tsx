'use client';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMobileMenu: () => void;
}

export default function MobileMenu({ isOpen, toggleMobileMenu }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-950 z-[100] pt-20 md:hidden">
            <div className="flex flex-col items-center gap-10 text-2xl font-medium pt-10">
                <a href="#home" onClick={toggleMobileMenu} className="hover:text-cyan-400 transition-colors">Início</a>
                <a href="#servicos" onClick={toggleMobileMenu} className="hover:text-cyan-400 transition-colors">Serviços</a>
                <a href="#sobre" onClick={toggleMobileMenu} className="hover:text-cyan-400 transition-colors">Sobre</a>
                <a href="#portfolio" onClick={toggleMobileMenu} className="hover:text-cyan-400 transition-colors">Portfolio</a>
                <a href="#contato" onClick={toggleMobileMenu} className="hover:text-cyan-400 transition-colors">Contato</a>
            </div>
        </div>
    );
}