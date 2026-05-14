import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-7xl md:text-9xl tracking-tighter leading-none">
            ABOUT
          </h2>

          <div className="space-y-6 text-xl text-[#0D0D0D]/70 leading-relaxed">
            <p>
              UX/UI & Digital Designer based in London with an interest in branding, social campaigns and digital experiences.
            </p>

            <p>
              Comfortable working across digital, social and creative design projects using Figma and Adobe Creative Suite.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl tracking-tight mb-6">SKILLS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm mb-3 text-[#0D0D0D]/50">PRODUCT DESIGN</h4>
                <ul className="space-y-2 text-[#0D0D0D]/70">
                  <li>UX/UI Design</li>
                  <li>User Research</li>
                  <li>Interaction Design</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm mb-3 text-[#0D0D0D]/50">VISUAL DESIGN</h4>
                <ul className="space-y-2 text-[#0D0D0D]/70">
                  <li>Branding</li>
                  <li>Typography</li>
                  <li>Layout Design</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm mb-3 text-[#0D0D0D]/50">DIGITAL</h4>
                <ul className="space-y-2 text-[#0D0D0D]/70">
                  <li>Campaign Design</li>
                  <li>Social Content</li>
                  <li>Digital Marketing</li>
                  <li>Visual Storytelling</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
