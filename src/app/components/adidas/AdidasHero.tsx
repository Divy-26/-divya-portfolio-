import { motion } from 'motion/react';

export default function AdidasHero() {
  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            x: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-[#FF6B3D] to-transparent blur-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm tracking-[0.3em] mb-8 text-[#FF6B3D]"
          >
            DIGITAL CAMPAIGN 2026
          </motion.div>

          <h1 className="text-[10rem] md:text-[15rem] leading-none tracking-tighter mb-4">
            ADIDAS
          </h1>

          <motion.h2
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[5rem] md:text-[8rem] leading-none tracking-tight mb-8"
          >
            STREET MODE
          </motion.h2>

          <div className="text-2xl md:text-4xl tracking-wide text-[#FF6B3D]">
            OWN YOUR SPACE.
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
