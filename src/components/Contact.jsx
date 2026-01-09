import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xojvggla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formState,
          _subject: "Nuevo mensaje desde portfolio"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Connect with me</h3>
              <div className="space-y-6">
                <a href="mailto:steccohernan@gmail.com" className="flex items-center space-x-4 text-secondary hover:text-primary transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Mail size={20} />
                  </div>
                  <span>steccohernan@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/pedro-hernan-stecco-it" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-secondary hover:text-primary transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/stecc88" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-secondary hover:text-primary transition-colors">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Github size={20} />
                  </div>
                  <span>github.com/stecc88</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
              <input type="text" name="_gotcha" className="hidden" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">{t('contact.message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                {t('contact.send')} <Send size={18} />
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium">
                  {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center font-medium">
                  {t('contact.error')}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
