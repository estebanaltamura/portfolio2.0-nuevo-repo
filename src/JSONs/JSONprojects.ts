export interface IProjects {
  id: string;
  name: string;
  period?: string;
  role?: string;
  details: (
    | string
    | {
        type: 'link';
        href: string;
        text: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
        textAlign: 'left' | 'center' | 'right';
      }
    | {
        type: 'image' | 'video';
        src: string;
        mobileVersionSrc?: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
        imageDescription: string;
        widthImageDescription?: string;
      }
    | {
        type: 'carousel';
        desktopSrcImages: string[];
        mobileSrcImages: string[];
        greaterThan600Mode: '100%' | 'full width' | 'customWidth';
        mobileMode: '100%' | 'full width' | 'customWidth';
        customWidthgreaterThan600Mode?: string;
        customWidthMobile?: string;
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'stack';
        stack: string[];
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'linksToWebsiteAndGithub';
        links: {
          website?: string;
          instagram?: string;
          github?: string;
        };
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'title';
        title: string;
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'title2';
        title: string;
        marginBottom: number;
        marginTop: number;
      }
  )[];
}

export interface IExperiences {
  id: string;
  name: string;
  period: string;
  role: string;
  summary?: {
    stack: string[];
    text: string;
    projectId: string;
  };
  details: (
    | string
    | {
        type: 'link';
        href: string;
        text: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'image' | 'video';
        src: string;
        mobileVersionSrc?: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
        imageDescription: string;
        widthImageDescription?: string;
      }
    | {
        type: 'carousel';
        desktopSrcImages: string[];
        mobileSrcImages: string[];
        greaterThan600Mode: '100%' | 'full width' | 'customWidth';
        mobileMode: '100%' | 'full width' | 'customWidth';
        customWidthgreaterThan600Mode?: string;
        customWidthMobile?: string;
        marginBottom: number;
        marginTop: number;
      }
  )[];
}

interface IStack {
  iconSrc: string;
  doubleWidth?: boolean;
}

