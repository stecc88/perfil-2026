import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      level: "expert",
      color: "bg-green-100 text-green-700 border-green-200",
      icon: "🟢",
      skills: ["JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      level: "intermediate",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      icon: "🟡",
      skills: ["React", "Vite", "Node.js", "Git", "TypeScript", "SQL", "MongoDB", "Prisma"]
    },
    {
      level: "basic",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "🔵",
      skills: ["Python", "Docker"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-800 capitalize">
                  {t(`skills.${category.level}`)}
                </h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-lg font-medium text-sm border ${category.color} cursor-default shadow-sm transition-shadow`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
