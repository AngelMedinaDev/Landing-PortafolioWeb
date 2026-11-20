import type { ImageMetadata } from 'astro';
import synaDesktop from '../assets/projects/syna-desktop.png';
import synaMobile from '../assets/projects/syna-mobile.jpeg';
import dentistaDesktop from '../assets/projects/dentista-desktop.png';
import dentistaMobile from '../assets/projects/dentista-mobile.jpeg';
import duratechoDesktop from '../assets/projects/duratecho-desktop.png';
import duratechoMobile from '../assets/projects/duratecho-mobile.jpeg';

export const CONTACT = {
	brandFirst: 'ANGEL',
	brandSecond: 'MEDINA',
	fullName: 'Ángel Medina',
	siteUrl: 'https://angelmedinarivas.dev',
	email: 'hola@angelmedinarivas.dev',
	whatsappNumber: '5218122091544',
	whatsappDisplay: '+52 81 2209 1544',
	locationLabel: 'Monterrey, Nuevo León · Servicio remoto en México',
	whatsappMessage:
		'Hola Ángel, vengo de tu sitio web y me interesa cotizar una página para mi negocio. Mi giro es:',
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
	const text = customMessage ?? CONTACT.whatsappMessage;
	return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getMailtoUrl(): string {
	const subject = 'Cotización de sitio web o landing page';
	const body =
		'Hola Ángel, vengo de tu sitio web y me interesa cotizar una página para mi negocio. Mi giro es: ';
	return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const NAV_LINKS = [
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Proceso', href: '#proceso' },
	{ label: 'Preguntas', href: '#preguntas' },
] as const;

export interface TrustPillar {
	title: string;
	description: string;
	icon: 'briefcase' | 'code' | 'speed';
}

export const TRUST_PILLARS: TrustPillar[] = [
	{
		title: 'Experiencia en desarrollo profesional',
		description:
			'Trabajo con trato directo, metodología ordenada y enfoque práctico orientado a objetivos comerciales.',
		icon: 'briefcase',
	},
	{
		title: 'Desarrollo 100% a la medida',
		description:
			'Sin plantillas sobrecargadas ni diseños genéricos: cada sección responde a cómo compra tu cliente.',
		icon: 'code',
	},
	{
		title: 'Enfoque móvil y carga rápida',
		description:
			'Sitios ligeros y claros desde el celular para no perder visitas provenientes de Google, redes o anuncios.',
		icon: 'speed',
	},
];

export interface ProjectItem {
	id: string;
	name: string;
	badge: string;
	badgeTone: 'emerald' | 'blue' | 'amber';
	sector: string;
	objective: string;
	description: string;
	highlights: string[];
	url: string;
	ctaLabel: string;
	desktopImage: ImageMetadata;
	desktopAlt: string;
	mobileImage: ImageMetadata;
	mobileAlt: string;
}

export const PROJECTS: ProjectItem[] = [
	{
		id: 'syna',
		name: 'Clínica SYNA',
		badge: 'Proyecto en producción · Salud',
		badgeTone: 'emerald',
		sector: 'Psicología y salud',
		objective: 'Transmitir confianza clínica y facilitar el contacto de nuevos pacientes.',
		description:
			'Sitio web publicado para una clínica de psicología, estructurado para explicar sus servicios con claridad y llevar al visitante hacia canales directos de atención.',
		highlights: [
			'Diseño sereno y claro adaptado a dispositivos móviles',
			'Presentación ordenada de servicios y enfoque profesional',
			'Rutas directas de contacto para agendar orientación',
		],
		url: 'https://www.syna.com.mx/',
		ctaLabel: 'Ver sitio en vivo',
		desktopImage: synaDesktop,
		desktopAlt: 'Vista de escritorio del sitio web desarrollado para Clínica SYNA',
		mobileImage: synaMobile,
		mobileAlt: 'Vista móvil del sitio web desarrollado para Clínica SYNA',
	},
	{
		id: 'dentista',
		name: 'Sector Dental',
		badge: 'Propuesta funcional · Sector Dental',
		badgeTone: 'blue',
		sector: 'Clínicas y consultorios dentales',
		objective: 'Convertir visitas de anuncios o búsquedas locales en citas por WhatsApp.',
		description:
			'Propuesta interactiva diseñada para consultorios odontológicos que buscan presentar tratamientos de forma clara y reducir la fricción al agendar consulta.',
		highlights: [
			'Arquitectura persuasiva orientada a solicitud de citas',
			'Llamados a la acción visibles en toda la navegación móvil',
			'Estructura pensada para campañas locales en Google o Meta',
		],
		url: 'https://landing-dentista-nine.vercel.app/',
		ctaLabel: 'Explorar propuesta funcional',
		desktopImage: dentistaDesktop,
		desktopAlt: 'Vista de escritorio de la propuesta funcional de landing page para Sector Dental',
		mobileImage: dentistaMobile,
		mobileAlt: 'Vista móvil de la propuesta funcional de landing page para Sector Dental',
	},
	{
		id: 'duratecho',
		name: 'DuraTecho',
		badge: 'Proyecto desarrollado · Pendiente de aprobación del cliente',
		badgeTone: 'amber',
		sector: 'Construcción e impermeabilización',
		objective: 'Proyectar solidez técnica y captar solicitudes rápidas de cotización.',
		description:
			'Landing page desarrollada para el giro de impermeabilización y soluciones industriales, actualmente en etapa de revisión previa a su aprobación y publicación final.',
		highlights: [
			'Identidad visual de alto contraste enfocada al sector industrial',
			'Flujo claro para cotizar trabajos desde el teléfono',
			'Organización orientada a servicios especializados y cobertura',
		],
		url: 'https://landing-duratecho.vercel.app/',
		ctaLabel: 'Ver versión desarrollada',
		desktopImage: duratechoDesktop,
		desktopAlt: 'Vista de escritorio de la landing page desarrollada para DuraTecho',
		mobileImage: duratechoMobile,
		mobileAlt: 'Vista móvil de la landing page desarrollada para DuraTecho',
	},
];

export interface ServiceItem {
	id: string;
	eyebrow: string;
	title: string;
	idealFor: string;
	description: string;
	benefits: string[];
	whatsappPrompt: string;
	ctaLabel: string;
	featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
	{
		id: 'landing-page',
		eyebrow: 'Enfoque en campañas y contacto directo',
		title: 'Landing Page de Conversión',
		idealFor: 'Ideal para consultorios, servicios especializados y negocios que anuncian en Google o redes sociales.',
		description:
			'Una página enfocada en un objetivo concreto: presentar tu servicio con claridad, resolver dudas clave y llevar al prospecto directamente a cotizar o agendar por WhatsApp.',
		benefits: [
			'Estructura comercial enfocada en un servicio u oferta principal',
			'Llamados a la acción claros para citas o cotizaciones',
			'Lista para recibir tráfico de campañas de anuncios y redes',
		],
		whatsappPrompt:
			'Hola Ángel, vengo de tu sitio web y me interesa cotizar una Landing Page de Conversión para mi negocio. Mi giro es:',
		ctaLabel: 'Cotizar Landing Page',
		featured: true,
	},
	{
		id: 'sitio-web-empresarial',
		eyebrow: 'Presencia sólida y posicionamiento',
		title: 'Sitio Web Profesional para Empresas',
		idealFor: 'Ideal para clínicas, constructoras, empresas de impermeabilización y PyMEs con varios servicios.',
		description:
			'Un sitio web completo y a la medida para organizar tus líneas de servicio, respaldar la seriedad de tu empresa y facilitar que te encuentren y contacten en línea.',
		benefits: [
			'Organización clara por servicios, especialidad y cobertura',
			'Imagen profesional consistente en escritorio y celular',
			'Base preparada para posicionamiento local en buscadores',
		],
		whatsappPrompt:
			'Hola Ángel, vengo de tu sitio web y me interesa cotizar un Sitio Web Profesional para mi empresa. Mi giro es:',
		ctaLabel: 'Cotizar Sitio Web',
	},
];

export const SERVICE_INCLUDES: string[] = [
	'Diseño responsive adaptado a celular, tablet y escritorio',
	'Estructura comercial redactada y ordenada para facilitar el contacto',
	'Integración de WhatsApp y formularios cuando el proyecto lo requiera',
	'SEO técnico base (títulos, descripciones, encabezados y metadatos)',
	'Optimización de rendimiento e imágenes para una carga ágil',
	'Conexión y configuración con tu dominio propio',
];

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
	{
		number: '01',
		title: 'Diagnóstico y enfoque comercial',
		description:
			'Revisamos tu giro, tus servicios principales y el objetivo de la página (agendar citas, recibir cotizaciones o generar llamadas) para definir una estructura clara antes de diseñar.',
	},
	{
		number: '02',
		title: 'Diseño y desarrollo a medida',
		description:
			'Construimos tu sitio desde cero con código limpio, optimizado para celular y velocidad de carga. Revisamos avances contigo para validar textos, diseño y detalles clave.',
	},
	{
		number: '03',
		title: 'Publicación y entrega',
		description:
			'Conectamos tu dominio, verificamos enlaces, rendimiento y SEO base, y dejamos tu página publicada y lista para compartir con tus clientes o enlazar a tus campañas.',
	},
];

export interface FaqItem {
	question: string;
	answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
	{
		question: '¿Trabajas solo en Monterrey o también en otras ciudades de México?',
		answer:
			'Mi base está en Monterrey, Nuevo León, y trabajo de forma remota con negocios y profesionales en todo México. Todo el proceso —desde el diagnóstico hasta las revisiones y la entrega— se coordina de forma ágil por WhatsApp, videollamada o correo.',
	},
	{
		question: '¿Qué información necesito tener lista para comenzar?',
		answer:
			'Solo necesitas tener claros los servicios que ofreces, tu zona de atención, tus datos de contacto y, si cuentas con ellos, tu logotipo y fotografías reales de tu negocio. Si aún no tienes los textos definidos, te ayudo a estructurarlos durante el diagnóstico.',
	},
	{
		question: '¿Cómo funciona el dominio y el hosting?',
		answer:
			'El dominio siempre queda registrado a nombre de tu negocio para que tengas control total de tu marca. Durante el proyecto te oriento sobre la compra o uso de tu dominio actual y me encargo de conectarlo y configurar la publicación del sitio.',
	},
	{
		question: '¿Qué diferencia hay frente a una página hecha con plantilla?',
		answer:
			'Una plantilla genérica suele cargar código innecesario, verse igual a la competencia y dificultar la navegación en celular. Un desarrollo a medida se construye únicamente con lo que tu negocio necesita: carga más rápido, comunica mejor tu oferta y guía al visitante directo a contactarte.',
	},
	{
		question: '¿Cuál es el plazo de entrega y cómo se cotiza?',
		answer:
			'Tanto la inversión como el tiempo de entrega dependen del alcance del proyecto (por ejemplo, una landing page puntual frente a un sitio web con varias secciones o formularios). Tras una breve conversación por WhatsApp para conocer tu giro y requerimientos, te comparto una propuesta clara con alcance, costo y calendario antes de iniciar.',
	},
];
