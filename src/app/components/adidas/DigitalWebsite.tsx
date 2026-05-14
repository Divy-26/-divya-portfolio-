import { motion } from 'motion/react';
import { MapPin, Calendar, Users } from 'lucide-react';

export default function DigitalWebsite() {
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
            DIGITAL<br />CAMPAIGN
          </h2>
          <p className="text-xl text-white/60">
            Landing page & interactive experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="aspect-[21/9] p-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-sm tracking-[0.3em] text-[#FF6B3D]">
                  ADIDAS STREET MODE
                </div>
                <h3 className="text-7xl tracking-tighter leading-none">
                  OWN YOUR<br />SPACE
                </h3>
                <p className="text-lg text-white/70 max-w-2xl">
                  Join the street culture movement. Express yourself through style, movement and creativity.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="px-8 py-4 bg-[#FF6B3D] text-white rounded-lg text-sm tracking-wider">
                    REGISTER NOW
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg text-sm tracking-wider">
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            <div className="bg-[#1a1a1a] p-8">
              <MapPin className="w-8 h-8 text-[#FF6B3D] mb-4" />
              <div className="text-2xl tracking-tight mb-2">25 Cities</div>
              <div className="text-sm text-white/60">Worldwide events</div>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <Calendar className="w-8 h-8 text-[#FF6B3D] mb-4" />
              <div className="text-2xl tracking-tight mb-2">Weekly</div>
              <div className="text-sm text-white/60">Street takeovers</div>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <Users className="w-8 h-8 text-[#FF6B3D] mb-4" />
              <div className="text-2xl tracking-tight mb-2">12K+</div>
              <div className="text-sm text-white/60">Active creators</div>
            </div>
          </div>

          <div className="p-16 space-y-12">
            <div>
              <div className="text-sm tracking-wider text-white/50 mb-6">FEATURED CREATORS</div>
              <div className="grid md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-square bg-white/5 rounded-xl mb-4 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-[#FF6B3D]/20"></div>
                    </div>
                    <div className="text-sm">@creator{i}</div>
                    <div className="text-xs text-white/50">London</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-sm text-white/60 text-center">Campaign Landing Page — Desktop View</p>
      </div>
    </section>
  );
}
