import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tags: string[];
  bgColor: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="space-y-6">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="aspect-[4/3] rounded-2xl relative overflow-hidden"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/10 text-[12rem] tracking-tighter leading-none">
              {String(project.id).padStart(2, '0')}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="absolute top-6 right-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowUpRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {project.id === 1 && (
            <div className="absolute bottom-6 left-6 right-6">
              <div className="px-4 py-2 bg-[#FF6B3D] text-white text-sm tracking-wider text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW PROJECT
              </div>
            </div>
          )}

          {project.id === 1 && (
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-white text-center space-y-6">
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-[#FF6B3D] to-transparent blur-3xl"
                />
                <div className="relative">
                  <div className="text-7xl tracking-tighter leading-none mb-4">
                    STREET<br />MODE
                  </div>
                  <div className="text-sm tracking-wider text-[#FF6B3D]">
                    OWN YOUR SPACE
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === 2 && (
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-3/4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/30"></div>
                    <div className="h-3 bg-white/30 rounded w-24"></div>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-full"></div>
                  <div className="h-2 bg-white/20 rounded w-3/4"></div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="aspect-square bg-white/20 rounded"></div>
                    <div className="aspect-square bg-white/20 rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {project.id === 3 && (
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-white text-center space-y-6">
                <div className="text-6xl tracking-tight leading-none">
                  SUMMER<br />GLOW
                </div>
                <div className="text-sm tracking-wider opacity-90">
                  NYKAA CAMPAIGN
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="space-y-4">
          <h3 className="text-4xl md:text-5xl tracking-tighter leading-none">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 text-sm border ${
                  project.id === 1 && tag === 'Campaign'
                    ? 'bg-[#FF6B3D]/10 text-[#FF6B3D] border-[#FF6B3D]/20'
                    : 'bg-[#0D0D0D]/5 text-[#0D0D0D] border-[#0D0D0D]/10'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
