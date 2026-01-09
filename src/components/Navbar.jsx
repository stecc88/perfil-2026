import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Stecco_Hernan</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-secondary hover:text-primary transition-colors font-medium">
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-2 border-l pl-4 border-gray-300">
            <button onClick={() => changeLanguage('es')} className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}>ES</button>
            <button onClick={() => changeLanguage('it')} className={`px-2 py-1 rounded ${i18n.language === 'it' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}>IT</button>
            <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}>EN</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-secondary hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 pt-2 border-t border-gray-100 justify-center">
            <button onClick={() => changeLanguage('es')} className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-primary text-white' : 'bg-gray-100'}`}>ES</button>
            <button onClick={() => changeLanguage('it')} className={`px-3 py-1 rounded ${i18n.language === 'it' ? 'bg-primary text-white' : 'bg-gray-100'}`}>IT</button>
            <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-100'}`}>EN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