{
  /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

export const experiences: IExperiences[] = [
  {
    id: 'koi-ventures',
    name: 'Koi ventures',
    period: '2023 - Actualidad',
    role: 'Referente tecnológico',
    summary: {
      projectId: 'buenos-negocios',
      stack: [
        'Next',
        'React',
        'Typescript',
        'Javascript',
        'Material UI',
        'Firestore',
        'HTML',
        'CSS',
      ],
      text: 'Desarrollamos en next con Typescript, Material UI como librería de diseño y servicios de Firebase para db, autenticación y hosting.',
    },
    details: [
      '<b>Situación</b>',
      'Koi ventures es una incubadora de negocios y software factory de Argentina. Trabajo desde agosto de 2023 para el sector software factory.',
      '<b>Tarea</b>',
      ' Me desempeño como referente tecnológico, líder de equipo, nexo con el cliente y como principal desarrollador del proyecto.',

      '<b>Acción</b>',
      'Desde mi entrada a la empresa estuve trabajando en un proyecto para uno de los principales bancos de Argentina, el cual es una plataforma para que empresas puedan contactarse con otras empresas para generar relaciones comerciales en base a sus necesidades.',
      'Las tecnologías aplicadas son Next, Typescript, Node y Firebase (autenticación, base de datos no relacional y hosting).',

      '<b>Resultado</b>',
      'El primer hito de Buenos Negocios fue la entrega en tiempo y forma del MVP en marzo de 2024. Posteriormente, en agosto de 2024, cumplimos con el lanzamiento de la versión final de producción, que fue presentada al público en un evento presencial organizado por Banco Galicia. Desde entonces, hemos continuado trabajando en nuevas funcionalidades, como la implementación de un asistente con inteligencia artificial, para seguir potenciando el éxito de la plataforma.',
    ],
  },
  {
    id: 'actas-italianas-express',
    name: 'Actas Italianas Express',
    period: '2022 - Actualidad',
    role: 'Desarrollador Front-End & Founder',
    summary: {
      projectId: 'actas-italianas-express',
      stack: [
        'React',
        'Typescript',
        'Javascript',
        'Material UI',
        'Firestore',
        'HTML',
        'CSS',
      ],
      text: 'Desarrollé la web en React, Material UI como librería de diseño y Firestore como base de datos no relacional (Firebase - Google).',
    },
    details: [
      '<b>Situación</b>',
      'La realidad de los descendientes de italianos, que quieren obtener la ciudadanía italiana en Argentina, es realmente complicada. Las dos principales dificultades son la falta de turnos en los consulados y la casi nula respuesta de las comunas italianas ante los pedidos de actas por parte de los interesados.',
      'La idea de Actas italianas express surge del deseo de ayudar a esas personas que se encuentran en proceso de armado de la carpeta con la información de cada antepasado y de la propia persona. Mi objetivo es ayudar en el punto más complicado: la obtención de las actas originales del familiar italiano que migró en el pasado a Argentina',

      '<b>Tarea</b>',
      'Mi rol principal es desarrollar y mantener la plataforma online, gestionar los servicios de back office para la administración de leads y desarrollar proveedores de servicios ad-hoc en Italia.',

      '<b>Acción</b>',
      'Implementé una plataforma online robusta que facilita la solicitud y seguimiento de las actas italianas. Además desarrollé servicios de back office eficientes para la administración de leads y establecí relaciones estratégicas con proveedores de servicios en Italia, mejorando así la gestión y el procesamiento de documentos.',

      '<b>Resultado</b>',
      'Logramos una mayor tasa de respuesta por parte de las comunas italianas y una velocidad de respuesta superior en comparación con otros servicios similares. Esto resultó en un aumento significativo de la satisfacción del usuario con el servicio y una expansión de nuestra base de clientes.',
    ],
  },
  {
    id: 'plumarii',
    name: 'Plumarii',
    period: '2020 - 2022',
    role: 'Desarrollador Front-End & Co-Founder',
    summary: {
      projectId: 'plumarii',
      stack: ['Javascript', 'HTML', 'CSS'],
      text: 'En 2021 abrimos nuestra tienda en Shopify. Customicé con Javascript, HTML y CSS el carro de compras, checkout, botones, cards y todo tipo de features.',
    },
    details: [
      '<b>Situación</b>',
      'Junto con mi socia de Lonely, un proyecto de moda en Argentina, pensamos en la posibilidad de armar un emprendimiento de indumentaria en un mercado más sólido que el argentino.',
      'Por el tamaño del mercado, los tipos de sociedades disponibles que permiten la apertura simple y a distancia y por las características de la logística tecnologizada e integrada a nivel nacional y económica, elegimos Estados Unidos.',
      '<b>Tarea</b>',
      'Mi rol fue desarrollar features para la tienda online, mantenerla, gestión de marketing digital, implementación y configuración del depósito automatizado y la apertura y mantenimiento de las estructuras jurídicas de la empresa',
      '<b>Acción </b>',
      'Nuestra tienda online era una tienda de Shopify. Ningún template tenía todo lo que necesitabamos y es por eso que customicé la tienda online de forma permanente. Carrito, checkout, distancias, botones, cards y todo tipo de features.',
      'Me ocupé de las campañas por Facebook Ads en la plataforma Instagram. Iteré incontables pruebas A/B mejorando los resultados después de cada nuevo testeo.',
      'Realicé un research y definí la empresa en la cual gestioné la implementación, configuración e integración de nuestra tienda con el depósito automatizado.',
      'Abrí y mantuve estrucuturas jurídicas, cuentas bancarias. Además fuí el resposable de la contabilidad y de la relación con hacienda federal, estatal y con todos los organismos involucrados.',
      '<b>Resultado</b>',
      'Conseguimos un costo por adquisición al nivel del mercado americano, lo cual es todo un logro en sí mismo.',
      'Desarrollamos proveedores fuera del país.',
      'Pudimos adaptarnos a las regulaciones locales en cuanto a impuestos, normas sobre etiquetado, tallas y cualquier diferencia en el funcionamiento de los negocios que distingue a Estados Unidos de nuestro país.',
      'Supimos gestionar a distancia todo tipo de procesos logísticos, personalización de prendas y de etiquetas.',
      'Logramos que la comunidad de influencers valore y apoye nuestro proyecto.',
    ],
  },

  {
    id: 'lonely',
    name: 'Lonely',
    period: '2016 - 2022',
    role: 'Desarrollador Front-End, Co-Founder',
    summary: {
      projectId: 'lonely',
      stack: ['React', 'Javascript', 'Node', 'HTML', 'CSS'],
      text: 'En 2018 desarrollé en Javascript la tienda online con Mercadopago integrado (medio de pago). En 2019 el sitio fue migrado a React.',
    },
    details: [
      '<b>Situación</b>',
      'Para el 2016 las redes sociales habían mutado su finalidad desde "estar en contacto con familia y amigos" a un uso más impersonal y aspiracional, centrado en el consumo de contenidos relacionados con el estilo de vida y las celebridades.',
      'Por otro lado para esa época en Argentina empezó a cobrar relevancia el comercio online.',
      'Otro factor que motorizó este proyecto fue realizarlo en sociedad. Hacía años que con una amiga queríamos tener un proyecto juntos y creímos que esta era nuestra oportunidad.',

      '<b>Tarea</b>',
      'Mi rol fue desarrollar la tienda online, marketing digital, gestionar shoowrooms y cuestiones de estructura jurídica-contable.',

      '<b>Acción</b>',
      'Desarrollé la tienda online en React con Mercadopago integrado (medio de pago). Esa tienda en conjunto con el marketing digital que implementé nos permitió escalar nuestro negocio.',
      'También integré la cuenta de Instagram con un catálogo de Facebook y un plugin que nos permitió etiquetar las prendas en las publicaciones. Este plugin facilitó que los usuarios pudieran comprar una prenda específica directamente desde una publicación, redirigiéndolos a la tienda a través de un enlace ubicado sobre la imagen, específicamente sobre la prenda.',
      'Me dediqué tambien al mantenimiento de la contabilidad y de la relación de nuestro proyecto con hacienda y organismos.',
      'Coordiné la implementación y las contrataciones relacionadas a los showrooms que hemos abierto.',
      'En pandemia tuvimos que centralizar nuestra operación, abriendo un centro de distribución único, el cual en parte implementé.',
      '<b>Resultado</b>',
      'Con los años logramos tener un muy buen nivel de ventas, un posicionamiento de mercado muy valorado y una cuenta de Instagram de más de 350 mil seguidores.',
    ],
  },
  {
    id: 'infinity-tech',
    name: 'Infinity tech',
    period: '2010 - 2016',
    role: 'Owner',
    details: [
      '<b>Situación</b>',
      'Luego de haber trabajado como vendedor de productos menores en Mercadolibre y dado que el mercado Argentino era muy pobre en la oferta de productos tecnológicos para ese entonces, concluí que era el momento justo para emprender un proyecto como Infinity tech. Infinity tech buscó brindar una oferta sostenida de productos importados de calidad, a buenos precios y con un satisfacción del cliente excelente.',

      '<b>Tarea</b>',
      'Mi rol implicaba investigar productos interesantes para importar, negociar con proveedores, gestionar la logística, crear y organizar listados de productos publicados en Mercadolibre, atender a los clientes y coordinar garantías.',

      '<b>Acción</b>',
      'Mis acciones fueron investigar sobre tendencias analizando la evolución de las ventas de otros usuarios de Mercadolibre sobre productos que a priori resultaban interesantes. Aquellos que eran atractivos para los usuarios, se convertían en nuevos productos para importar.',
      'También negociaba cantidades y precios con exportadores de Estados Unidos. En general los productos que más se importaron fueron notebooks de la marca Dell.',
      'A nivel local creaba y gestionaba las publicaciones de los productos, respondía preguntas, empacaba los envíos, los enviaba y coordinaba las garantías.',

      '<b>Resultado</b>',
      'Durante el tiempo que duró este proyecto, tuve la satisfacción de haber podido competir y ganar contra usuarios con mayores ventas que yo y de haber ofrecido productos de las mejores marcas a buenos precios con una satisfacción del cliente impecable.',
    ],
  },
  {
    id: 'telefonica-de-argentina',
    name: 'Telefónica de Argentina',
    period: '2008 - 2009',
    role: 'Responsable de registros',
    details: [
      '<b>Situación</b>',
      'Telefónica de Argentina necesitaba una solución a la problemática del registro y control de órdenes de trabajo realizados por instaladores de ADSL y líneas telefónicas. Se requería un control efectivo para asegurar que el trabajo realizado por los instaladores coincidiera con lo registrado en el sistema, para que luego la casa central pudiera efectuar el pago correspondiente.',
      '<b>Tarea</b>',
      'Mi rol fue ingresar y controlar órdenes de trabajo, coordinar con instaladores y ser el nexo para cobros y plazos con casa central.',

      '<b>Acción</b>',
      'Ingresé todas las órdenes de trabajo en la base de datos, revisé y asigné las órdenes a los técnicos instaladores correspondientes, mantuve una comunicación constante con los técnicos y otros departamentos para asegurar el progreso de las instalaciones y negocié con casa central el pago de las órdenes de trabajo realizadas.',

      '<b>Resultado</b>',
      'Esta gestión resultó en una mejora significativa de las órdenes cobradas y en la depuración de cualquier anomalía en la carga de órdenes de trabajo.',
    ],
  },
];

{
  /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

export const projects: IProjects[] = [
  {
    id: 'buenos-negocios',
    name: 'Buenos negocios',
    period: '2023 - Actualidad',
    role: 'Referente tecnologico',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: [
          'Next',
          'React',
          'Typescript',
          'Material UI',
          'Firestore',
          'Node',
          'OpenAI'
        ],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://buenosnegocios.ar/',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Buenos negocios es una plataforma online de uno de los principales bancos de Argentina (Banco Galicia) donde las empresas pueden conectar sus necesidades y propuestas con las de otras empresas. Es este proyecto me desempeñé como referente tecnológico, líder del equipo, nexo con el cliente y principal desarrollador front end.',
      'Las tecnologías aplicadas fueron Next, Typescript, Node y Firebase (autenticación, base de datos no relacional y hosting).',
      'La experiencia comenzó cuando Galicia, junto con la consultora DMO, definió los lineamientos, bocetos y conceptos iniciales del MVP. En esa etapa, junto con la persona comercial de Koi, asistíamos a reuniones presenciales en sus oficinas para organizar el kick off y planificar los primeros sprints. Mi rol en esas reuniones fue ser nexo entre negocio y Koi ventures, aportando visión técnica desde el inicio.',
      
      {
        type: 'carousel',
        greaterThan600Mode: '100%',
        mobileMode: '100%',
        desktopSrcImages: [
          '/images/buenosNegocios/Desktop/home1BuenosNegocios.jpg',
          '/images/buenosNegocios/Desktop/home2BuenosNegocios.jpg',
          '/images/buenosNegocios/Desktop/generacionIa.jpg',
          '/images/buenosNegocios/Desktop/chat.jpg',
          '/images/buenosNegocios/Desktop/homeEmpresas.jpg',
          '/images/buenosNegocios/Desktop/homeOportunidades.jpg',
          '/images/buenosNegocios/Desktop/homeEventos.jpg',
          '/images/buenosNegocios/Desktop/EdicionEmpresa.jpg',
        ],
        mobileSrcImages: [
          '/images/buenosNegocios/Desktop/home1BuenosNegocios.jpg',
          '/images/buenosNegocios/Desktop/home2BuenosNegocios.jpg',
          '/images/buenosNegocios/Desktop/generacionIa.jpg',
          '/images/buenosNegocios/Desktop/chat.jpg',
          '/images/buenosNegocios/Desktop/homeEmpresas.jpg',
          '/images/buenosNegocios/Desktop/homeOportunidades.jpg',
          '/images/buenosNegocios/Desktop/homeEventos.jpg',
          '/images/buenosNegocios/Desktop/EdicionEmpresa.jpg',
        ],
        marginBottom: 50,
        marginTop: 70,
      },
      'Tras esos encuentros, dedicamos 3 meses intensivos a la creación y entrega del MVP. En esa etapa fuimos tres desarrolladores hasta marzo de 2024, cuando se sumó un diseñador UI para complementar el equipo. La primera entrega fue un éxito: el MVP permitió que Banco Galicia testease la plataforma con usuarios finales, logrando recolectar feedback valioso. Estos insumos impulsaron mejoras y ajustes que sentaron una base más sólida para la siguiente versión.',
      'Con las lecciones aprendidas, abordamos una segunda fase de 5 meses, enfocándonos en la versión final de producción. Esta fue lanzada al público general en agosto de 2024. El banco organizó un evento presencial para el lanzamiento, acompañado por campañas de email a su enorme base de clientes, lo que generó un gran impacto inicial.',
      {
        type: 'video',
        src: '/videos/chat/chat.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'Chat Buenos negocios',
        widthImageDescription: '340px',
      },
      'Durante el período comprendido entre agosto y fin de año, el equipo continuó agregando nuevas funcionalidades para potenciar la plataforma. Una de las mejoras más notables fue la incorporación de un asistente con inteligencia artificial, que facilitó la generación de publicaciones y maximizó las oportunidades comerciales entre empresas.',
      {
        type: 'video',
        src: '/videos/asistenteIa/version2.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'Generación de oportunidades con IA',
        widthImageDescription: '300px',
      },
      'A lo largo de todo el proyecto, mi labor se centró en combinar el entendimiento de las necesidades del negocio con una ejecución técnica precisa y una comunicación fluida con el cliente. Este proceso, que inició con reuniones presenciales y bocetos, evolucionó hasta una plataforma robusta y en pleno funcionamiento, uniendo la visión de Banco Galicia, la consultora DMO y el equipo de Koi Ventures. El resultado final es una solución sólida, dinámica y con un potencial de crecimiento continuo.',
      
      
    ],
  },
  {
    id: 'actas-italianas-express',
    name: 'Actas Italianas Express',
    period: '2022 - Actualidad',
    role: 'Desarrollador Front-end & Founder',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: ['React', 'Typescript', 'HTML', 'CSS', 'Firestore'],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://actasitalianasexpress.online/',
          github: 'https://github.com/estebanaltamura/actas-italianas-express',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Soy founder de Actas italianas express, un servicio de gestión rápida de actas italianas necesarias para la tramitación de la ciudanía italiana por parte de nuestros clientes.',
      'Nuestro servicio busca y gestiona documentación en Italia, aumentando la tasa y velocidad de respuesta de las comunas.',
      'Mis roles son principalmente el desarrollo y mantenimiento de la plataforma online, servicios back office para la administración de leads y desarrollo de provedores de servicios ad-hoc en Italia.',
      'La página y los servicios de back office fueron desarollados en React, Typescript y se usó Firebase como motor de base de datos no relacional.',

      {
        type: 'carousel',
        greaterThan600Mode: '100%',
        mobileMode: '100%',
        desktopSrcImages: [
          '/images/actasItalianasExpress/desktop/actasHomeDesktop.jpg',
          '/images/actasItalianasExpress/desktop/actasHome2Desktop.jpg',
          '/images/actasItalianasExpress/desktop/actasHome3Desktop.jpg',
          '/images/actasItalianasExpress/desktop/actasFormDesktop.jpg',
        ],
        mobileSrcImages: [
          '/images/actasItalianasExpress/mobile/actasHomeMobile.jpg',
          '/images/actasItalianasExpress/mobile/actasHome2Mobile.jpg',
          '/images/actasItalianasExpress/mobile/actasHome3Mobile.jpg',
          '/images/actasItalianasExpress/mobile/actasFormMobile.jpg',
        ],
        marginBottom: 0,

        marginTop: 50,
      },
    ],
  },
  {
    id: 'plumarii',
    name: 'Plumarii',
    period: '2020 - 2022',
    role: 'Desarrollador Front-End & Co-founder',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: ['Javascript', 'HTMl', 'CSS'],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          instagram: 'https://instagram.com/plumariiok/',
        },
        marginBottom: 0,
        marginTop: 0,
      },

      '<b>2020</b>',
      '<b>Comienzos</b>',
      'Junto con mi socia de Lonely (un proyecto de moda en Argentina de 2016 a 2022) pensamos en la posibilidad de hacer un emprendimiento de indumentaria en un mercado más sólido que el argentino.',
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: '',
      },

      'Por el tamaño del mercado, los tipos de sociedades disponibles que permiten la apertura simple y a distancia, y por las características de la logística tecnologizada e integrada a nivel nacional y económica, elegimos Estados Unidos.',

      'En esta etapa generamos un plan sobre cómo, por etapas, íbamos a validar y desarrollar cada instancia hasta el lanzamiento sin descuidar nuestro emprendimiento local.',
      {
        type: 'image',
        src: '/images/plumarii/plumariiLabel.jpg',
        width: '100%',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Etiqueta de Plumarii',
      },
      'Nuestra idea inicial para el producto principal de nuestra futura cartera era fabricar camisetas bordadas con diseños muy elaborados. A pesar de los desafíos impuestos por la pandemia, pudimos avanzar mucho más de lo que esperábamos.',
      '<b>Diseño y fabricación del stock inicial</b>',
      'A partir de la red de proveedores de Lonely, el proyecto de indumentaria mencionado anteriormente, logramos encontrar los proveedores correctos para la fabricación de camisetas y su posterior bordado.',
      {
        type: 'image',
        src: '/images/plumarii/embroideryProccess.jpg',
        width: '100%',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Proceso de bordado',
      },
      'Ese año conseguimos fabricar un stock inicial de 22 modelos de camisetas bordadas. Cada diseño fue muy trabajado por que quisimos generar un producto diferente a todos los demás que se encontraban en el mercado y que adicionalmente fuese moderno y sustentable.',
      'Diseñamos un hermoso empaque completamente biodegradable y fabricado a partir del maíz.',

      {
        type: 'video',
        src: '/videos/plumarii/plumariiPackages.mp4',
        height: '650px',
        marginBottom: 40,
        marginTop: 50,
        imageDescription: 'Packaging biodegradable a base de maiz',
        widthImageDescription: '300px',
      },
      '<b>2021</b>',
      '<b>Contenido</b>',
      'Con la liberación de las restricciones para la circulación y la actividad impuestas por la pandemia, nos propusimos generar contenido que alimentara nuestras futuras redes y tienda. Hicimos cuatro sesiones de fotos: estudio, exteriores y en dos pisos diferentes.',
      {
        type: 'image',
        src: '/images/plumarii/gridContent.jpg',
        width: '100%',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Grilla outfits Plumarii',
      },

      {
        type: 'video',
        src: '/videos/plumarii/content.mp4',
        height: '650px',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Reel Plumarii',
        widthImageDescription: '300px',
      },

      '<b>Redes Sociales</b>',
      'Ya con el contenido y las decisiones sobre la imagen de marca definidas, empezamos a armar la cuenta de Instagram.',
      {
        type: 'link',
        href: 'https://instagram.com/plumariiok/',
        text: 'Link al instagram de Plumarii',
        marginBottom: 0,
        marginTop: 40,
        textAlign: 'center',
      },
      {
        type: 'image',
        src: '/images/plumarii/instagram.jpg',
        mobileVersionSrc: '/images/plumarii/instagramMobile.jpg',
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        imageDescription: 'Instagram de Plumarii',
      },
      '<b>Depósito automatizado</b>',
      'Como condición previa para que nuestro emprendimiento fuera factible, necesitábamos un depósito automatizado que despachara paquetes a precios competitivos a todo el país. Mediante un plugin integramos su sistema con nuestra tienda online.',
      'Con configuraciones previas cada vez que se realizara una venta, el depósito despacharía de forma automática la venta en un máximo de veinticuatro horas sin requerir autorización adicional por cada venta.',
      {
        type: 'image',
        src: '/images/plumarii/fulfillmentServices.png',
        width: '100%',
        marginBottom: 10,
        marginTop: 50,
        imageDescription: 'Empresas de logística automatizada',
        widthImageDescription: '100%',
      },
      '<b>Viaje</b>',

      'En septiembre de 2021 realizamos un viaje de veinte días a Miami. En ese viaje pudimos visitar el depósito, abrir cuentas bancarias corporativas, solucionar temas de la estructura jurídica y conseguir proveedores de hoodies, camisetas, leggings, beanies, medias y también servicios de bordado, customización de prendas y etiquetas.',
      {
        type: 'image',
        src: '/images/plumarii/travelByMiami.jpg',
        width: '100%',
        marginBottom: 10,
        marginTop: 50,
        imageDescription: 'Viaje lleno de aprendizaje y multiples compromisos',
      },
      '<b>Tienda</b>',
      'Luego de regresar del viaje, abrimos una tienda en Shopify. Nuestra empresa, siendo nosotros socios extranjeros, estaba imposibilitada de tener varios medios de pago americanos. La elección de Shopify fue porque ofrecían los principales medios de pago americanos integrados y la posibilidad de agregar el plugin necesario para la integración con el depósito.',
      'Shopify tiene sus propios templates, el problema era que ninguno nos servía realmente por completo. Por eso customicé muchísimo nuestra tienda con HTML, CSS y JavaScript, incluyendo diseño de checkout, botones, hovers, distancias no estéticas en los templates, tamaños de fuentes y muchas cosas más.',
      {
        type: 'image',
        src: '/images/plumarii/ecommerce1.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Tienda Plumarii Home',
      },
      {
        type: 'image',
        src: '/images/plumarii/ecommerce2.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 40,
        imageDescription: 'Tienda Plumarii, beanies and essential collections',
      },
      {
        type: 'image',
        src: '/images/plumarii/ecommerce3.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 40,
        imageDescription: 'Tienda Plumarii, carrito de compras',
      },
      '<b>2022</b>',
      '<b>Marketing digital</b>',
      'A partir del dos de enero de 2022, comenzamos a hacer pruebas de marketing digital. Utilizando la herramienta Business Manager de Facebook, realizamos publicidades en la red Instagram. Probamos todo tipo de contenido, como fotos y videos de modelos posando con nuestra ropa de diversas formas.',
      {
        type: 'image',
        src: '/images/plumarii/vibeAd.jpg',
        width: '365px',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Facebook ads',
      },
      {
        type: 'video',
        src: '/videos/plumarii/camiAd.mp4',
        height: '650px',
        marginBottom: 40,
        marginTop: 40,
        imageDescription: 'Reel Plumarii',
        widthImageDescription: '300px',
      },

      'Uno de nuestros logros fue haber encontrado un tipo de contenido cuyo resultado medido en métricas de la publicidad nos hizo alcanzar los estándares de precio por clic, CTR y costo de adquisición promedio en Estados Unidos.',
      'El mercado americano es súper competitivo, por lo que es muy complicado estar a la altura. Nosotros lo logramos y a nivel profesional, fue uno de nuestros mayores logros. También probamos colaboraciones con influencers americanas, enviándoles productos nuestros a cambio de posteos o stories.',

      '<b>Cierre</b>',
      'A pesar de haber logrado un costo por adquisición al nivel del mercado, teníamos que refinar aún más la propuesta y el marketing digital. Para que el negocio hubiese llegado a buen puerto necesitábamos un año más y financiación.',
      'Por otro lado tendríamos que incrementar el valor del carrito promedio y bajar el costo de adquisición pagado en publicidad. A esto se sumó que mi socia decidió en ese momento que en los próximos meses se mudaría a Barcelona, por lo que decidimos dejar el proyecto en ese punto.',
    ],
  },
  {
    id: 'lonely',
    name: 'Lonely',
    period: '2016 - 2022',
    role: 'Co-founder, finanzas & marketing',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: ['React', 'Javascript', 'HTMl', 'CSS'],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          instagram: 'https://instagram.com/lonely_indumentaria/',
        },
        marginBottom: 0,
        marginTop: 0,
      },

      '<b>2016</b>',
      '<b>Comienzos</b>',
      'Junto con mi socia, una amiga de toda la vida, fundamos nuestro primer emprendimiento en conjunto. Todo empezó como un emprendimiento de garaje, impulsado por una página de Facebook y una cuenta de Instagram, que en ese momento era una red incipiente. Al principio, publicamos outfits y recibimos clientas en el piso de mi socia. No teníamos ecommerce, ni showrooms todavía.',
      '<b>2018</b>',
      '<b>El año del salto cuantitativo y cualitativo</b>',
      'Diseñé e implementé un ecommerce desarrollado en React con Mercado Pago y Mercado Envíos integrados (ambos productos de MercadoLibre, la principal plataforma de ecommerce y cobros de Argentina). ',
      {
        type: 'image',
        src: '/images/lonely/lonelyEcommerce.jpg',
        width: '365px',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Screen de la tienda online',
      },
      'Integré nuestro Instagram con la cuenta de empresa de Facebook, para poder publicitar mediante Facebook Ads en Instagram. ',
      {
        type: 'video',
        src: '/videos/lonely/campanaVestidos.mp4',
        height: '650px',
        marginBottom: 40,
        marginTop: 50,
        imageDescription: 'Campaña publicitaria de vestidos',
        widthImageDescription: '300px',
      },
      'Otro beneficio de la integración con Facebook fue poder utilizar su sistema de catálogo. Gracias a esta integración, en cada publicación de Instagram podíamos etiquetar cada prenda y el outfit completo, llevando cada etiqueta a un artículo específico en nuestra tienda.',

      {
        type: 'image',
        src: '/images/lonely/instagramsTags.jpg',
        width: '365px',
        marginBottom: 35,
        marginTop: 50,
        imageDescription:
          'Ejemplo del uso de plugins para taguear productos utilizando el catálogo de Facebook',
        widthImageDescription: '340px',
      },
      'Abrimos tres showrooms en Buenos Aires y nuestro Instagram pasó 50 mil seguidores a más de 250 mil seguidores.',
      {
        type: 'link',
        href: 'https://instagram.com/lonely_indumentaria/',
        text: 'Ir al instagram de Lonely',
        marginTop: 50,
        marginBottom: 10,
        textAlign: 'center',
      },
      {
        type: 'image',
        src: '/images/lonely/lonelyGrid.jpg',
        mobileVersionSrc: '/images/lonely/lonelyGridMobile.png',
        width: '100%',
        marginBottom: 20,
        marginTop: 0,
        imageDescription: 'Screen del instagram de lonely hoy dia (2024)',
      },

      '<b>2019</b>',
      '<b>Cambio de estrategia de redes sociales</b>',
      'Desarrollamos e implementamos una estrategia diferente en redes sociales que resultó muy exitosa en términos de ventas, posicionamiento y crecimiento de seguidores, llevando la cuenta de 250 mil a 350 mil seguidores. Esta decisión se basó en los resultados de una serie de pruebas A/B y sus conclusiones. El cambio de estrategia incluyó el uso de videos cortos y llamativos para atraer más atención y mejorar el compromiso de los usuarios.',
      {
        type: 'video',

        src: '/videos/lonely/lanzamientoTemporadaInvierno.mp4',
        height: '650px',
        marginBottom: 20,
        marginTop: 55,
        imageDescription: 'Lanzamiento temporada de invierno',
        widthImageDescription: '300px',
      },

      '<b>2020 Pandemia</b>',
      'A comienzos de 2020, el consumo en Argentina estaba cayendo. En marzo, la pandemia nos sorprendió, al igual que al resto del mundo. Teníamos tres showrooms abiertos y empleados a quienes responder, pero para sorpresa de todos, las ventas se dispararon. Pudimos cerrar los showrooms físicos y reabsorber al personal, centralizando todas las operaciones en nuestra ubicación de despacho.',
      {
        type: 'image',
        src: '/images/lonely/lonelyImage.jpg',
        width: '450px',
        marginBottom: 35,
        marginTop: 50,
        imageDescription: 'Campaña publicitaria básicos',
      },

      'A partir de ese año, centralizamos toda nuestra operación, manteniendo únicamente el showroom original.',

      '<b>2022 Cierre</b>',
      'Después de muchos años trabajando juntos en varios emprendimientos, mi socia se fue a vivir a Barcelona. Decidimos que no era lógico continuar a distancia ni que yo siguiera solo. Lonely fue una gran experiencia de aprendizaje. Hasta ese momento, no había tenido un emprendimiento tan exitoso, complejo y con tanto trabajo en equipo.',
    ],
  },
  {
    id: 'encrypted-chat',
    name: 'Encrypted-chat',

    details: [
      {
        type: 'title',
        title: 'Tecnologías',
        marginBottom: 0,
        marginTop: 30,
      },
      {
        type: 'stack',
        stack: [
          'React',
          'Typescript',
          'Material UI',
          'Firestore',
          'Node',
          'AWS',
        ],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://encrypted-chat.xyz/home',
          github: 'https://github.com/estebanaltamura/encrypted-chat-client',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Encrypted Chat es una aplicación diseñada para permitir la comunicación entre usuarios sin necesidad de registrarse. Ofrece cifrado de extremo a extremo y garantiza que el servidor intermediario no almacena ninguna información en su base de datos.',
      'Los mensajes son encriptados con la clave publica compartida por el destinatario del mensaje. Luego, el destinatario del mensaje desencripta el mensaje con su clave privada, asegurando que ni el servidor ni nadie que pueda interceptar la comunicación pueda conocer el contenido del mensaje.',

      {
        type: 'carousel',
        desktopSrcImages: [
          '/images/chat/chat1.jpg',
          '/images/chat/chat2.jpg',
          '/images/chat/chat3.jpg',
          '/images/chat/chat4.jpg',
        ],
        mobileSrcImages: [
          '/images/chat/chat1.jpg',
          '/images/chat/chat2.jpg',
          '/images/chat/chat3.jpg',
          '/images/chat/chat4.jpg',
        ],
        greaterThan600Mode: '100%',
        mobileMode: '100%',
        marginBottom: 10,
        marginTop: 50,
      },
    ],
  },

  {
    id: 'varios',
    name: 'Varios',

    details: [
      {
        type: 'title2',
        title: 'Pandora backpacks',
        marginBottom: 0,
        marginTop: 30,
      },
      {
        type: 'title',
        title: 'Tecnologías',
        marginBottom: 0,
        marginTop: 15,
      },

      {
        type: 'stack',
        stack: [
          'React',
          'Javacript',
          'HTMl',
          'CSS',
          'Firestore',
          'Node',
          'AWS',
        ],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://pandora-backpacks.xyz/home',
          github: 'https://github.com/estebanaltamura/pandora-backpacks',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Pandora backpacks es una plataforma de e-commerce especializada en mochilas, integrada con MercadoPago. Ofrece una experiencia de compra completa con colecciones y un carro de compras.',
      'Se prestó especial atención a los estados de carga de las imágenes y la experiencia de usuario, garantizando una navegación fluida y un proceso de pago seguro y eficiente a través de MercadoPago.',
      {
        type: 'carousel',
        desktopSrcImages: [
          '/images/varios/pandora/desktop/coverDesktopPandora1.jpg',
          '/images/varios/pandora/desktop/coverDesktopPandora2.jpg',
          '/images/varios/pandora/desktop/collectionsDesktopPandora1.jpg',
          '/images/varios/pandora/desktop/collectionsDesktopPandora2.jpg',
          '/images/varios/pandora/desktop/collectionsDesktopPandora3.jpg',
          '/images/varios/pandora/desktop/cartDesktopPandora.jpg',
          '/images/varios/pandora/desktop/paymentProcessDesktopPandora.jpg',
        ],
        mobileSrcImages: [
          '/images/varios/pandora/mobile/coverMobilePandora1.jpg',
          '/images/varios/pandora/mobile/coverMobilePandora2.jpg',
          '/images/varios/pandora/mobile/collectionsMobilePandora1.jpg',
          '/images/varios/pandora/mobile/collectionsMobilePandora2.jpg',
          '/images/varios/pandora/mobile/collectionsMobilePandora3.jpg',
          '/images/varios/pandora/mobile/cartMobilePandora.jpg',
          '/images/varios/pandora/mobile/paymentProcessMobilePandora.jpg',
        ],
        greaterThan600Mode: '100%',
        mobileMode: '100%',
        marginBottom: 10,
        marginTop: 50,
      },

      {
        type: 'title2',
        title: 'Flix finder',
        marginBottom: 0,
        marginTop: 30,
      },

      {
        type: 'title',
        title: 'Tecnologías',
        marginBottom: 0,
        marginTop: 15,
      },

      {
        type: 'stack',
        stack: [
          'React',
          'Javacript',
          'HTMl',
          'CSS',
          'Firestore',
          'Node',
          'AWS',
        ],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://flix-finder.xyz/movies',
          github: 'https://github.com/estebanaltamura/flixfinder',
        },

        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Flix Finder es una plataforma web diseñada para buscar películas y series. Ofrece sinopsis detalladas de cada contenido y un puntaje basado en las valoraciones de la comunidad. Además, permite compartir enlaces específicos de películas o series a través de Twitter y WhatsApp.',
      'La web también permite a los usuarios registrarse para poder marcar contenido como favorito, guardando así sus preferencias de manera personalizada.',

      {
        type: 'carousel',
        desktopSrcImages: [
          '/images/varios/flix-finder/desktop/favoritesDesktopFlixfinder.jpg',
          '/images/varios/flix-finder/desktop/moviesDesktopFlixfinder.jpg',
          '/images/varios/flix-finder/desktop/seriesDesktopFlixfinder.jpg',
          '/images/varios/flix-finder/desktop/loginDesktopFlixfinder.jpg',
          '/images/varios/flix-finder/desktop/registerDesktopFlixfinder.jpg',
        ],
        mobileSrcImages: [
          '/images/varios/flix-finder/mobile/favoritesMobileFlixfinder.jpg',
          '/images/varios/flix-finder/mobile/moviesMobileFlixfinder.jpg',
          '/images/varios/flix-finder/mobile/seriesMobileFlixfinder.jpg',
          '/images/varios/flix-finder/mobile/loginMobileFlixfinder.jpg',
          '/images/varios/flix-finder/mobile/registerMobileFlixfinder.jpg',
        ],
        greaterThan600Mode: '100%',
        mobileMode: '100%',
        marginBottom: 10,
        marginTop: 50,
      },
    ],
  },
  {
    id: 'asistente-virtual-ia',
    name: 'Asistente virtual IA',
    period: '2024',
    role: 'Desarrollador Front-end',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: ['Next', 'React', 'Typescript', 'HTML', 'CSS', 'Firestore', 'Node', 'OpenAI'],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://buenosnegocios.ar/',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Buenos Negocios es una plataforma B2B cuyo owner es Banco Galicia que conecta empresas permitiéndoles ofrecer y buscar oportunidades comerciales. Tras el lanzamiento al mercado y con el objetivo de aumentar la tracción, se decidió incorporar una funcionalidad clave: un asistente virtual potenciado por IA que ayudara a generar publicaciones de oportunidades de manera más ágil y efectiva.',
      'Esta nueva feature la desarrolle 100% por mi cuenta y por eso la desición de exponer el desarrollo en detalle en esta sección. Fué construida sobre la base tecnológica de Next, React, Typescript, Node y Firestore, evolucionó a través de dos versiones, cada una con su propio enfoque y alcance.',
      {
        type: 'video',
        src: '/videos/asistenteIa/version1-2.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'VERSION 1 Generación de oportunidad sin utilizar edición manual para publicarla',
        widthImageDescription: '340px',
      },
      'La implementación se basó en una UI que cuando el usuario envía un mensaje llama a un servicio en el front que a su vez llama al endpoint de la API pasándole todo el historial de prompts intercambiados y las oportunidades generadas al momento. El endpoint en la API tiene implementado un servicio basado en chatgpt-4o el cual tiene un prompt de sistema para orientarlo y controlarlo en varios aspectos y configuraciones como la temperatura que fué vital para controlar cuan determinista o creativo queriamos que fuese.',
      'Tambien se implementaron guardas para que en caso de que el endpoint retornase un json de una oportunidad mal generada, sin que el usuario perciba ese error, se le pide nuevamente la generación remarcándole que respete el formato.',
   
      {
        type: 'video',
        src: '/videos/asistenteIa/version1-1.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'VERSION 1 Generación de oportunidad utilizando edición manual para publicarla',
        widthImageDescription: '350px',
      },
      'En la primera versión, el asistente se nutría del prompt inicial del usuario para crear una oportunidad, tomando automáticamente la categoría y ubicación desde los datos con los que la empresa ya estaba registrada. Esta automatización buscaba simplificar el proceso y agilizar la publicación de oportunidades, logrando que con una sola interacción el usuario obtuviera un título y descripción basados en su contexto.',
      'Además, era posible generar infinitas variantes, cambiando título y descripción sin alterar la categoría ni la ubicación, o bien editar directamente estos campos. Si bien esta primera implementación fue efectiva para acelerar la creación, resultó en un flujo algo limitado, ya que el potencial de iterar y refinar la información se veía acotado.',
     
     
      'La segunda versión, en cambio, amplió significativamente las posibilidades de interacción entre el usuario y el asistente. Esta evolución permitió mantener una conversación continua y dinámica, iterando tantas veces como fuera necesario. El flujo comenzaba aclarando o desambiguando la naturaleza de la oportunidad, ofreciendo mayor precisión a la hora de generar título y descripción. A partir de ese momento, el asistente preguntaba por ubicación (física o virtual) y categoría, para luego generar la primera versión completa de la oportunidad.',
      {
        type: 'video',
        src: '/videos/asistenteIa/version2.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'VERSION 2',
        widthImageDescription: '300px',
      },
      'Con todo listo, el usuario podía continuar puliendo cualquiera de las cuatro propiedades (título, descripción, ubicación, categoría) sin restricciones, aprovechando el intercambio continuo para ajustar la publicación a su medida.',
      'La transición de la primera a la segunda versión trajo importantes beneficios.',
      'En la primera, la fortaleza radicaba en su rapidez y simplicidad: con un solo prompt inicial se obtenía una oportunidad razonablemente bien definida. Sin embargo, su contra era la rigidez, que limitaba las iteraciones posteriores a cambios menores en el título y descripción.',
      'La segunda versión, por el contrario, ofrecía una flexibilidad mucho mayor, al permitir un diálogo más profundo con la IA y la posibilidad de ajustar cualquier aspecto de la oportunidad cuantas veces hiciera falta. Esta complejidad adicional, si bien aumentaba la carga de interacción, respondía mejor a las necesidades de los usuarios que requerían oportunidades más precisas y personalizadas.',
      'En definitiva, la incorporación de este asistente virtual en Buenos Negocios fue una apuesta sólida para potenciar la plataforma tras su lanzamiento inicial. La primera versión allanó el camino con su inmediatez y facilidad, mientras que la segunda consolidó el asistente como una herramienta verdaderamente conversacional y adaptable, maximizando el valor entregado a las empresas al permitirles generar y refinar oportunidades según sus requerimientos específicos. ',
     
    ],
  },


  {
    id: 'chat',
    name: 'Chat',
    period: '2024',
    role: 'Desarrollador Front-end',
    details: [
      '<b>Tecnologías</b>',
      {
        type: 'stack',
        stack: ['Next', 'React', 'Typescript', 'HTML', 'CSS', 'Firestore'],
        marginBottom: 20,
        marginTop: 10,
      },
      {
        type: 'linksToWebsiteAndGithub',
        links: {
          website: 'https://buenosnegocios.ar/',
        },
        marginBottom: 40,
        marginTop: 0,
      },
      {
        type: 'title',
        title: 'Resumen',
        marginBottom: 0,
        marginTop: 0,
      },
      'Buenos Negocios es una plataforma B2B cuyo owner es Banco Galicia que conecta empresas permitiéndoles ofrecer y buscar oportunidades comerciales. Siendo el core del negocio la conexión entre empresas, la herramienta elegida para conectar a los usuarios fué un chat.',
      'Esta nueva feature la desarrolle 100% por mi cuenta y por eso la desición de exponer el desarrollo en detalle en esta sección. Fué construida sobre la base tecnológica de Next, React, Typescript y Firestore',
      {
        type: 'image',
        src: '/images/buenosNegocios/Desktop/chat.jpg',
        mobileVersionSrc: '/images/buenosNegocios/Desktop/chat.jpg',
        width: '100%',
        marginBottom: 50,
        marginTop: 50,
        imageDescription: 'Chat Buenos Negocios',
      },
      "Para la implementación del chat se utilizaron dos colecciones en Firestore, 'activeChats' y 'messages', conformando una estructura perfectamente escalable.",
      "'activeChats' guarda datos clave de cada sesión activa, incluyendo el ID de los participantes, el timestamp de inicio, el último mensaje leído y el estado del chat.",
      "La colección 'messages' registra cada mensaje con su contenido, autor, timestamp, referencia al chat correspondiente y cualquier metadato necesario para el ordenamiento y filtrado.",
      "Las suscripciones en tiempo real a las colecciones permiten la recepción inmediata de nuevos mensajes o cambios en el estado del chat, brindando una experiencia de comunicación sin demoras.",
      {
        type: 'video',
        src: '/videos/chat/chat.mp4',
        height: '650px',
        marginBottom: 50,
        marginTop: 70,
        imageDescription: 'Chat Buenos negocios',
        widthImageDescription: '340px',
      },


      "Se implementaron reglas de seguridad en Firestore para garantizar que sólo los participantes del chat tengan acceso a sus mensajes, asegurando la integridad y privacidad de la información.",
      "Se utilizaron hooks personalizados en el front para administrar las suscripciones, simplificando el código y mejorando la mantenibilidad al centralizar la lógica de actualización en componentes específicos.",
      "El tipado con Typescript asegura que cada mensaje, referencia a chat o documento obtenido de Firestore cumpla con las interfaces definidas, reduciendo errores y manteniendo la robustez del código.",
     
  
    ],
  },




];

