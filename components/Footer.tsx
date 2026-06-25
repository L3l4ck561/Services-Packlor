export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
        <p>
          © {currentYear} Packlor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}