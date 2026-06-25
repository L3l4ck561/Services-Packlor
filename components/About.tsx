export default function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Sobre</h2>

          <div className="space-y-6 text-slate-300">
            <p>
              Desenvolvemos soluções digitais completas, desde a interface até a infraestrutura, sempre com atenção extrema à qualidade.
            </p>

            <p>
              Com sólida experiência em desenvolvimento full stack e automação
              de testes, ajudo empresas e empreendedores a transformar ideias em
              produtos robustos e escaláveis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <h4 className="font-semibold text-cyan-400 mb-2">
              Tecnologias
            </h4>

            <p className="text-sm text-slate-400">
              React • Expo • Next.js • Node.js • Python • Docker • AWS •
              Mysql • MongoDB
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h4 className="font-semibold text-violet-400 mb-2">
              Automação
            </h4>

            <p className="text-sm text-slate-400">
              Jest • Cypress • Selenium • Arduino / Esp32 • Postman • PyAutoGUI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}