import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {year} Stecco_Hernan {t('footer.rights')}</p>
        </div>
        <div className="flex items-center gap-2">
          <span>Made with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
