import { motion } from 'motion/react';

export default function DigitalBillboards() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl tracking-tight mb-4">
            OUT OF HOME
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Digital billboards & city activations
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[21/9] bg-[#0D0D0D] rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-16 text-white">
                <div className="max-w-4xl space-y-6">
                  <div className="text-[8rem] tracking-tighter leading-none">
                    RUN THE CITY.
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-px bg-orange-500" />
                    <div className="text-2xl tracking-wide text-orange-500">AFTER DARK</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">London Digital Billboard — Piccadilly Circus</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="aspect-[16/9] bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white text-center">
                  <div className="space-y-6">
                    <div className="text-6xl tracking-tighter leading-none">
                      TONIGHT<br />WE RUN
                    </div>
                    <div className="text-sm tracking-wider opacity-90">
                      NIKE AFTER DARK • SHOREDITCH
                    </div>
                    <div className="text-xl">
                      9PM • BOXPARK
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-[#0D0D0D]/60">Underground Station Poster</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="aspect-[16/9] bg-[#0D0D0D] rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-500/30" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                  <div className="text-center space-y-4">
                    <div className="text-7xl tracking-tighter">
                      #AFTERDARK
                    </div>
                    <div className="w-16 h-px bg-orange-500 mx-auto" />
                    <div className="text-lg tracking-wide">
                      JOIN 15K RUNNERS
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-[#0D0D0D]/60">Bus Stop Campaign</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[3/4] md:aspect-[21/9] bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center p-16 text-white">
                <div className="text-center space-y-8">
                  <div className="text-sm tracking-[0.3em] text-orange-500">
                    GLOBAL CHALLENGE
                  </div>
                  <div className="text-[6rem] md:text-[10rem] tracking-tighter leading-none">
                    RUN<br />AFTER<br />MIDNIGHT
                  </div>
                  <div className="text-xl tracking-wide opacity-80">
                    42 CITIES • ONE MOVEMENT
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Digital Street Screen — Event Launch</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
