import { motion } from 'motion/react';

export default function PresentationDeck() {
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
            PRESENTA-<br />TION
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Campaign strategy & visual direction
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
              className="aspect-[16/10] bg-[#0D0D0D] rounded-2xl p-12 text-white"
            >
              <div className="space-y-8">
                <div className="text-xs tracking-[0.3em] text-[#FF6B3D]">CAMPAIGN CONCEPT</div>
                <div className="space-y-4">
                  <div className="text-5xl tracking-tighter leading-none">
                    ADIDAS<br />STREET MODE
                  </div>
                  <div className="w-16 h-px bg-[#FF6B3D]" />
                  <div className="text-sm opacity-70 leading-relaxed">
                    Celebrating street culture, self-expression and movement across London's creative communities
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Concept Slide</p>
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
              className="aspect-[16/10] bg-[#F5F5F3] rounded-2xl p-12 border border-[#0D0D0D]/10"
            >
              <div className="space-y-6">
                <div className="text-xs tracking-[0.3em] text-[#FF6B3D]">CAMPAIGN TOUCHPOINTS</div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">01 SOCIAL</div>
                    <div className="text-sm text-[#0D0D0D]/60">Instagram, TikTok, Stories</div>
                  </div>
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">02 DIGITAL</div>
                    <div className="text-sm text-[#0D0D0D]/60">Campaign Website, Registration</div>
                  </div>
                  <div className="pb-4 border-b border-[#0D0D0D]/10">
                    <div className="text-2xl tracking-tight mb-2">03 CRM</div>
                    <div className="text-sm text-[#0D0D0D]/60">Email, Push Notifications</div>
                  </div>
                  <div>
                    <div className="text-2xl tracking-tight mb-2">04 OOH</div>
                    <div className="text-sm text-[#0D0D0D]/60">Billboards, Underground, Bus Stops</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Touchpoints Overview</p>
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
              className="aspect-[16/10] bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] rounded-2xl p-12 text-white"
            >
              <div className="space-y-8">
                <div className="text-xs tracking-[0.3em] opacity-90">TARGET AUDIENCE</div>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl tracking-tight mb-2">GEN Z CREATIVES</div>
                    <div className="text-sm opacity-90">18-28 years old</div>
                  </div>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>• Urban, street culture enthusiasts</div>
                    <div>• Fashion & style conscious</div>
                    <div>• Social media active</div>
                    <div>• Community-driven mindset</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Audience Slide</p>
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
              className="aspect-[16/10] bg-[#F5F5F3] rounded-2xl p-12 border border-[#0D0D0D]/10"
            >
              <div className="space-y-6">
                <div className="text-xs tracking-[0.3em] text-[#FF6B3D]">ROLLOUT TIMELINE</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-[#FF6B3D]">W1</div>
                    <div>
                      <div className="tracking-tight mb-1">Teaser Campaign</div>
                      <div className="text-sm text-[#0D0D0D]/60">Social teasers, mystery posts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-[#FF6B3D]">W2</div>
                    <div>
                      <div className="tracking-tight mb-1">Official Launch</div>
                      <div className="text-sm text-[#0D0D0D]/60">Website live, OOH activated</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-[#FF6B3D]">W3-4</div>
                    <div>
                      <div className="tracking-tight mb-1">City Events</div>
                      <div className="text-sm text-[#0D0D0D]/60">London, Manchester, Birmingham</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl tracking-tight text-[#FF6B3D]">W5-8</div>
                    <div>
                      <div className="tracking-tight mb-1">Community Growth</div>
                      <div className="text-sm text-[#0D0D0D]/60">Creator features, UGC</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Timeline Slide</p>
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
              className="aspect-[21/9] bg-[#0D0D0D] rounded-2xl p-12 text-white"
            >
              <div className="grid md:grid-cols-3 gap-12 h-full">
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-[#FF6B3D]">SUCCESS METRICS</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">35K+</div>
                    <div className="text-sm opacity-60">Campaign Reach</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-[#FF6B3D] opacity-0">SPACER</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">25</div>
                    <div className="text-sm opacity-60">Cities Activated</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs tracking-[0.3em] text-[#FF6B3D] opacity-0">SPACER</div>
                  <div>
                    <div className="text-5xl tracking-tight mb-2">1.8M+</div>
                    <div className="text-sm opacity-60">Social Impressions</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Success Metrics</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
