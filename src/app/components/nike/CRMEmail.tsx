import { motion } from 'motion/react';

export default function CRMEmail() {
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
            CRM & EMAIL
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Challenge invites, achievements & notifications
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
              className="bg-[#F5F5F3] rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-[#0D0D0D] p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl tracking-tight">NIKE</div>
                  <div className="text-xs tracking-wider opacity-60">AFTER DARK</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl tracking-tight">You're Invited</div>
                  <div className="text-sm opacity-60">This Week's Challenge</div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-2xl tracking-tight mb-4">RUN 10K AFTER MIDNIGHT</div>
                  <p className="text-[#0D0D0D]/70 leading-relaxed">
                    Challenge yourself this week. Complete a 10K run between midnight and 5am to unlock exclusive rewards and climb the leaderboard.
                  </p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                  <div className="text-sm text-[#0D0D0D]/60 mb-1">BONUS REWARDS</div>
                  <div className="text-2xl tracking-tight text-orange-600">+500 Points</div>
                  <div className="text-sm text-[#0D0D0D]/60 mt-2">Limited time offer</div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  ACCEPT CHALLENGE
                </button>

                <div className="text-xs text-[#0D0D0D]/40 text-center pt-4">
                  Challenge ends Sunday 23:59
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Challenge Invite Email</p>
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
              className="bg-[#F5F5F3] rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-8 text-white text-center">
                <div className="mb-6">
                  <div className="text-6xl mb-2">🏆</div>
                  <div className="text-xs tracking-wider opacity-90">ACHIEVEMENT UNLOCKED</div>
                </div>
                <div className="text-4xl tracking-tight">NIGHT OWL</div>
              </div>

              <div className="p-8 space-y-6">
                <div className="text-center">
                  <p className="text-lg text-[#0D0D0D]/80 mb-4">
                    Congratulations! You've completed 5 night runs this week.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm">
                    <span>+250 Points Earned</span>
                  </div>
                </div>

                <div className="bg-[#0D0D0D]/5 rounded-xl p-6 space-y-3">
                  <div className="text-sm text-[#0D0D0D]/60">YOUR STATS THIS WEEK</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Distance</span>
                    <span className="text-lg tracking-tight">42.5 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Night Runs</span>
                    <span className="text-lg tracking-tight">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Leaderboard Rank</span>
                    <span className="text-lg tracking-tight text-orange-600">#128</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  VIEW LEADERBOARD
                </button>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Achievement Email</p>
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
              className="bg-[#F5F5F3] rounded-2xl overflow-hidden border border-[#0D0D0D]/10"
            >
              <div className="bg-[#0D0D0D] p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-xs tracking-wider opacity-60">TONIGHT</div>
                    <div className="text-2xl tracking-tight">Event Reminder</div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-3xl tracking-tight mb-2">London Group Run</div>
                  <p className="text-[#0D0D0D]/70">
                    Join 200+ runners tonight at Boxpark Shoreditch
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/5 flex items-center justify-center text-sm">
                      🕘
                    </div>
                    <div>
                      <div className="text-sm text-[#0D0D0D]/60">Time</div>
                      <div className="tracking-tight">9:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/5 flex items-center justify-center text-sm">
                      📍
                    </div>
                    <div>
                      <div className="text-sm text-[#0D0D0D]/60">Location</div>
                      <div className="tracking-tight">Boxpark Shoreditch</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D0D0D]/5 flex items-center justify-center text-sm">
                      🏃
                    </div>
                    <div>
                      <div className="text-sm text-[#0D0D0D]/60">Distance</div>
                      <div className="tracking-tight">5K Social Run</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#0D0D0D] text-white rounded-xl text-sm tracking-wider hover:bg-[#0D0D0D]/90 transition-colors">
                  I'M COMING
                </button>
              </div>
            </motion.div>
            <p className="mt-4 text-sm text-[#0D0D0D]/60">Event Reminder Email</p>
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
              className="bg-[#0D0D0D] rounded-2xl overflow-hidden p-6 text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    🔥
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-60">PUSH NOTIFICATION</div>
                    <div className="text-sm tracking-tight">You're on a streak!</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl tracking-tight mb-2">5 Days in a Row</div>
                  <p className="text-sm opacity-80">
                    Don't break your running streak. Go for a run tonight to keep it going.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white/10 rounded-lg text-sm">
                    Later
                  </button>
                  <button className="flex-1 py-3 bg-orange-500 rounded-lg text-sm">
                    Start Run
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="mt-6 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl overflow-hidden p-6 text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    ⚡
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-90">PUSH NOTIFICATION</div>
                    <div className="text-sm tracking-tight">New challenge available</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl tracking-tight mb-2">Midnight Runner</div>
                  <p className="text-sm opacity-90">
                    Complete 10K after midnight for +500 bonus points
                  </p>
                </div>

                <button className="w-full py-3 bg-white text-orange-600 rounded-lg text-sm tracking-wider">
                  View Challenge
                </button>
              </div>
            </motion.div>

            <p className="mt-4 text-sm text-[#0D0D0D]/60">Push Notification Cards</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
