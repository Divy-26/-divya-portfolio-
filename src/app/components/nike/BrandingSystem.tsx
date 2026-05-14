import { motion } from 'motion/react';

export default function BrandingSystem() {
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
            BRANDING SYSTEM
          </h2>
          <p className="text-xl text-[#0D0D0D]/60">
            Typography, colors & visual language
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12"
          >
            <div className="mb-12">
              <div className="text-xs tracking-[0.3em] text-[#0D0D0D]/50 mb-6">TYPOGRAPHY</div>
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-[#0D0D0D]/50 mb-3">PRIMARY — Headings</div>
                  <div className="text-7xl tracking-tighter leading-none">
                    INTER TIGHT
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#0D0D0D]/50 mb-3">SECONDARY — Body</div>
                  <div className="text-3xl">
                    Inter Regular
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-[#0D0D0D]/10">
              <div className="text-xs tracking-[0.3em] text-[#0D0D0D]/50 mb-6">TYPE HIERARCHY</div>
              <div className="space-y-4">
                <div className="text-6xl tracking-tighter">Hero Headline</div>
                <div className="text-4xl tracking-tight">Section Title</div>
                <div className="text-2xl">Subheading</div>
                <div className="text-lg text-[#0D0D0D]/70">Body text for longer form content and descriptions</div>
                <div className="text-sm text-[#0D0D0D]/60">Caption and small text</div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-12"
            >
              <div className="text-xs tracking-[0.3em] text-[#0D0D0D]/50 mb-8">COLOR PALETTE</div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="aspect-[3/1] bg-[#0D0D0D] rounded-xl" />
                  <div className="text-sm">
                    <div className="tracking-tight mb-1">Core Black</div>
                    <div className="text-[#0D0D0D]/50 text-xs">#0D0D0D</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="aspect-[3/1] bg-[#F5F5F3] rounded-xl border border-[#0D0D0D]/10" />
                  <div className="text-sm">
                    <div className="tracking-tight mb-1">Off White</div>
                    <div className="text-[#0D0D0D]/50 text-xs">#F5F5F3</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="aspect-[3/1] bg-[#FF6B35] rounded-xl" />
                  <div className="text-sm">
                    <div className="tracking-tight mb-1">Neon Orange</div>
                    <div className="text-[#0D0D0D]/50 text-xs">#FF6B35</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="aspect-[3/1] bg-[#BDBDBD] rounded-xl" />
                  <div className="text-sm">
                    <div className="tracking-tight mb-1">Soft Grey</div>
                    <div className="text-[#0D0D0D]/50 text-xs">#BDBDBD</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0D0D0D] text-white rounded-2xl p-12"
            >
              <div className="text-xs tracking-[0.3em] opacity-50 mb-8">LAYOUT PRINCIPLES</div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-white/10">
                  <div className="text-2xl tracking-tight mb-2">Bold Typography</div>
                  <div className="text-sm opacity-70">
                    Large, impactful headlines that command attention
                  </div>
                </div>

                <div className="pb-6 border-b border-white/10">
                  <div className="text-2xl tracking-tight mb-2">Generous Space</div>
                  <div className="text-sm opacity-70">
                    Clean layouts with breathing room
                  </div>
                </div>

                <div className="pb-6 border-b border-white/10">
                  <div className="text-2xl tracking-tight mb-2">Motion Blur</div>
                  <div className="text-sm opacity-70">
                    Gradient effects suggesting movement
                  </div>
                </div>

                <div>
                  <div className="text-2xl tracking-tight mb-2">Grain Texture</div>
                  <div className="text-sm opacity-70">
                    Subtle texture for editorial feel
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-12"
          >
            <div className="text-xs tracking-[0.3em] text-[#0D0D0D]/50 mb-8">VISUAL STYLE</div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-[#0D0D0D] via-[#FF6B35]/20 to-[#0D0D0D] rounded-2xl flex items-center justify-center">
                  <div className="text-white text-4xl tracking-tighter">BOLD</div>
                </div>
                <div className="text-sm text-[#0D0D0D]/70">
                  Strong contrast and impactful visuals
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-square bg-[#0D0D0D] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-30"
                  />
                  <div className="text-white text-4xl tracking-tighter relative">MOTION</div>
                </div>
                <div className="text-sm text-[#0D0D0D]/70">
                  Dynamic gradients and movement
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-square bg-[#F5F5F3] border border-[#0D0D0D]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-[#0D0D0D] text-4xl tracking-tighter">CLEAN</div>
                </div>
                <div className="text-sm text-[#0D0D0D]/70">
                  Minimal, editorial aesthetic
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
