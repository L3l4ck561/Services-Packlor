'use client';

interface Client {
    name: string;
    logo: string;        // URL da logo ou caminho local
    width?: number;      // Largura opcional da logo
}

const clients: Client[] = [
    { name: "Cuesta Caçamba", logo: "https://cuesta-cacamba.vercel.app/images/logo3.svg", width: 140 },

    // Adicione quantos quiser aqui
];

export default function ClientsMarquee() {
    return (
        <section className=" overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-8">
                    Nossos Clientes
                </p>

                <div className="relative flex overflow-hidden">
                    {/* Primeira faixa */}
                    <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors group"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-8 w-auto opacity-75 group-hover:opacity-100 transition-opacity"
                                    style={{ width: client.width || 140 }}
                                />
                                <span className="text-sm font-medium whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Segunda faixa (para loop infinito) */}
                    <div className="flex items-center gap-16 animate-marquee whitespace-nowrap hidden">
                        {clients.map((client, index) => (
                            <div
                                key={index + "-clone"}
                                className="items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors group"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-8 w-auto opacity-75 group-hover:opacity-100 transition-opacity"
                                    style={{ width: client.width || 140 }}
                                />
                                <span className="text-sm font-medium whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}