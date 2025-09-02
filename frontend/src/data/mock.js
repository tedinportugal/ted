// Mock data for Ted's website
export const mockData = {
  services: {
    babysitting: {
      title: "Babysitting with Ted",
      description: "Professional babysitting services with creative activities, games, and lots of laughter!",
      schedule: "Flexible hours available",
      features: [
        "Free play activities and games",
        "Dancing and music",
        "Storytelling sessions", 
        "Calm games and activities",
        "Complete childcare supervision",
        "Creative workshops (optional)"
      ],
      pricing: {
        "1child": {
          "1hour": "30€",
          "2hours": "50€", 
          "3hours": "70€",
          "4hours": "85€",
          "6hours": "115€"
        },
        "2children": {
          "1hour": "40€",
          "2hours": "70€",
          "3hours": "95€", 
          "4hours": "110€",
          "6hours": "150€"
        },
        "3children": {
          "1hour": "50€",
          "2hours": "80€",
          "3hours": "110€",
          "4hours": "130€", 
          "6hours": "170€"
        },
        "5children": {
          "1hour": "60€",
          "2hours": "100€",
          "3hours": "140€",
          "4hours": "160€",
          "6hours": "200€"
        },
        "8children": {
          "1hour": "75€", 
          "2hours": "120€",
          "3hours": "170€",
          "4hours": "200€",
          "6hours": "260€"
        }
      },
      workshops: {
        "micangas": {
          "1child": "10€",
          "2children": "18€", 
          "8children": "30€",
          "duration": "30-45 min",
          "description": "Creative beading workshop - each child takes home their creation"
        }
      },
      location: "Faro region and surrounding areas",
      season: "Available year-round",
      ages: "All ages welcome"
    },
    birthdays: {
      title: "Magical Birthday Parties",
      description: "Unforgettable themed birthday parties filled with magic, games, and endless fun!",
      themes: [
        {
          name: "Magical Adventure",
          description: "Wizards, fairies, and magical creatures",
          activities: ["Magic tricks", "Fairy tale games", "Treasure hunt"]
        },
        {
          name: "Creative Art Party",
          description: "Painting, crafting, and creative expression",
          activities: ["Face painting", "Arts & crafts", "DIY decorations"]
        },
        {
          name: "Adventure Explorer",
          description: "Outdoor games and exploration",
          activities: ["Obstacle courses", "Nature scavenger hunt", "Team games"]
        }
      ],
      pricing: {
        basic: "120€ (up to 8 kids, 2 hours)",
        premium: "180€ (up to 12 kids, 3 hours)",
        deluxe: "250€ (up to 15 kids, 4 hours with decorations)"
      },
      included: ["Decorations", "Games & activities", "Music & entertainment", "Photos"]
    },
    skate: {
      title: "Skate Lessons with Ted",
      description: "Learn to skate with confidence! Fun, safe, and progressive lessons for all skill levels.",
      levels: [
        {
          name: "Beginner",
          description: "First steps on wheels",
          skills: ["Balance and posture", "Basic pushing", "Safe falling techniques"]
        },
        {
          name: "Intermediate", 
          description: "Building confidence",
          skills: ["Turning and stopping", "Speed control", "Basic tricks"]
        },
        {
          name: "Advanced",
          description: "Master the board",
          skills: ["Advanced tricks", "Ramp riding", "Style development"]
        }
      ],
      pricing: {
        single: "25€/lesson (1 hour)",
        package4: "90€/4 lessons",
        package8: "160€/8 lessons",
        group: "15€/person (min 4 people)"
      },
      equipment: "Skateboard and safety gear included"
    }
  },
  
  about: {
    name: "Ted",
    bio: "Hi! I'm Ted, a passionate children's entertainer and educator based in Portugal. With certifications in TEA and S21, I bring creativity, energy, and genuine care to every interaction with children. Whether it's babysitting, throwing an amazing birthday party, or teaching skateboarding, my goal is to create magical moments that children will remember forever!",
    certifications: ["TEA Certified", "S21 Certification", "First Aid Certified"],
    experience: "5+ years working with children",
    languages: ["Portuguese", "English", "Spanish", "French"],
    specialties: ["Creative activities", "Educational games", "Outdoor adventures", "Arts & crafts"]
  },

  contact: {
    whatsapp: "+351936331843",
    email: "hello@tedinportugal.com",
    phone: "+351936331843",
    instagram: "@tedinportugal",
    website: "www.tedinportugal.com",
    location: "Faro, Portugal & surrounding areas"
  },

  availability: {
    // Mock available dates (next 30 days with some unavailable dates)
    unavailableDates: [
      "2025-01-15",
      "2025-01-22", 
      "2025-01-29",
      "2025-02-05",
      "2025-02-12"
    ]
  },

  testimonials: [
    {
      name: "Maria Silva",
      text: "Ted is absolutely amazing with children! My daughter had the best birthday party ever. Highly recommended!",
      rating: 5,
      service: "Birthday Party"
    },
    {
      name: "João Santos", 
      text: "Professional, creative, and so much fun! Ted made babysitting feel like a party for our kids.",
      rating: 5,
      service: "Babysitting"
    },
    {
      name: "Ana Costa",
      text: "My son learned to skateboard in just a few lessons with Ted. Patient and encouraging teacher!",
      rating: 5,
      service: "Skate Lessons"
    }
  ]
};

