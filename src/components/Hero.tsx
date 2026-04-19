import { motion, useScroll, useTransform } from "motion/react";
import { MessageCircle } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://i.postimg.cc/fRSJ7Jwh/Whats-App-Image-2026-04-19-at-14-35-14-(1).jpg" 
          alt="Rosana Oliveira" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium tracking-wider mb-6">
            MÉTODO EXCLUSIVO PARA MULHERES 35+
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Transforme seu corpo e mente com <span className="text-gradient">dieta, exercícios e estilo de vida.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            A longevidade que você busca começa com as escolhas de hoje. Um acompanhamento nutricional personalizado para quem cansou de dietas restritivas e quer resultados reais.
          </p>
          
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-black font-bold text-lg px-8 py-4 rounded-full animate-pulse-glow hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            <span>Quero Mudar de Vida Hoje</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
