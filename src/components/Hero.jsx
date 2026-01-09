import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background to-blue-50">
      <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0"
        >
          <h2 className="text-xl md:text-2xl text-primary font-semibold">{t('hero.greeting')} Stecco Hernan</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            {t('hero.role')}
          </h1>
          <p className="text-lg text-secondary max-w-lg mx-auto md:mx-0">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.cta_projects')} <ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              {t('hero.cta_contact')}
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
