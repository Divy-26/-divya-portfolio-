import { motion } from 'motion/react';

export default function OOHBillboards() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-7xl md:text-9xl tracking-tighter mb-6 leading-none">
            OUT OF<br />HOME
          </h2>
          <p className="text-xl text-white/60">
            Billboards, underground & street activations
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
              className="aspect-[21/9] bg-[#1a1a1a] rounded-3xl overflow-hidden relative border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B3D]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-16 text-white">
                <div className="max-w-4xl space-y-6">
                  <div className="text-[8rem] tracking-tighter leading-none">
                    OWN YOUR SPACE.
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-px bg-[#FF6B3D]" />
                    <div className="text-2xl tracking-wide text-[#FF6B3D]">STREET MODE</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">London Digital Billboard — Piccadilly Circus</p>
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
                className="aspect-[16/9] bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white text-center">
                  <div className="space-y-6">
                    <div className="text-6xl tracking-tighter leading-none">
                      STREET<br />MODE
                    </div>
                    <div className="text-sm tracking-wider opacity-90">
                      ADIDAS • SHOREDITCH
                    </div>
                    <div className="text-xl">
                      SAT 22 MAR • 3PM
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-white/60">Underground Station Poster</p>
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
                className="aspect-[16/9] bg-[#1a1a1a] rounded-2xl overflow-hidden relative border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FF6B3D]/30" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                  <div className="text-center space-y-4">
                    <div className="text-7xl tracking-tighter">
                      #STREETMODE
                    </div>
                    <div className="w-16 h-px bg-[#FF6B3D] mx-auto" />
                    <div className="text-lg tracking-wide">
                      JOIN 12K CREATORS
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-white/60">Bus Stop Campaign</p>
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
              className="aspect-[3/4] md:aspect-[21/9] bg-[#0D0D0D] rounded-3xl overflow-hidden relative border border-white/10"
            >
              <div className="absolute inset-0 flex items-center justify-center p-16 text-white">
                <div className="text-center space-y-8">
                  <div className="text-sm tracking-[0.3em] text-[#FF6B3D]">
                    GLOBAL MOVEMENT
                  </div>
                  <div className="text-[6rem] md:text-[10rem] tracking-tighter leading-none">
                    MOVE<br />YOUR<br />WAY
                  </div>
                  <div className="text-xl tracking-wide opacity-80">
                    25 CITIES • ONE CULTURE
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Digital Street Screen — Campaign Launch</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="aspect-[9/16] bg-[#0D0D0D] rounded-2xl overflow-hidden relative border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B3D]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-white text-center">
                  <div className="space-y-6">
                    <div className="text-5xl tracking-tighter leading-none">
                      STREET<br />MODE
                    </div>
                    <div className="text-xs tracking-wider text-[#FF6B3D]">
                      ADIDAS.COM/STREETMODE
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-white/60">Bus Shelter Ad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="aspect-[9/16] bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 text-white text-center">
                  <div className="space-y-6">
                    <div className="text-6xl tracking-tighter">
                      OWN<br />YOUR<br />SPACE
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-white/60">Street Poster</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="aspect-[9/16] bg-[#1a1a1a] rounded-2xl overflow-hidden relative border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 text-white text-center">
                  <div className="space-y-6">
                    <div className="text-xs tracking-[0.3em] text-[#FF6B3D]">
                      LAUNCHING
                    </div>
                    <div className="text-5xl tracking-tighter leading-none">
                      22<br />MAR
                    </div>
                    <div className="text-sm opacity-80">
                      BOXPARK<br />SHOREDITCH
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-sm text-white/60">Event Poster</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
