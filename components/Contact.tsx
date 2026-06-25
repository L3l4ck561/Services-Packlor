'use client';

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Inicializa o EmailJS
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        setStatus("loading");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    nome: form.nome,
                    email: form.email,
                    mensagem: form.mensagem,
                    data: new Date().toLocaleString("pt-BR"),
                }
            );

            setStatus("success");
            
            // Limpa o formulário
            setForm({ nome: "", email: "", mensagem: "" });

            // Volta ao estado normal após 5 segundos
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contato" className="py-24 bg-slate-950">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Vamos construir algo incrível juntos?
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Seu e-mail"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
                    />

                    <textarea
                        name="mensagem"
                        value={form.mensagem}
                        onChange={handleChange}
                        placeholder="Fale sobre seu projeto..."
                        rows={6}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors resize-y"
                    />

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-5 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:from-slate-600 disabled:to-slate-600 text-black font-bold text-lg rounded-2xl transition-all duration-300 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                    </button>

                    {/* Feedback messages */}
                    {status === "success" && (
                        <p className="text-green-400 font-medium mt-4">
                            ✅ Mensagem enviada com sucesso! Em breve entrarei em contato.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 font-medium mt-4">
                            ❌ Erro ao enviar mensagem. Tente novamente ou me chame no WhatsApp.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}