export const aboutMe: string[]=[
'Desarrollador Frontend con 5 años de experiencia, actual referente tecnológico de Koi ventures.',
'Mi experiencia me da gran versatilidad y capacidad para gestionar equipos multidisciplinarios y proyectos complejos.Tengo experiencia en startups y me apasiona la creación de productos y la resolución de problemas a través de iteraciones cortas y constantes.',
'En los últimos años, he co-fundado exitosamente empresas en Argentina y EE.UU., absorbiendo valiosas lecciones tanto de los éxitos como de los fracasos.',

]

{
  /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

export const stack: IStack[] = [
  {
    iconSrc: '/icons/stackIcons/nextIcon.svg',
    doubleWidth: true,
  },
  {
    iconSrc: '/icons/stackIcons/reactIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/tsIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/jsIcon.svg',
  },

  {
    iconSrc: '/icons/stackIcons/htmlIcon.svg',
    doubleWidth: true,
  },
  {
    iconSrc: '/icons/stackIcons/cssIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/nodeIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/githubIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/muiIcon.svg',
    doubleWidth: true,
  },

  {
    iconSrc: '/icons/stackIcons/firebaseIcon.svg',
  },
  {
    iconSrc: '/icons/stackIcons/awsIcon.svg',
    doubleWidth: true,
  },
  {
    iconSrc: '/icons/stackIcons/jestIcon.svg',
  },
];
