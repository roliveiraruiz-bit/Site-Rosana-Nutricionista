import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl tracking-tighter">
          ROSANA <span className="text-primary-400">OLIVEIRA</span>
        </a>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-black font-semibold px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(132,204,22,0.5)] transition-all duration-300"
        >
          <MessageCircle size={20} />
          <span>Agendar Consulta</span>
        </a>
      </div>
    </motion.header>
  );
}
