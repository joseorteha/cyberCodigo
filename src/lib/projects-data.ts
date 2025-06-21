export interface Project {
  slug: string;
  name: string;
  url: string;
  img: string;
  shortDesc: string;
  client: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'barberia-sistema-reservas',
    name: 'Barbería "El Buen Corte"',
    url: 'https://barberzon.netlify.app/',
    img: '/barberia.png',
    shortDesc: 'Sitio web elegante con sistema de reservas que optimizó el flujo de clientes.',
    client: 'Barbería "El Buen Corte"',
    clientIndustry: 'Servicios Personales',
    challenge: 'El cliente manejaba todas sus citas por teléfono y WhatsApp, lo que generaba desorden, citas duplicadas y mucho tiempo perdido en gestión. Necesitaban una imagen profesional en línea y automatizar el proceso de reservas para enfocarse en atender a sus clientes.',
    solution: 'Diseñamos y desarrollamos una página web moderna y adaptable a móviles. La pieza central fue la integración de un sistema de reservas en línea intuitivo, que permite a los clientes ver la disponibilidad en tiempo real, elegir a su barbero preferido y pagar un anticipo para confirmar su cita. También se creó una galería para mostrar sus mejores cortes.',
    results: [
      'Reducción del 80% en el tiempo administrativo dedicado a gestionar citas.',
      'Aumento del 25% en nuevas reservas durante los primeros 3 meses.',
      'Mejora significativa de la imagen de marca, atrayendo a una clientela más amplia.'
    ],
    services: ['Diseño UI/UX', 'Desarrollo Web Responsive', 'Sistema de Reservas Online', 'Optimización SEO Local']
  },
  {
    slug: 'guau-y-miau-veterinaria',
    name: 'Veterinaria "Guau & Miau"',
    url: 'https://guau-miau.netlify.app/',
    img: '/guauymiau.png',
    shortDesc: 'Landing page para veterinaria, destacando servicios y facilitando el contacto.',
    client: 'Clínica Veterinaria Guau & Miau',
    clientIndustry: 'Salud Animal',
    challenge: 'La clínica era muy respetada por sus clientes actuales, pero tenía dificultades para atraer a nuevos dueños de mascotas. Su presencia online era nula, dependiendo exclusivamente del boca a boca. Necesitaban una forma de mostrar sus servicios, su equipo y su ubicación de forma clara y profesional.',
    solution: 'Creamos una landing page cálida y amigable, diseñada para generar confianza. Se destacaron los servicios clave con iconos claros, se presentó al equipo de veterinarios con sus fotos y biografías, y se integró un mapa de Google interactivo. Un botón de "Urgencia 24h" visible en todo momento conecta directamente a su línea de WhatsApp.',
    results: [
      'Incremento del 40% en las llamadas de nuevos clientes.',
      'Posicionamiento en la primera página de Google para búsquedas locales.',
      'Centralización de la información, reduciendo las preguntas repetitivas por teléfono.'
    ],
    services: ['Diseño Web', 'Desarrollo de Landing Page', 'SEO Local', 'Integración con Google Maps y WhatsApp']
  },
  {
    slug: 'clickmail-email-marketing',
    name: 'ClickMail',
    url: 'https://click-mail.netlify.app/',
    img: '/clickmail.png',
    shortDesc: 'Plataforma intuitiva para la automatización de campañas de email marketing.',
    client: 'Startup de Marketing Digital',
    clientIndustry: 'SaaS (Software as a Service)',
    challenge: 'Las herramientas de email marketing existentes eran demasiado complejas y costosas para pequeños negocios y freelancers. El cliente quería crear una alternativa simple, asequible y potente, enfocada en la facilidad de uso.',
    solution: 'Desarrollamos una aplicación web completa con un dashboard limpio para gestionar listas de suscriptores, crear campañas con un editor de arrastrar y soltar, y ver analíticas en tiempo real. Se implementó una infraestructura escalable para manejar el envío de miles de correos de forma eficiente.',
    results: [
      'Lanzamiento exitoso de un MVP (Producto Mínimo Viable) en 4 meses.',
      'Adquisición de los primeros 100 usuarios de pago en el primer mes.',
      'Tasa de apertura de correos 15% superior a la media del sector.'
    ],
    services: ['Desarrollo Full-Stack', 'Arquitectura en la Nube', 'Diseño de Base de Datos', 'Integración de API de Correo']
  },
  {
    slug: 'fitflow-app-gimnasio',
    name: 'FitFlow',
    url: 'https://fitflow-u5cv.onrender.com/',
    img: '/fitflow.png',
    shortDesc: 'Aplicación web para gimnasio con rutinas personalizadas y seguimiento de progreso.',
    client: 'Gimnasio "FitFlow"',
    clientIndustry: 'Fitness y Bienestar',
    challenge: 'El gimnasio quería ofrecer un valor añadido a sus miembros y mejorar la retención. Los entrenadores creaban rutinas en papel, que se perdían fácilmente, y no había forma de seguir el progreso del cliente de forma digital.',
    solution: 'Creamos una Progressive Web App (PWA) para que los miembros pudieran acceder a sus rutinas desde cualquier dispositivo. Los entrenadores pueden asignar y modificar rutinas desde un panel de administración, y los usuarios pueden registrar sus pesos y ver gráficos de su progreso.',
    results: [
      'Aumento del 20% en la tasa de retención de miembros después de 6 meses.',
      'Mejora del 90% en la satisfacción del cliente con el entrenamiento personalizado.',
      'Los entrenadores ahorran un promedio de 3 horas a la semana.'
    ],
    services: ['Desarrollo de PWA', 'Panel de Administración', 'Visualización de Datos', 'Autenticación de Usuarios']
  }
];