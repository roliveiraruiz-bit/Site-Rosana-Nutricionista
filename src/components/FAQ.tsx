import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O plano alimentar é muito restritivo?",
      answer: "De forma alguma. Meu método foca em inclusão e substituições inteligentes, não em cortar tudo o que você gosta. A ideia é que você consiga manter esse estilo de vida a longo prazo."
    },
    {
      question: "Eu preciso treinar todos os dias?",
      answer: "Não. Adaptamos a frequência dos treinos à sua realidade. O importante é a constância e sairmos do sedentarismo. 3 vezes por semana bem feitos já trazem resultados incríveis."
    },
    {
      question: "Como funciona o suporte durante a Consultoria?",
      answer: "Você terá acesso direto ao meu WhatsApp comercial para tirar dúvidas rápidas de segunda a sexta, além do nosso aplicativo onde todo seu plano e evolução ficam registrados."
    },
    {
      question: "Tenho mais de 40 anos e meu metabolismo é lento. Tem jeito?",
      answer: "Com certeza! É exatamente essa a minha especialidade. O metabolismo não 'para', ele muda. Vamos ajustar a distribuição de macronutrientes e usar estratégias específicas para o seu contexto hormonal atual."
    },
    {
      question: "Onde as consultas presenciais acontecem?",
      answer: "Atendo presencialmente em São Paulo (Capital), no bairro Pinheiros. Mas caso você seja de fora, 80% das minhas pacientes são atendidas 100% online com os mesmos resultados."
    }
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Dúvidas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Ainda não tem certeza se o método é para você? Veja as respostas abaixo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-zinc-100 pr-8">{faq.question}</span>
                <span className="text-primary-400 shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
