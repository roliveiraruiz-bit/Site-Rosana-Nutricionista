import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glow-border rounded-3xl p-1 relative z-10 bg-gradient-to-br from-white/10 to-white/5">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1500&auto=format&fit=crop" 
                alt="Rosana Oliveira" 
                className="rounded-[22px] w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Soft background decorative blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-500/20 rounded-full blur-[100px] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Quem é <span className="text-gradient">Rosana Oliveira?</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
              Especialista em Emagrecimento e Qualidade de Vida para mulheres acima dos 35 anos. Minha missão não é te passar mais uma dieta da moda, mas sim reescrever a sua relação com a comida e seu corpo.
            </p>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              Com mais de uma década de experiência clíníca, ajudo mulheres a alcançarem a melhor versão de si mesmas, focando em longevidade, disposição e estética, de forma sustentável e prazerosa.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Pós-graduada em Nutrição Esportiva e Longevidade",
                "Certificação Internacional em Comportamento Alimentar",
                "Mais de 2.000 avaliações corporais e casos de sucesso",
                "Método próprio focado no metabolismo feminino"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-white">CRN-3</p>
                <p className="text-zinc-500 text-sm">Registro Profissional</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <p className="font-display text-3xl font-bold text-white">12+ Anos</p>
                <p className="text-zinc-500 text-sm">Prática Clínica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
