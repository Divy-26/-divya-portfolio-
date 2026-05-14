import { motion } from 'motion/react';

export default function SocialSystem() {
  return (
    <section className="py-40 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-7xl md:text-9xl tracking-tighter mb-6 leading-none">
            SOCIAL<br />MEDIA
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Instagram, TikTok & Stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[9/16] bg-[#0D0D0D] rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B3D]/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="space-y-6"
                >
                  <div className="text-7xl tracking-tighter leading-none">
                    STREET<br />MODE
                  </div>
                  <div className="w-12 h-px bg-[#FF6B3D] mx-auto" />
                  <div className="text-sm tracking-wider opacity-80">
                    OWN YOUR SPACE
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Instagram — Campaign Launch</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[9/16] bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="space-y-6">
                  <div className="text-8xl tracking-tighter">
                    48
                  </div>
                  <div className="text-2xl tracking-tight">
                    HOURS<br />TO DROP
                  </div>
                  <div className="text-sm opacity-90">
                    LONDON • MANCHESTER • BIRMINGHAM
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Story — Event Countdown</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[9/16] bg-[#0D0D0D] rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 right-8">
                  <div className="text-white text-xs tracking-wider opacity-60 mb-4">FEATURED CREATOR</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B3D]"></div>
                      <div>
                        <div className="text-white">@streetstyle_ldn</div>
                        <div className="text-white/60 text-xs">London</div>
                      </div>
                    </div>
                    <div className="aspect-square bg-white/10 rounded-xl"></div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      "Street Mode is about expressing yourself through movement and style."
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Story — Creator Feature</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[16/9] bg-gradient-to-r from-[#0D0D0D] to-[#1a1a1a] rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                <div className="space-y-4 text-center">
                  <div className="text-sm tracking-wider text-[#FF6B3D]">JOIN THE MOVEMENT</div>
                  <div className="text-5xl tracking-tighter leading-none">
                    MOVE YOUR WAY<br />SHOREDITCH TAKEOVER
                  </div>
                  <div className="text-sm opacity-60">SAT 22 MAR • 3PM</div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Reel Cover — Event Invite</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[16/9] bg-[#0D0D0D] rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B3D]/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                <div className="text-center space-y-4">
                  <div className="text-6xl tracking-tighter">
                    #STREETMODE
                  </div>
                  <div className="text-sm tracking-wider opacity-80">
                    12K CREATORS • 25 CITIES
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Feed — Community Highlight</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
