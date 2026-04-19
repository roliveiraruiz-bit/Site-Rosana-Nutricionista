import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Mariana Souza",
      role: "Empresária, 42 anos",
      quote: "Depois dos 40 eu achava que meu metabolismo tinha parado de vez. A Rosana me mostrou que era possível emagrecer comendo o que gosto, sem loucuras. Minha energia no trabalho triplicou.",
      hasVideo: true,
      videoThumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop&auto=format"
    },
    {
      id: 2,
      name: "Fernanda Costa",
      role: "Advogada, 38 anos",
      quote: "O que mais me impressionou foi o olhar humano. Ela não me passou uma folha de papel impressa, ela entendeu minha rotina maluca e adaptou a dieta pra minha realidade.",
      hasVideo: false,
    },
    {
      id: 3,
      name: "Juliana Alves",
      role: "Mãe e Arquiteta, 45 anos",
      quote: "Já tinha tentado todo tipo de remédio e dieta restritiva. O método me devolveu a paz com a comida. Hoje visto manequim 38 sem sofrimento e meus exames nunca estiveram tão bons.",
      hasVideo: true,
      videoThumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop&auto=format"
    },
    {
      id: 4,
      name: "Roberta Lima",
      role: "Professora, 50 anos",
      quote: "Estava pré-diabética e apavorada. Com o protocolo que desenvolvemos, reverti o quadro apenas mudando estilo de vida e comendo de forma inteligente. Gratidão eterna.",
      hasVideo: false,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Histórias de <span className="text-gradient">Transformação</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Veja o que minhas alunas e pacientes dizem sobre o processo. Sem remédios mágicos, apenas ciência e constância.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-center glass rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-accent-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-3 text-white/5 w-12 h-12 -z-10 twist rotate-180" />
                  <p className="text-zinc-300 text-lg italic leading-relaxed relative z-10">"{testimonial.quote}"</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                {testimonial.hasVideo && testimonial.videoThumb ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden cursor-pointer group shrink-0 ring-2 ring-primary-500/50">
                    <img src={testimonial.videoThumb} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition">
                      <Play size={16} className="text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="text-xl font-bold text-zinc-500">{testimonial.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar styles directly in component for convenience if not in index.css */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
}
