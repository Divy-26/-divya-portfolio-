import { motion } from 'motion/react';

export default function SocialCampaign() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl tracking-tight mb-4">
            SOCIAL CAMPAIGN
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Instagram, Stories & Reels
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="space-y-4"
                >
                  <div className="text-6xl tracking-tighter leading-none">
                    RUN<br />AFTER<br />DARK
                  </div>
                  <div className="w-12 h-px bg-orange-500 mx-auto" />
                  <div className="text-sm tracking-wider opacity-80">
                    JOIN THE CHALLENGE
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Instagram Post — Challenge Launch</p>
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
              className="aspect-[9/16] bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="space-y-6">
                  <div className="text-8xl tracking-tighter">
                    24
                  </div>
                  <div className="text-2xl tracking-tight">
                    HOURS<br />TO GO
                  </div>
                  <div className="text-sm opacity-80">
                    LONDON • MANCHESTER • EDINBURGH
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
                  <div className="text-white text-xs tracking-wider opacity-60 mb-2">WEEK 1 STATS</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-white/60 text-xs mb-1">DISTANCE</div>
                      <div className="text-white text-3xl tracking-tight">42.5 KM</div>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div>
                      <div className="text-white/60 text-xs mb-1">NIGHTS</div>
                      <div className="text-white text-3xl tracking-tight">5/7</div>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div>
                      <div className="text-white/60 text-xs mb-1">RANK</div>
                      <div className="text-orange-500 text-3xl tracking-tight">#128</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Story — Personal Stats</p>
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
                  <div className="text-sm tracking-wider text-orange-500">THIS WEEK'S CHALLENGE</div>
                  <div className="text-5xl tracking-tighter leading-none">
                    RUN 10K<br />AFTER MIDNIGHT
                  </div>
                  <div className="text-sm opacity-60">+ 500 BONUS POINTS</div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Reel Cover — Weekly Challenge</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                <div className="text-center space-y-4">
                  <div className="text-6xl tracking-tighter">
                    #AFTERDARK
                  </div>
                  <div className="text-sm tracking-wider opacity-80">
                    15K RUNNERS • 42 CITIES
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Feed Post — Community Highlight</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
