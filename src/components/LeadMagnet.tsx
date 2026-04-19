import { motion } from "motion/react";
import { DownloadCloud, ArrowRight } from "lucide-react";

export function LeadMagnet() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Heavy glow effect behind the section */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-r from-primary-500/20 via-accent-500/10 to-copper-500/20 blur-[150px] -z-10 rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glow-border rounded-[2.5rem] bg-gradient-to-b from-zinc-900 to-black p-8 md:p-16 max-w-6xl mx-auto overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-accent-500/20">
                <DownloadCloud size={16} />
                Material Gratuito
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Guia Definitivo: <br/>
                <span className="text-gradient">Whey Protein e Proteínas em Pó</span>
              </h2>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-lg">
                Qual o melhor whey para emagrecer? Isolado ou concentrado? Descubra como usar as proteínas estratégicamente sem gastar dinheiro à toa.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-black/50 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition"
                  required
                />
                <button 
                  type="submit"
                  className="shrink-0 bg-primary-500 text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary-400 transition-colors shadow-[0_0_20px_rgba(132,204,22,0.3)]"
                >
                  <span>Baixar Agora</span>
                  <ArrowRight size={18} />
                </button>
              </form>
              <p className="text-zinc-500 text-xs mt-4 pl-4">100% livre de SPAM. Cancele a inscrição quando quiser.</p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              {/* E-book Mockup */}
              <div className="w-64 md:w-80 relative transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-lg blur-2xl opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593113540058-297eb066a3ea?q=80&w=800&auto=format&fit=crop" 
                  alt="Capa do E-book" 
                  className="relative z-10 w-full rounded-tr-2xl rounded-br-2xl shadow-2xl border-l-[12px] border-zinc-800"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