export const languages = {
  pt: {
    nav: {
      home: "Início",
      babysitting: "Babysitting", 
      birthdays: "Festas Aniversário",
      skate: "Aulas Skate",
      about: "Sobre Ted",
      contact: "Contacto"
    },
    hero: {
      title: "Diversão Mágica com Ted!",
      subtitle: "Babysitting, festas de aniversário e aulas de skate cheias de magia e aventura",
      cta: "Descobre os Serviços",
      checkAvailability: "Consultar Disponibilidade"
    },
    services: {
      title: "Serviços Mágicos",
      subtitle: "Do babysitting às festas de aniversário e aulas de skate - Ted torna cada momento especial!",
      babysitting: {
        title: "Babysitting com Ted",
        description: "Serviços profissionais e exclusivos no Hotel Aquashow com atividades criativas, jogos e muitas gargalhadas!",
        schedule: "19:30 - 02:00",
        location: "Hotel Aquashow (Exclusivo)",
        season: "Período de verão: Julho e Agosto 2025",
        features: [
          "Atividades livres e jogos",
          "Dança e música",
          "Sessões de histórias",
          "Jogos calmos e atividades",
          "Supervisão completa",
          "Oficinas criativas (opcionais)"
        ],
        workshops: "Oficinas Criativas",
        workshopDesc: "Oficina de miçangas criativa - cada criança leva a sua criação para casa",
        pricing: {
          title: "Calculadora de Preços",
          subtitle: "Selecione o número de crianças e duração para ver os preços",
          children: "Número de Crianças",
          duration: "Duração",
          hours: {
            "1hour": "1 Hora",
            "2hours": "2 Horas", 
            "3hours": "3 Horas",
            "4hours": "4 Horas",
            "6hours": "6 Horas Completas"
          }
        },
        cta: {
          title: "Pronto para Reservar Ted?",
          subtitle: "Crie memórias mágicas para as suas crianças com babysitting profissional no Hotel Aquashow!",
          book: "Consultar Disponibilidade",
          contact: "Contactar Ted"
        }
      },
      birthdays: {
        title: "Festas de Aniversário Mágicas",
        description: "Festas de aniversário temáticas inesquecíveis, cheias de magia, jogos e diversão sem fim!",
        themes: {
          title: "Temas Incríveis",
          subtitle: "Escolha o tema perfeito para a sua celebração especial",
          magical: "Aventura Mágica",
          creative: "Festa de Arte Criativa", 
          adventure: "Explorador de Aventuras"
        },
        packages: {
          title: "Pacotes de Festa",
          subtitle: "Escolha o pacote perfeito para a sua celebração",
          basic: "Magia Básica",
          premium: "Aventura Premium",
          deluxe: "Espetacular Deluxe"
        },
        included: {
          title: "Todas as Festas Incluem",
          decorations: "Decorações temáticas e montagem",
          entertainment: "Música e jogos interativos",
          memories: "Fotos de momentos especiais",
          activities: "Atividades apropriadas para a idade"
        },
        cta: {
          title: "Prontos para a Festa de Aniversário Definitiva? 🎉",
          subtitle: "Deixe Ted criar memórias mágicas que a sua criança guardará para sempre!",
          book: "Reservar Agora",
          questions: "Fazer Perguntas"
        }
      },
      skate: {
        title: "Aulas de Skate com Ted",
        description: "Aprenda a andar de skate com confiança! Aulas divertidas, seguras e progressivas para todos os níveis.",
        levels: {
          title: "Níveis de Habilidade",
          subtitle: "Encontre o nível perfeito para a sua jornada no skate",
          beginner: "Iniciante",
          intermediate: "Intermédio",
          advanced: "Avançado"
        },
        packages: {
          title: "Pacotes de Aulas",
          subtitle: "Escolha o pacote perfeito para os seus objetivos no skate",
          single: "Aula Individual",
          package4: "Pacote 4 Aulas",
          package8: "Curso 8 Aulas",
          group: "Aulas em Grupo"
        },
        safety: {
          title: "Segurança e Equipamento",
          subtitle: "A sua segurança é a nossa prioridade",
          safetyFirst: "Segurança Primeiro",
          expertTeaching: "Ensino Especializado", 
          qualityEquipment: "Equipamento de Qualidade",
          provenMethod: "Método Comprovado"
        },
        cta: {
          title: "Pronto para Andar? 🛹",
          subtitle: "Comece a sua jornada no skate com Ted e domine a prancha com confiança!",
          book: "Reservar Primeira Aula",
          questions: "Fazer Perguntas"
        }
      }
    },
    about: {
      title: "Conhece Ted!",
      subtitle: "Criando momentos mágicos por todo Portugal",
      stats: {
        happyKids: "Crianças Felizes",
        avgRating: "Avaliação Média", 
        experience: "Anos de Experiência",
        parties: "Festas Organizadas"
      },
      languages: {
        title: "Idiomas Falados",
        subtitle: "Comunicando com famílias de todo o mundo"
      },
      specialties: {
        title: "Especialidades do Ted",
        subtitle: "O que torna Ted especial no entretenimento infantil",
        creative: "Atividades Criativas",
        educational: "Jogos Educativos",
        outdoor: "Aventuras ao Ar Livre",
        arts: "Artes e Ofícios"
      },
      experience: {
        title: "Experiência e Qualificações",
        certifications: "Certificações Profissionais",
        experienceDesc: "Vasta experiência trabalhando com crianças de todas as idades",
        passion: "Paixão pelas Crianças"
      },
      cta: {
        title: "Pronto para Conhecer Ted?",
        subtitle: "Vamos criar memórias mágicas para as suas crianças juntos!",
        contact: "Contactar Ted",
        services: "Explorar Serviços"
      }
    },
    contact: {
      title: "Entre em Contacto",
      subtitle: "Pronto para criar memórias mágicas? Vamos planear algo incrível para as suas crianças!",
      info: {
        title: "Informações de Contacto",
        whatsapp: "WhatsApp (Preferido)",
        phone: "Telefone",
        email: "Email",
        instagram: "Instagram",
        location: "Localização",
        chatNow: "Conversar Agora",
        follow: "Seguir"
      },
      hours: {
        title: "Horários de Serviço",
        babysitting: "Babysitting: 19:30 - 02:00",
        birthdays: "Festas Aniversário: Horário flexível",
        skate: "Aulas Skate: Por marcação"
      },
      availability: {
        title: "Consultar Disponibilidade",
        available: "Disponível",
        unavailable: "Indisponível", 
        selected: "Selecionado"
      },
      form: {
        title: "Enviar Mensagem",
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        service: "Serviço Interessado",
        message: "Mensagem",
        placeholder: "Conte ao Ted sobre as suas necessidades, número de crianças, pedidos especiais, etc.",
        send: "Enviar Mensagem",
        whatsappInstead: "WhatsApp Em Vez Disso",
        tip: "Dica de Resposta Rápida: Para resposta mais rápida, use WhatsApp! Ted normalmente responde em minutos.",
        services: {
          select: "Selecione um serviço",
          babysitting: "Babysitting",
          birthday: "Festa Aniversário",
          skate: "Aulas Skate",
          other: "Outro"
        }
      }
    },
    common: {
      learnMore: "Saber Mais",
      bookNow: "Reservar Agora",
      getStarted: "Começar Agora",
      whatsappTip: "Conversar com Ted no WhatsApp",
      happyKids: "500+",
      rating: "5★",
      yearsExp: "3+",
      from: "A partir de"
    }
  },
  en: {
    nav: {
      home: "Home",
      babysitting: "Babysitting",
      birthdays: "Birthday Parties", 
      skate: "Skate Lessons",
      about: "About Ted",
      contact: "Contact"
    },
    hero: {
      title: "Magical Fun with Ted!",
      subtitle: "Babysitting, birthday parties and skate lessons filled with magic and adventure",
      cta: "Discover Services",
      checkAvailability: "Check Availability"
    },
    services: {
      title: "Magical Services",
      subtitle: "From babysitting adventures to birthday party magic and skate lessons - Ted makes every moment special!",
      babysitting: {
        title: "Babysitting with Ted",
        description: "Professional and exclusive babysitting services at Hotel Aquashow with creative activities, games, and lots of laughter!",
        schedule: "19:30 - 02:00",
        location: "Hotel Aquashow (Exclusive)",
        season: "Summer period: July and August 2025",
        features: [
          "Free play activities and games",
          "Dancing and music",
          "Storytelling sessions", 
          "Calm games and activities",
          "Complete childcare supervision",
          "Creative workshops (optional)"
        ],
        workshops: "Creative Workshops",
        workshopDesc: "Creative beading workshop - each child takes home their creation",
        pricing: {
          title: "Pricing Calculator",
          subtitle: "Select the number of children and duration to see pricing",
          children: "Number of Children",
          duration: "Duration",
          hours: {
            "1hour": "1 Hour",
            "2hours": "2 Hours", 
            "3hours": "3 Hours",
            "4hours": "4 Hours",
            "6hours": "6 Hours Complete"
          }
        },
        cta: {
          title: "Ready to Book Ted?",
          subtitle: "Create magical memories for your children with professional babysitting at Hotel Aquashow!",
          book: "Check Availability",
          contact: "Contact Ted"
        }
      },
      birthdays: {
        title: "Magical Birthday Parties",
        description: "Unforgettable themed birthday parties filled with magic, games, and endless fun!",
        themes: {
          title: "Amazing Party Themes",
          subtitle: "Choose the perfect theme for your special celebration",
          magical: "Magical Adventure",
          creative: "Creative Art Party", 
          adventure: "Adventure Explorer"
        },
        packages: {
          title: "Party Packages",
          subtitle: "Choose the perfect package for your celebration",
          basic: "Basic Magic",
          premium: "Premium Adventure",
          deluxe: "Deluxe Spectacular"
        },
        included: {
          title: "Every Party Includes",
          decorations: "Themed decorations and setup",
          entertainment: "Music and interactive games",
          memories: "Photos of special moments",
          activities: "Age-appropriate fun activities"
        },
        cta: {
          title: "Ready for the Ultimate Birthday Party? 🎉",
          subtitle: "Let Ted create magical memories that your child will treasure forever!",
          book: "Book Now",
          questions: "Ask Questions"
        }
      },
      skate: {
        title: "Skate Lessons with Ted",
        description: "Learn to skate with confidence! Fun, safe, and progressive lessons for all skill levels.",
        levels: {
          title: "Skill Levels",
          subtitle: "Find the perfect level for your skating journey",
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced"
        },
        packages: {
          title: "Lesson Packages",
          subtitle: "Choose the perfect package for your skating goals",
          single: "Single Lesson",
          package4: "4 Lesson Package",
          package8: "8 Lesson Course",
          group: "Group Lessons"
        },
        safety: {
          title: "Safety & Equipment",
          subtitle: "Your safety is our top priority",
          safetyFirst: "Safety First",
          expertTeaching: "Expert Teaching", 
          qualityEquipment: "Quality Equipment",
          provenMethod: "Proven Method"
        },
        cta: {
          title: "Ready to Roll? 🛹",
          subtitle: "Start your skating journey with Ted and master the board with confidence!",
          book: "Book First Lesson",
          questions: "Ask Questions"
        }
      }
    },
    about: {
      title: "Meet Ted!",
      subtitle: "Creating magical moments across Portugal",
      stats: {
        happyKids: "Happy Children",
        avgRating: "Average Rating", 
        experience: "Years Experience",
        parties: "Parties Organized"
      },
      languages: {
        title: "Languages Spoken",
        subtitle: "Communicating with families from around the world"
      },
      specialties: {
        title: "Ted's Specialties",
        subtitle: "What makes Ted special in children's entertainment",
        creative: "Creative Activities",
        educational: "Educational Games",
        outdoor: "Outdoor Adventures",
        arts: "Arts & Crafts"
      },
      experience: {
        title: "Experience & Qualifications",
        certifications: "Professional Certifications",
        experienceDesc: "Extensive experience working with children of all ages",
        passion: "Passion for Children"
      },
      cta: {
        title: "Ready to Meet Ted?",
        subtitle: "Let's create magical memories for your children together!",
        contact: "Contact Ted",
        services: "Explore Services"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to create magical memories? Let's plan something amazing for your children!",
      info: {
        title: "Contact Information",
        whatsapp: "WhatsApp (Preferred)",
        phone: "Phone",
        email: "Email",
        instagram: "Instagram",
        location: "Location",
        chatNow: "Chat Now",
        follow: "Follow"
      },
      hours: {
        title: "Service Hours",
        babysitting: "Babysitting: 19:30 - 02:00",
        birthdays: "Birthday Parties: Flexible timing",
        skate: "Skate Lessons: By appointment"
      },
      availability: {
        title: "Check Availability",
        available: "Available",
        unavailable: "Unavailable", 
        selected: "Selected"
      },
      form: {
        title: "Send a Message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        service: "Service Interested",
        message: "Message",
        placeholder: "Tell Ted about your needs, number of children, special requests, etc.",
        send: "Send Message",
        whatsappInstead: "WhatsApp Instead",
        tip: "Quick Response Tip: For fastest response, use WhatsApp! Ted usually replies within minutes.",
        services: {
          select: "Select a service",
          babysitting: "Babysitting",
          birthday: "Birthday Party",
          skate: "Skate Lessons",
          other: "Other"
        }
      }
    },
    common: {
      learnMore: "Learn More",
      bookNow: "Book Now",
      getStarted: "Get Started Now",
      whatsappTip: "Chat with Ted on WhatsApp",
      happyKids: "500+",
      rating: "5★",
      yearsExp: "3+",
      from: "From"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      babysitting: "Cuidado Niños",
      birthdays: "Fiestas Cumpleaños",
      skate: "Clases Skate", 
      about: "Sobre Ted",
      contact: "Contacto"
    },
    hero: {
      title: "¡Diversión Mágica con Ted!",
      subtitle: "Cuidado de niños, fiestas de cumpleaños y clases de skate llenas de magia y aventura",
      cta: "Descubrir Servicios",
      checkAvailability: "Consultar Disponibilidad"
    },
    services: {
      title: "Servicios Mágicos",
      subtitle: "¡Desde aventuras de cuidado infantil hasta magia de fiestas de cumpleaños y clases de skate - Ted hace cada momento especial!",
      babysitting: {
        title: "Cuidado de Niños con Ted",
        description: "¡Servicios profesionales y exclusivos en Hotel Aquashow con actividades creativas, juegos y muchas risas!",
        schedule: "19:30 - 02:00",
        location: "Hotel Aquashow (Exclusivo)",
        season: "Período de verano: Julio y Agosto 2025",
        features: [
          "Actividades libres y juegos",
          "Baile y música",
          "Sesiones de cuentos", 
          "Juegos tranquilos y actividades",
          "Supervisión completa del cuidado infantil",
          "Talleres creativos (opcionales)"
        ],
        workshops: "Talleres Creativos",
        workshopDesc: "Taller creativo de cuentas - cada niño se lleva su creación a casa",
        pricing: {
          title: "Calculadora de Precios",
          subtitle: "Seleccione el número de niños y duración para ver los precios",
          children: "Número de Niños",
          duration: "Duración",
          hours: {
            "1hour": "1 Hora",
            "2hours": "2 Horas", 
            "3hours": "3 Horas",
            "4hours": "4 Horas",
            "6hours": "6 Horas Completas"
          }
        },
        cta: {
          title: "¿Listos para Reservar Ted?",
          subtitle: "¡Crea recuerdos mágicos para tus niños con cuidado profesional en Hotel Aquashow!",
          book: "Consultar Disponibilidad",
          contact: "Contactar Ted"
        }
      },
      birthdays: {
        title: "Fiestas de Cumpleaños Mágicas",
        description: "¡Fiestas de cumpleaños temáticas inolvidables llenas de magia, juegos y diversión sin fin!",
        themes: {
          title: "Temas de Fiesta Increíbles",
          subtitle: "Elige el tema perfecto para tu celebración especial",
          magical: "Aventura Mágica",
          creative: "Fiesta de Arte Creativo", 
          adventure: "Explorador de Aventuras"
        },
        packages: {
          title: "Paquetes de Fiesta",
          subtitle: "Elige el paquete perfecto para tu celebración",
          basic: "Magia Básica",
          premium: "Aventura Premium",
          deluxe: "Espectacular Deluxe"
        },
        included: {
          title: "Cada Fiesta Incluye",
          decorations: "Decoraciones temáticas y montaje",
          entertainment: "Música y juegos interactivos",
          memories: "Fotos de momentos especiales",
          activities: "Actividades divertidas apropiadas para la edad"
        },
        cta: {
          title: "¿Listos para la Fiesta de Cumpleaños Definitiva? 🎉",
          subtitle: "¡Deja que Ted cree recuerdos mágicos que tu hijo atesorará para siempre!",
          book: "Reservar Ahora",
          questions: "Hacer Preguntas"
        }
      },
      skate: {
        title: "Clases de Skate con Ted",
        description: "¡Aprende a patinar con confianza! Clases divertidas, seguras y progresivas para todos los niveles de habilidad.",
        levels: {
          title: "Niveles de Habilidad",
          subtitle: "Encuentra el nivel perfecto para tu viaje en el patinaje",
          beginner: "Principiante",
          intermediate: "Intermedio",
          advanced: "Avanzado"
        },
        packages: {
          title: "Paquetes de Clases",
          subtitle: "Elige el paquete perfecto para tus objetivos de patinaje",
          single: "Clase Individual",
          package4: "Paquete 4 Clases",
          package8: "Curso 8 Clases",
          group: "Clases Grupales"
        },
        safety: {
          title: "Seguridad y Equipamiento",
          subtitle: "Tu seguridad es nuestra máxima prioridad",
          safetyFirst: "Seguridad Primero",
          expertTeaching: "Enseñanza Experta", 
          qualityEquipment: "Equipamiento de Calidad",
          provenMethod: "Método Probado"
        },
        cta: {
          title: "¿Listo para Rodar? 🛹",
          subtitle: "¡Comienza tu viaje de patinaje con Ted y domina la tabla con confianza!",
          book: "Reservar Primera Clase",
          questions: "Hacer Preguntas"
        }
      }
    },
    about: {
      title: "¡Conoce a Ted!",
      subtitle: "Creando momentos mágicos por todo Portugal",
      stats: {
        happyKids: "Niños Felices",
        avgRating: "Calificación Promedio", 
        experience: "Años de Experiencia",
        parties: "Fiestas Organizadas"
      },
      languages: {
        title: "Idiomas Hablados",
        subtitle: "Comunicándose con familias de todo el mundo"
      },
      specialties: {
        title: "Especialidades de Ted",
        subtitle: "Lo que hace especial a Ted en el entretenimiento infantil",
        creative: "Actividades Creativas",
        educational: "Juegos Educativos",
        outdoor: "Aventuras al Aire Libre",
        arts: "Artes y Manualidades"
      },
      experience: {
        title: "Experiencia y Calificaciones",
        certifications: "Certificaciones Profesionales",
        experienceDesc: "Amplia experiencia trabajando con niños de todas las edades",
        passion: "Pasión por los Niños"
      },
      cta: {
        title: "¿Listo para Conocer a Ted?",
        subtitle: "¡Vamos a crear recuerdos mágicos para tus niños juntos!",
        contact: "Contactar Ted",
        services: "Explorar Servicios"
      }
    },
    contact: {
      title: "Ponerse en Contacto",
      subtitle: "¿Listo para crear recuerdos mágicos? ¡Planifiquemos algo increíble para tus niños!",
      info: {
        title: "Información de Contacto",
        whatsapp: "WhatsApp (Preferido)",
        phone: "Teléfono",
        email: "Email",
        instagram: "Instagram",
        location: "Ubicación",
        chatNow: "Chatear Ahora",
        follow: "Seguir"
      },
      hours: {
        title: "Horarios de Servicio",
        babysitting: "Cuidado Niños: 19:30 - 02:00",
        birthdays: "Fiestas Cumpleaños: Horario flexible",
        skate: "Clases Skate: Con cita previa"
      },
      availability: {
        title: "Consultar Disponibilidad",
        available: "Disponible",
        unavailable: "No Disponible", 
        selected: "Seleccionado"
      },
      form: {
        title: "Enviar Mensaje",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        service: "Servicio Interesado",
        message: "Mensaje",
        placeholder: "Cuéntale a Ted sobre tus necesidades, número de niños, solicitudes especiales, etc.",
        send: "Enviar Mensaje",
        whatsappInstead: "WhatsApp En Su Lugar",
        tip: "Consejo de Respuesta Rápida: ¡Para respuesta más rápida, usa WhatsApp! Ted usualmente responde en minutos.",
        services: {
          select: "Seleccionar un servicio",
          babysitting: "Cuidado Niños",
          birthday: "Fiesta Cumpleaños",
          skate: "Clases Skate",
          other: "Otro"
        }
      }
    },
    common: {
      learnMore: "Saber Más",
      bookNow: "Reservar Ahora",
      getStarted: "Comenzar Ahora",
      whatsappTip: "Chatear con Ted en WhatsApp",
      happyKids: "500+",
      rating: "5★",
      yearsExp: "3+",
      from: "Desde"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      babysitting: "Baby-sitting",
      birthdays: "Fêtes Anniversaire",
      skate: "Cours Skate",
      about: "À Propos Ted", 
      contact: "Contact"
    },
    hero: {
      title: "Amusement Magique avec Ted!",
      subtitle: "Baby-sitting, fêtes d'anniversaire et cours de skate remplis de magie et d'aventure",
      cta: "Découvrir Services",
      checkAvailability: "Vérifier Disponibilité"
    },
    services: {
      title: "Services Magiques",
      subtitle: "Des aventures de baby-sitting à la magie des fêtes d'anniversaire et aux cours de skate - Ted rend chaque moment spécial!",
      babysitting: {
        title: "Baby-sitting avec Ted",
        description: "Services de baby-sitting professionnels et exclusifs à l'Hotel Aquashow avec activités créatives, jeux et beaucoup de rires!",
        schedule: "19:30 - 02:00",
        location: "Hotel Aquashow (Exclusif)",
        season: "Période estivale: Juillet et Août 2025",
        features: [
          "Activités libres et jeux",
          "Danse et musique",
          "Séances de contes", 
          "Jeux calmes et activités",
          "Supervision complète de garde d'enfants",
          "Ateliers créatifs (optionnels)"
        ],
        workshops: "Ateliers Créatifs",
        workshopDesc: "Atelier créatif de perles - chaque enfant repart avec sa création",
        pricing: {
          title: "Calculateur de Prix",
          subtitle: "Sélectionnez le nombre d'enfants et la durée pour voir les prix",
          children: "Nombre d'Enfants",
          duration: "Durée",
          hours: {
            "1hour": "1 Heure",
            "2hours": "2 Heures", 
            "3hours": "3 Heures",
            "4hours": "4 Heures",
            "6hours": "6 Heures Complètes"
          }
        },
        cta: {
          title: "Prêt à Réserver Ted?",
          subtitle: "Créez des souvenirs magiques pour vos enfants avec un baby-sitting professionnel à l'Hotel Aquashow!",
          book: "Vérifier Disponibilité",
          contact: "Contacter Ted"
        }
      },
      birthdays: {
        title: "Fêtes d'Anniversaire Magiques",
        description: "Fêtes d'anniversaire thématiques inoubliables remplies de magie, jeux et amusement sans fin!",
        themes: {
          title: "Thèmes de Fête Incroyables",
          subtitle: "Choisissez le thème parfait pour votre célébration spéciale",
          magical: "Aventure Magique",
          creative: "Fête d'Art Créatif", 
          adventure: "Explorateur d'Aventures"
        },
        packages: {
          title: "Forfaits de Fête",
          subtitle: "Choisissez le forfait parfait pour votre célébration",
          basic: "Magie de Base",
          premium: "Aventure Premium",
          deluxe: "Spectaculaire Deluxe"
        },
        included: {
          title: "Chaque Fête Inclut",
          decorations: "Décorations thématiques et installation",
          entertainment: "Musique et jeux interactifs",
          memories: "Photos de moments spéciaux",
          activities: "Activités amusantes adaptées à l'âge"
        },
        cta: {
          title: "Prêt pour la Fête d'Anniversaire Ultime? 🎉",
          subtitle: "Laissez Ted créer des souvenirs magiques que votre enfant chérira pour toujours!",
          book: "Réserver Maintenant",
          questions: "Poser Questions"
        }
      },
      skate: {
        title: "Cours de Skate avec Ted",
        description: "Apprenez à faire du skate avec confiance! Cours amusants, sûrs et progressifs pour tous les niveaux de compétence.",
        levels: {
          title: "Niveaux de Compétence",
          subtitle: "Trouvez le niveau parfait pour votre parcours de skate",
          beginner: "Débutant",
          intermediate: "Intermédiaire",
          advanced: "Avancé"
        },
        packages: {
          title: "Forfaits de Cours",
          subtitle: "Choisissez le forfait parfait pour vos objectifs de skate",
          single: "Cours Individuel",
          package4: "Forfait 4 Cours",
          package8: "Cours 8 Leçons",
          group: "Cours de Groupe"
        },
        safety: {
          title: "Sécurité et Équipement",
          subtitle: "Votre sécurité est notre priorité absolue",
          safetyFirst: "Sécurité d'Abord",
          expertTeaching: "Enseignement Expert", 
          qualityEquipment: "Équipement de Qualité",
          provenMethod: "Méthode Éprouvée"
        },
        cta: {
          title: "Prêt à Rouler? 🛹",
          subtitle: "Commencez votre parcours de skate avec Ted et maîtrisez la planche avec confiance!",
          book: "Réserver Premier Cours",
          questions: "Poser Questions"
        }
      }
    },
    about: {
      title: "Rencontrez Ted!",
      subtitle: "Créant des moments magiques à travers le Portugal",
      stats: {
        happyKids: "Enfants Heureux",
        avgRating: "Note Moyenne", 
        experience: "Années d'Expérience",
        parties: "Fêtes Organisées"
      },
      languages: {
        title: "Langues Parlées",
        subtitle: "Communiquant avec des familles du monde entier"
      },
      specialties: {
        title: "Spécialités de Ted",
        subtitle: "Ce qui rend Ted spécial dans le divertissement pour enfants",
        creative: "Activités Créatives",
        educational: "Jeux Éducatifs",
        outdoor: "Aventures en Plein Air",
        arts: "Arts et Artisanat"
      },
      experience: {
        title: "Expérience et Qualifications",
        certifications: "Certifications Professionnelles",
        experienceDesc: "Vaste expérience de travail avec des enfants de tous âges",
        passion: "Passion pour les Enfants"
      },
      cta: {
        title: "Prêt à Rencontrer Ted?",
        subtitle: "Créons ensemble des souvenirs magiques pour vos enfants!",
        contact: "Contacter Ted",
        services: "Explorer Services"
      }
    },
    contact: {
      title: "Entrer en Contact",
      subtitle: "Prêt à créer des souvenirs magiques? Planifions quelque chose d'incroyable pour vos enfants!",
      info: {
        title: "Informations de Contact",
        whatsapp: "WhatsApp (Préféré)",
        phone: "Téléphone",
        email: "Email",
        instagram: "Instagram",
        location: "Emplacement",
        chatNow: "Chatter Maintenant",
        follow: "Suivre"
      },
      hours: {
        title: "Horaires de Service",
        babysitting: "Baby-sitting: 19:30 - 02:00",
        birthdays: "Fêtes Anniversaire: Timing flexible",
        skate: "Cours Skate: Sur rendez-vous"
      },
      availability: {
        title: "Vérifier Disponibilité",
        available: "Disponible",
        unavailable: "Indisponible", 
        selected: "Sélectionné"
      },
      form: {
        title: "Envoyer un Message",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        service: "Service Intéressé",
        message: "Message",
        placeholder: "Dites à Ted vos besoins, nombre d'enfants, demandes spéciales, etc.",
        send: "Envoyer Message",
        whatsappInstead: "WhatsApp À La Place",
        tip: "Conseil Réponse Rapide: Pour une réponse plus rapide, utilisez WhatsApp! Ted répond généralement en quelques minutes.",
        services: {
          select: "Sélectionner un service",
          babysitting: "Baby-sitting",
          birthday: "Fête Anniversaire",
          skate: "Cours Skate",
          other: "Autre"
        }
      }
    },
    common: {
      learnMore: "En Savoir Plus",
      bookNow: "Réserver Maintenant",
      getStarted: "Commencer Maintenant",
      whatsappTip: "Chatter avec Ted sur WhatsApp",
      happyKids: "500+",
      rating: "5★",
      yearsExp: "3+",
      from: "À partir de"
    }
  }
};