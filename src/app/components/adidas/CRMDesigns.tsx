import { motion } from 'motion/react';

export default function CRMDesigns() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-7xl md:text-9xl tracking-tighter mb-6 leading-none">
            CRM &<br />EMAIL
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Launch invites, events & promotional content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-[#0D0D0D] p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl tracking-tight">ADIDAS</div>
                  <div className="text-xs tracking-wider opacity-60">STREET MODE</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl tracking-tight">You're Invited</div>
                  <div className="text-sm opacity-60">Campaign Launch Event</div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-2xl tracking-tight mb-4">STREET MODE LONDON</div>
                  <p className="text-[#0D0D0D]/70 leading-relaxed">
                    Join us for the official Street Mode launch. Experience live performances, exclusive drops, and connect with London's creative community.
                  </p>
                </div>

                <div className="bg-[#FF6B3D]/10 border border-[#FF6B3D]/20 rounded-xl p-6">
                  <div className="text-sm text-[#0D0D0D]/60 mb-1">EVENT DETAILS</div>
                  <div className="text-xl tracking-tight mb-2">Saturday, 22 March</div>
                  <div className="text-sm text-[#0D0D0D]/60">Boxpark Shoreditch • 3PM - 10PM</div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  REGISTER NOW
                </button>

                <div className="text-xs text-[#0D0D0D]/40 text-center pt-4">
                  Limited spaces available
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Campaign Launch Email</p>
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
              className="bg-white rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] p-8 text-white text-center">
                <div className="mb-6">
                  <div className="text-6xl mb-2">🎉</div>
                  <div className="text-xs tracking-wider opacity-90">EXCLUSIVE ACCESS</div>
                </div>
                <div className="text-4xl tracking-tight">EARLY DROP</div>
              </div>

              <div className="p-8 space-y-6">
                <div className="text-center">
                  <p className="text-lg text-[#0D0D0D]/80 mb-4">
                    Get first access to Street Mode collection. Limited pieces dropping in 48 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B3D]/10 text-[#FF6B3D] rounded-full text-sm">
                    <span>VIP Access Only</span>
                  </div>
                </div>

                <div className="bg-[#0D0D0D]/5 rounded-xl p-6 space-y-3">
                  <div className="text-sm text-[#0D0D0D]/60">DROP PREVIEW</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Street Mode Hoodie</span>
                    <span className="text-lg tracking-tight">£85</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Street Mode Joggers</span>
                    <span className="text-lg tracking-tight">£70</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Limited Cap</span>
                    <span className="text-lg tracking-tight">£35</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  SHOP EARLY ACCESS
                </button>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Promo Launch Email</p>
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
              className="bg-[#0D0D0D] rounded-2xl overflow-hidden p-6 text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B3D] flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-60">PUSH NOTIFICATION</div>
                    <div className="text-sm tracking-tight">Event starting soon</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl tracking-tight mb-2">Street Mode London</div>
                  <p className="text-sm opacity-80">
                    Event starts in 1 hour at Boxpark Shoreditch. Don't miss the opening performance.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white/10 rounded-lg text-sm">
                    Remind Me
                  </button>
                  <button className="flex-1 py-3 bg-[#FF6B3D] rounded-lg text-sm">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="mt-6 bg-gradient-to-br from-[#FF6B3D] to-[#FF8F5E] rounded-2xl overflow-hidden p-6 text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    ⚡
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-90">PUSH NOTIFICATION</div>
                    <div className="text-sm tracking-tight">New drop available</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl tracking-tight mb-2">Limited Edition</div>
                  <p className="text-sm opacity-90">
                    Street Mode collection just dropped. Shop now before it sells out.
                  </p>
                </div>

                <button className="w-full py-3 bg-white text-[#FF6B3D] rounded-lg text-sm tracking-wider">
                  Shop Now
                </button>
              </div>
            </motion.div>

            <p className="mt-4 text-sm text-[#0D0D0D]/60">Mobile Notifications</p>
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
              className="bg-white rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-[#0D0D0D] p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B3D] flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <div className="text-xs tracking-wider opacity-60">REMINDER</div>
                    <div className="text-2xl tracking-tight">Tomorrow's Event</div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-3xl tracking-tight mb-2">Don't Forget</div>
                  <p className="text-[#0D0D0D]/70">
                    Street Mode launch event tomorrow at Boxpark Shoreditch
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/5 flex items-center justify-center text-sm">
                      📅
                    </div>
                    <div>
                      <div className="text-sm text-[#0D0D0D]/60">Date</div>
                      <div className="tracking-tight">Saturday, 22 March</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/5 flex items-center justify-center text-sm">
                      🕒
                    </div>
                    <div>
                      <div className="text-sm text-[#0D0D0D]/60">Time</div>
                      <div className="tracking-tight">3:00 PM - 10:00 PM</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  ADD TO CALENDAR
                </button>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Event Reminder Email</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
