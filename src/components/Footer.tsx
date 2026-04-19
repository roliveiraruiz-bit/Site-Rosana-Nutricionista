import { Facebook, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-3xl tracking-tighter block mb-2">
              ROSANA <span className="text-primary-400">OLIVEIRA</span>
            </a>
            <p className="text-zinc-500 text-sm max-w-sm">
              Nutrição Esportiva, Emagrecimento e Longevidade. Transformando vidas há mais de uma década com ciência e comida de verdade.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-zinc-400 font-semibold text-sm uppercase tracking-wider">Compartilhe e Acompanhe</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-primary-400/50 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-primary-400/50 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-primary-400/50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-primary-400/50 transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 text-zinc-600 text-sm gap-4 text-center sm:text-left">
          <p>© {currentYear} Rosana Oliveira Nutricionista. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
