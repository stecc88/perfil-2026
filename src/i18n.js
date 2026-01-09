import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto"
      },
      hero: {
        greeting: "Hola, soy",
        role: "Desarrollador Full Stack",
        description: "Bienvenido a mi página personal. Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. Aquí encontrarás mis proyectos, habilidades y formas de contactarme.",
        cta_projects: "Ver proyectos",
        cta_contact: "Contactar"
      },
      projects: {
        title: "Proyectos Destacados",
        view_code: "Ver Código",
        view_demo: "Ver Demo"
      },
      skills: {
        title: "Habilidades Técnicas"
      },
      contact: {
        title: "Contacto",
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        send: "Enviar Mensaje",
        success: "¡Mensaje enviado con éxito!",
        error: "Hubo un error al enviar el mensaje."
      },
      footer: {
        rights: "Todos los derechos reservados."
      }
    }
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        projects: "Progetti",
        skills: "Competenze",
        contact: "Contatti"
      },
      hero: {
        greeting: "Ciao, sono",
        role: "Sviluppatore Full Stack",
        description: "Benvenuto nella mia pagina personale. Sono uno sviluppatore Full Stack appassionato di creare soluzioni digitali innovative. Qui troverai i miei progetti, competenze e modi per contattarmi.",
        cta_projects: "Vedi progetti",
        cta_contact: "Contattami"
      },
      projects: {
        title: "Progetti in Evidenza",
        view_code: "Vedi Codice",
        view_demo: "Vedi Demo"
      },
      skills: {
        title: "Competenze Tecniche"
      },
      contact: {
        title: "Contatti",
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        send: "Invia Messaggio",
        success: "Messaggio inviato con successo!",
        error: "Si è verificato un errore durante l'invio."
      },
      footer: {
        rights: "Tutti i diritti riservati."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I am",
        role: "Full Stack Developer",
        description: "Welcome to my personal page. I am a Full Stack Developer passionate about building innovative digital solutions. Here you will find my projects, skills, and ways to get in touch.",
        cta_projects: "View Projects",
        cta_contact: "Contact Me"
      },
      projects: {
        title: "Featured Projects",
        view_code: "View Code",
        view_demo: "View Demo"
      },
      skills: {
        title: "Technical Skills",
        expert: "Expert",
        intermediate: "Intermediate",
        basic: "Basic"
      },
      contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "There was an error sending the message."
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
