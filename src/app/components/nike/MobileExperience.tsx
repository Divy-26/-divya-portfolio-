import { motion } from 'motion/react';
import { Trophy, Users, MapPin, Target } from 'lucide-react';

export default function MobileExperience() {
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
            MOBILE EXPERIENCE
          </h2>
          <p className="text-xl text-white/60">
            Run tracking, challenges & community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="aspect-[9/19] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-[2.5rem] p-6 border border-white/10 overflow-hidden relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-wider opacity-60">TONIGHT'S RUN</span>
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <div className="text-7xl tracking-tight">5.2</div>
                  <div className="text-sm opacity-60">KILOMETERS</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-2xl tracking-tight">24:15</div>
                    <div className="text-xs opacity-60">TIME</div>
                  </div>
                  <div>
                    <div className="text-2xl tracking-tight">4'40"</div>
                    <div className="text-xs opacity-60">PACE</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <button className="w-full py-4 bg-orange-500 text-white rounded-xl text-sm tracking-wider">
                    START RUN
                  </button>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60 text-center">Run Tracking</p>
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
              className="aspect-[9/19] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-[2.5rem] p-6 border border-white/10 overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-500" />
                  <span className="text-xs tracking-wider opacity-60">LEADERBOARD</span>
                </div>

                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'Sarah M.', km: '42.5', badge: '🔥' },
                    { rank: 2, name: 'James K.', km: '38.2', badge: '⚡' },
                    { rank: 3, name: 'You', km: '35.1', badge: '🏃', highlight: true }
                  ].map((runner) => (
                    <div
                      key={runner.rank}
                      className={`flex items-center justify-between p-3 rounded-xl ${
                        runner.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-sm opacity-60">#{runner.rank}</div>
                        <div>
                          <div className="text-sm">{runner.name}</div>
                          <div className="text-xs opacity-60">{runner.km} km</div>
                        </div>
                      </div>
                      <div className="text-lg">{runner.badge}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60 text-center">Leaderboard</p>
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
              className="aspect-[9/19] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-[2.5rem] p-6 border border-white/10 overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-xs tracking-wider opacity-60">CHALLENGES</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30">
                    <div className="text-sm mb-2">NIGHT OWL</div>
                    <div className="text-xs opacity-60 mb-3">Run 5 nights this week</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                    <div className="text-xs opacity-60 mt-2">3/5 nights</div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl">
                    <div className="text-sm mb-2">DISTANCE KING</div>
                    <div className="text-xs opacity-60 mb-3">Complete 50km total</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-white/40 h-2 rounded-full" style={{ width: '35%' }} />
                    </div>
                    <div className="text-xs opacity-60 mt-2">17.5/50 km</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60 text-center">Challenges</p>
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
              className="aspect-[9/19] bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] rounded-[2.5rem] p-6 border border-white/10 overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-xs tracking-wider opacity-60">YOUR ROUTES</span>
                </div>

                <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path
                        d="M 20 50 Q 40 20, 60 50 T 80 70"
                        stroke="#FF6B35"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                      />
                      <circle cx="20" cy="50" r="3" fill="#FF6B35" />
                      <circle cx="80" cy="70" r="3" fill="#FF6B35" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Shoreditch Loop</span>
                    <span className="text-xs opacity-60">5.2 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Thames Path</span>
                    <span className="text-xs opacity-60">8.1 km</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-white/60 text-center">Routes & Maps</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
