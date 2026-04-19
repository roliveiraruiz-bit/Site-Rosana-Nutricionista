import { motion } from "motion/react";

export function Marquee() {
  const items = [
    { number: "+2000", text: "Clientes Satisfeitos" },
    { number: "12 Anos", text: "de Experiência" },
    { number: "+500", text: "Vidas Transformadas" },
    { number: "100%", text: "Foco em Emagrecimento" },
    { number: "+150k", text: "Seguidores" },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="py-8 bg-white/5 border-y border-white/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-12">
            <span className="text-3xl font-display font-bold text-copper-400">{item.number}</span>
            <span className="text-zinc-400 font-medium tracking-wide text-lg uppercase">{item.text}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 mx-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
