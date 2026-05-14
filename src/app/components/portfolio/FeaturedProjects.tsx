import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'ADIDAS STREET MODE',
    tags: ['Campaign', 'Social', 'CRM', 'Branding'],
    bgColor: '#0D0D0D'
  },
  {
    id: 2,
    title: 'SMART HOME EXPERIENCE',
    tags: ['UX/UI', 'Product Design', 'Interaction'],
    bgColor: '#1a1a1a'
  },
  {
    id: 3,
    title: 'NYKAA SOCIAL CAMPAIGN',
    tags: ['Social', 'Branding', 'Digital'],
    bgColor: '#FC2779'
  }
];

interface FeaturedProjectsProps {
  onProjectClick?: (id: number) => void;
}

export default function FeaturedProjects({ onProjectClick }: FeaturedProjectsProps) {
  return (
    <section id="work" className="py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-7xl md:text-9xl tracking-tighter mb-6 leading-none">
            FEATURED<br />WORK
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onProjectClick?.(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
