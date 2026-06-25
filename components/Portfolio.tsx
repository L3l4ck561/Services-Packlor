const projects = [
  {
    title: "Packlor • Web App",
    stack: "Github + Python + squarecloud",
    image: "/images/caderno.png",
    link: "https://packlor.com/",
  },
  {
    title: "Site Institucional - Cuesta Caçamba",
    stack: "Next.js + Cloudflare + Vercel",
    image: "/images/cuesta.png",
    link: "https://www.cuestacacamba.com.br/",
  },
];
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Imagem do Projeto */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-semibold text-xl mb-2 line-clamp-2">
                  {project.title}
                </h4>

                <p className="text-sm text-slate-400 mb-6 flex-1">
                  {project.stack}
                </p>

                {/* Botão condicional */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center py-3 px-6 bg-slate-700 hover:bg-cyan-500 hover:text-black font-medium rounded-xl transition-all duration-300 mt-auto"
                  >
                    Ver Projeto →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}