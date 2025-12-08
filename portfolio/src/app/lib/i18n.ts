export type Locale = "es" | "en";

export function detectLocaleFromNavigator(): Locale {
  if (typeof window === "undefined") return "es";

  const lang = window.navigator.language.toLowerCase();

  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";

  return "es"; // idioma por defecto
}

export const messages = {
  es: {
    home: {
      heroName: "Leonardo",
      heroLastName: "Dorantes",
      role: "Full Stack Developer · Software Engineer · Autobiografía Digital.",
      description:
        "Creo experiencias digitales con intención y detalle,buscando aportar precisión técnica, colaboración y una visión que impulsa siempre hacia adelante. Esta página es mi historia, mi trabajo y mi visión.",
      aboutButton: "Saber más de mí",
      contactButton: "Contacto",

      cvTitle: "Descarga mi CV",
      cvSubtitle:
        "Versión profesional en PDF — ideal para reclutadores y entrevistas. Mantengo este documento actualizado con mis habilidades y proyectos más recientes.",
      cvButton: "Descargar CV en PDF",

      recentProjectsTitle: "Proyectos Recientes",
      project1Title: "Invitación de Boda Digital",
      project1Desc:
        "Sitio interactivo con RSVP, QR, animaciones y diseño elegante.",
      project2Title: "Dashboard Profesional",
      project2Desc:
        "Panel dinámico con gráficas, autenticación y manejo de datos.",
      project3Title: "Milpa App",
      project3Desc:
        "App móvil con Flutter, arquitectura MVVM y Firebase.",
      viewMore: "Ver más →",

      skillsTitle: "Habilidades Técnicas",
      skillsFrontend: "Frontend",
      skillsBackend: "Backend",
      skillsMobileOther: "Mobile & Otros",
    },
  },
  en: {
    home: {
      heroName: "Leonardo",
      heroLastName: "Dorantes",
      role: "Full Stack Developer · Software Engineer · Digital Autobiography.",
      description:
        "I create digital experiences with intention and meticulous attention to detail, striving to deliver technical precision, foster collaboration, and maintain a vision that propels us forward. This page contains my story, my work, and my vision.",
      aboutButton: "About me",
      contactButton: "Contact",

      cvTitle: "Download my CV",
      cvSubtitle:
        "Professional PDF version — ideal for recruiters and interviews. I keep this document updated with my latest skills and projects.",
      cvButton: "Download CV (PDF)",

      recentProjectsTitle: "Recent Projects",
      project1Title: "Digital Wedding Invitation",
      project1Desc:
        "Interactive website with RSVP, QR, animations and an elegant experience.",
      project2Title: "Professional Dashboard",
      project2Desc:
        "Dynamic panel with charts, authentication and data handling.",
      project3Title: "Milpa App",
      project3Desc:
        "Mobile app built with Flutter, MVVM architecture and Firebase.",
      viewMore: "View more →",

      skillsTitle: "Technical Skills",
      skillsFrontend: "Frontend",
      skillsBackend: "Backend",
      skillsMobileOther: "Mobile & Others",
    },
  },
} as const;
