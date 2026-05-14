import { motion } from 'motion/react';

export default function PresentationDeck() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl tracking-tight mb-4">
            PRESENTATION
          </h2>
          <p className="text-xl text-white/60">
            Campaign strategy & rollout
          </p>
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
              className="aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-2xl p-12 border border-white/10"
            >
              <div className="space-y-8">
                <div className="text-xs tracking-[0.3em] text-orange-500">CAMPAIGN CONCEPT</div>
                <div className="space-y-4">
                  <div className="text-5xl tracking-tighter leading-none">
                    NIKE<br />AFTER DARK
                  </div>
                  <div className="w-16 h-px bg-orange-500" />
                  <div className="text-sm opacity-70 leading-relaxed">
                    A global night-running movement designed for Gen Z runners and creatives
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Concept Slide</p>
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
              className="aspect-[16/10] bg-[#F5F5F3] rounded-2xl p-12 text-[#0D0D0D]"
            >
              <div className="space-y-6">
                <div className="text-xs tracking-[0.3em] text-orange-600">CAMPAIGN PILLARS</div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">01 SOCIAL</div>
                    <div className="text-sm opacity-60">Instagram, Stories, Reels</div>
                  </div>
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">02 DIGITAL</div>
                    <div className="text-sm opacity-60">App Experience, Tracking</div>
                  </div>
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">03 OOH</div>
                    <div className="text-sm opacity-60">Billboards, City Activations</div>
                  </div>
                  <div>
                    <div className="text-2xl tracking-tight mb-2">04 CRM</div>
                    <div className="text-sm opacity-60">Email, Notifications</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Strategy Overview</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[16/10] bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-12"
            >
              <div className="space-y-8">
                <div className="text-xs tracking-[0.3em] opacity-90">TARGET AUDIENCE</div>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl tracking-tight mb-2">GEN Z RUNNERS</div>
                    <div className="text-sm opacity-90">18-28 years old</div>
                  </div>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>• Urban, city-based lifestyle</div>
                    <div>• Digital-first mindset</div>
                    <div>• Community-driven</div>
                    <div>• Social media active</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Audience Slide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[16/10] bg-[#F5F5F3] rounded-2xl p-12 text-[#0D0D0D]"
            >
              <div className="space-y-6">
                <div className="text-xs tracking-[0.3em] text-orange-600">ROLLOUT TIMELINE</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-orange-600">W1</div>
                    <div>
                      <div className="tracking-tight mb-1">Teaser Campaign</div>
                      <div className="text-sm opacity-60">Social media hints, mystery posts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-orange-600">W2</div>
                    <div>
                      <div className="tracking-tight mb-1">Full Launch</div>
                      <div className="text-sm opacity-60">App live, OOH activated</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-orange-600">W3-4</div>
                    <div>
                      <div className="tracking-tight mb-1">City Events</div>
                      <div className="text-sm opacity-60">Group runs, activations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-orange-600">W5-8</div>
                    <div>
                      <div className="tracking-tight mb-1">Community Growth</div>
                      <div className="text-sm opacity-60">Challenges, leaderboards</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Timeline Slide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[21/9] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-2xl p-12 border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-orange-500">KEY METRICS</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">50K+</div>
                    <div className="text-sm opacity-60">Active Participants</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-orange-500 opacity-0">SPACER</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">42</div>
                    <div className="text-sm opacity-60">Cities Worldwide</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-orange-500 opacity-0">SPACER</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">2M+</div>
                    <div className="text-sm opacity-60">Social Impressions</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60">Success Metrics</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
