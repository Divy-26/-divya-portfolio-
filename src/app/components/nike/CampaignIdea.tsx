import { motion } from 'motion/react';

export default function CampaignIdea() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F5F5F3]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-orange-500" />
            <span className="text-sm tracking-wider text-[#0D0D0D]/50">THE CAMPAIGN</span>
          </div>

          <p className="text-3xl md:text-4xl leading-relaxed text-[#0D0D0D]/80">
            Nike After Dark is a night-running campaign combining digital interaction, social storytelling and city-based experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-sm tracking-wider text-[#0D0D0D]/50 mb-2">ROLE</div>
              <div className="text-lg">Campaign Design, UX/UI, Visual Design</div>
            </div>
            <div>
              <div className="text-sm tracking-wider text-[#0D0D0D]/50 mb-2">DELIVERABLES</div>
              <div className="text-lg">Social, Mobile App, CRM, OOH</div>
            </div>
            <div>
              <div className="text-sm tracking-wider text-[#0D0D0D]/50 mb-2">YEAR</div>
              <div className="text-lg">2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
