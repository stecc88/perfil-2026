import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { t, i18n } = useTranslation();

  const aiPhraseGeneratorContent = {
    es: {
      title: "Proyecto Full-Stack en producción",
      description: "Generador de frases con IA, autenticación JWT y arquitectura en 3 capas.",
      stack: ["React", "Node", "PostgreSQL", "Google Gemini"]
    },
    it: {
      title: "Progetto Full-Stack in produzione",
      description: "Generatore di frasi con IA, autenticazione JWT e architettura a 3 livelli.",
      stack: ["React", "Node", "PostgreSQL", "Google Gemini"]
    },
    en: {
      title: "Full-Stack project in production",
      description: "AI phrase generator with JWT authentication and a 3-layer architecture.",
      stack: ["React", "Node", "PostgreSQL", "Google Gemini"]
    }
  };
  const aiContent = aiPhraseGeneratorContent[i18n.language] || aiPhraseGeneratorContent.es;

  const pisoLinkContent = {
    es: {
      title: "Proyecto en desarrollo — PisoLink",
      description:
        "Aplicación web diseñada para facilitar la búsqueda del compañero/a de piso ideal, combinando afinidad, contexto y comunicación directa.",
      features: ["Autenticación de usuarios", "Match por compatibilidad", "Chat en tiempo real", "UI mobile-first"],
      note:
        "Proyecto en desarrollo activo, enfocado en arquitectura limpia, seguridad y escalabilidad real (no demo)."
    },
    it: {
      title: "Progetto in sviluppo — PisoLink",
      description:
        "Applicazione web progettata per facilitare la ricerca del coinquilino ideale, combinando affinità, contesto e comunicazione diretta.",
      features: ["Autenticazione utenti", "Matching per compatibilità", "Chat in tempo reale", "UI mobile-first"],
      note:
        "Progetto in sviluppo attivo, focalizzato su architettura pulita, sicurezza e scalabilità reale (non demo)."
    },
    en: {
      title: "Project in development — PisoLink",
      description:
        "Web application designed to help users find the ideal roommate by combining compatibility, context, and direct communication.",
      features: ["User authentication", "Compatibility matching", "Real-time chat", "Mobile-first UI"],
      note:
        "Actively developed project focused on clean architecture, security, and real scalability (not a demo)."
    }
  };
  const pisoContent = pisoLinkContent[i18n.language] || pisoLinkContent.es;

  const projects = [
    {
      id: 1,
      title: "MERN",
      description: "Aplicación web MERN para la gestión de clientes. Permite crear, listar, editar y eliminar clientes con nombre, apellido y número de teléfono.",
      tech: ["React", "Tailwind", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      github: "https://github.com/stecc88/crud3",
      demo: "https://crud3-x65b.vercel.app/"
    },
    {
      id: 2,
      title: aiContent.title,
      description: aiContent.description,
      tech: aiContent.stack,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      github: "https://github.com/stecc88/Generador-de-frases-con-ia",
      demo: "https://generador-de-frases-con-ia.vercel.app/login"
    },
    {
      id: 3,
      title: pisoContent.title,
      description: `${pisoContent.description} ${pisoContent.note}`,
      tech: pisoContent.features,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      github: "https://github.com/stecc88/link-piso5",
      demo: "https://lnkd.in/gU_KNE24"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-secondary mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-50 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                    <Github size={18} className="mr-1" /> {t('projects.view_code')}
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-blue-700 transition-colors text-sm font-medium">
                    <ExternalLink size={18} className="mr-1" /> {t('projects.view_demo')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
