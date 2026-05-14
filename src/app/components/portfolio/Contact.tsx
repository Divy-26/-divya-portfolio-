import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-[#0D0D0D] text-[#F5F5F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-7xl md:text-9xl tracking-tighter mb-8 leading-none">
              LET'S WORK<br />TOGETHER
            </h2>
            <p className="text-lg text-[#F5F5F3]/60">
              Available for freelance projects and full-time opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[#F5F5F3]/50 mb-2">EMAIL</p>
                <a
                  href="mailto:divya@example.com"
                  className="text-xl hover:text-[#6C8CFF] transition-colors flex items-center gap-3"
                >
                  <Mail className="w-6 h-6" />
                  divya@example.com
                </a>
              </div>

              <div>
                <p className="text-sm text-[#F5F5F3]/50 mb-3">CONNECT</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#F5F5F3]/20 flex items-center justify-center hover:border-[#6C8CFF] hover:text-[#6C8CFF] transition-all hover:translate-y-[-4px]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#F5F5F3]/20 flex items-center justify-center hover:border-[#6C8CFF] hover:text-[#6C8CFF] transition-all hover:translate-y-[-4px]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-24 mt-24 border-t border-[#F5F5F3]/10">
          <p className="text-sm text-[#F5F5F3]/40">
            © 2026 Divya Gupta · UX/UI & Digital Designer
          </p>
        </div>
      </div>
    </section>
  );
}
