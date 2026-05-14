import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl tracking-tighter leading-none">
                DIVYA<br />GUPTA
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#0D0D0D]/70">
                UX/UI & Digital Designer
              </h2>
            </div>

            <p className="text-lg text-[#0D0D0D]/60 max-w-md leading-relaxed">
              Designing digital, social and brand experiences across product and creative campaigns.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToWork}
                className="px-8 py-4 bg-[#0D0D0D] text-[#F5F5F3] hover:bg-[#0D0D0D]/80 transition-all hover:translate-y-[-2px] flex items-center gap-2"
              >
                View Work
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 border-2 border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#F5F5F3] transition-all"
              >
                Contact
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-[#6C8CFF] to-[#6C8CFF]/60 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-4/5 h-3/5 bg-[#F5F5F3] rounded-xl shadow-2xl p-8"
                >
                  <div className="space-y-4">
                    <div className="h-8 bg-[#0D0D0D]/10 rounded w-3/4"></div>
                    <div className="h-4 bg-[#0D0D0D]/5 rounded w-full"></div>
                    <div className="h-4 bg-[#0D0D0D]/5 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 pt-8">
                      <div className="aspect-square bg-[#6C8CFF]/20 rounded"></div>
                      <div className="aspect-square bg-[#6C8CFF]/20 rounded"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
