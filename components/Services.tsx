import { FaCode, FaVial, FaCogs } from "react-icons/fa";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface Service {
  id: number;
  icon: IconType;           // Tipo correto para ícones do react-icons
  title: string;
  description: string;
  color: string;            // Cor principal do card (cyan, violet, emerald, etc.)
  bgColor: string;          // Cor de fundo do ícone
}

const services: Service[] = [
  {
    id: 1,
    icon: FaCode,
    title: "Full Stack Development",
    description:
      "Aplicações web modernas, APIs robustas, sistemas complexos e integrações. Frontend (React, Expo, Next.js) + Backend (Node, Python)",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: 2,
    icon: FaVial,
    title: "QA & Test Automation",
    description:
      "Automação de testes (Selenium, Jest, Cypress), planos de teste, CI/CD e garantia de qualidade em todo o ciclo de desenvolvimento.",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 3,
    icon: FaCogs,
    title: "Software Sob Medida",
    description:
      "Sistemas personalizados para automatizar processos, aumentar eficiência e resolver problemas específicos do seu negócio.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Serviços</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluções completas do planejamento à entrega, com foco em qualidade
            e performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 card-hover group"
              >
                <div
                  className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110`}
                >
                  <Icon className={`text-3xl ${service.color}`} />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}