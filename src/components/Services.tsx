import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PlayCircle, X, ChevronRight } from "lucide-react";

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Consulta Nutricional",
      short: "Acompanhamento individualizado.",
      description: "Uma avaliação completa do seu histórico, rotina, exames e objetivos físicos. Desenvolveremos um plano alimentar que se adapta a você, e não o contrário.",
      topics: ["Avaliação por Bioimpedância", "Plano Alimentar Inteligente", "Adequação de Suplementos", "Acesso ao Aplicativo Exclusivo"],
      price: "A partir de R$ 350",
    },
    {
      id: 2,
      title: "Mentoria 360°",
      short: "Acompanhamento diário e focado.",
      description: "Uma imersão de 3 meses onde eu acompanho seus passos de forma próxima. Ideal para quem precisa de direcionamento contínuo e tem dificuldade de manter o foco.",
      topics: ["Acompanhamento Diário via WhatsApp", "Encontros Quinzenais Online", "Ajustes Rápidos de Rota", "Estratégias de Autocontrole"],
      price: "A partir de R$ 1.200 / trimestre",
    },
    {
      id: 3,
      title: "Protocolo Seca Barriga",
      short: "O guia prático para resultados rápidos.",
      description: "E-book completo + série de vídeo-aulas práticas mostrando como desinflamar e preparar o corpo para queimar gordura de forma acelerada e segura.",
      topics: ["Módulo de Desinflamação", "Receitas Práticas (Menos de 15 min)", "Guia de Sucos Detox", "Treinos Básicos em Casa"],
      price: "R$ 97 à vista",
    }
  ];

  const activeService = services.find(s => s.id === selectedService);

  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Como posso <span className="text-gradient">ajudar você?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Escolha o formato que melhor se adapta à sua necessidade hoje. Do acompanhamento presencial ao material de apoio digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative group cursor-pointer transition-all hover:-translate-y-2 glow-border"
              onClick={() => setSelectedService(service.id)}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-8 h-12 leading-tight">{service.short}</p>
              
              <button className="flex items-center gap-2 text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                <span>Saiba Mais</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition"
              >
                <X size={20} />
              </button>

              {/* Video Placeholder Area */}
              <div className="md:w-2/5 bg-zinc-950 relative flex items-center justify-center min-h-[250px] md:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary-500/80 flex items-center justify-center backdrop-blur text-black cursor-pointer hover:scale-110 transition-transform">
                  <PlayCircle size={32} className="ml-1" />
                </div>
              </div>

              {/* Content Area */}
              <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto w-full">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-primary-400 text-xs font-semibold tracking-wider uppercase mb-4">
                  Detalhes do Plano
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-4">{activeService.title}</h3>
                <p className="text-zinc-300 leading-relaxed mb-8">{activeService.description}</p>
                
                <h4 className="font-semibold text-lg text-white mb-4">O que está incluso:</h4>
                <ul className="space-y-3 mb-8">
                  {activeService.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0"></div>
                      <span className="text-zinc-300 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-zinc-500 text-sm">Investimento</p>
                    <p className="text-xl font-bold text-white">{activeService.price}</p>
                  </div>
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-accent-500 text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(132,204,22,0.4)] transition text-center"
                  >
                    Quero Agendar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
