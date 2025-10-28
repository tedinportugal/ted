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
      workshops: {
        "micangas": {
          "1child": "10€",
          "2children": "18€", 
          "duration": "30-45 min",
          "description": "Creative beading workshop - each child takes home their creation"
        }
      },
      location: "Faro region and surrounding areas",
      season: "Available year-round",
      ages: "All ages welcome"
    },
    birthdays: {
      title: "Birthday Parties",
      description: "Unforgettable themed birthday parties, games, and endless fun!",
      themes: [
        {
          name: "Adventure",
          description: " fairies, and magical creatures",
          activities: ["Fairy tale games", "Treasure hunt"]
        },
        {
          name: "Creative Art Party",
          description: "Painting, crafting, and creative expression",
          activities: ["Face painting", "Arts & crafts", "DIY decorations"]
        },
        {
          name: "Adventure Explorer",
          description: "Outdoor games and exploration",
          activities: ["Face Paiting", "Moldable balloons", "Soap bubbles"]
        }
      ],
      pricing: {
        basic: "200€ (2 animators, 1 workshops & 1 activities 2 hours)",
        premium: "280€ (2 animators, 1 workshops & 2 activities 3 hours)",
        deluxe: "360€ (2 animators, 2 workshops & 3 activities 4 hours )"
      },
      included: ["Games & activities", "Music & entertainment"]
    },
      
  about: {
    name: "Ted",
    age: "23 anos",
    origin: "Vim do Brasil para ser animador em Portugal",
    passion: "Animador por amor",
    profession: "Professor de Skate", 
    personality: "Amo apanhadas",
    philosophy: "Não gosto de crianças a passar o dia no telemóvel",
    bio: "Olá! Sou Ted, tenho 23 anos e vim do Brasil para ser animador em Portugal. Sou um animador por amor e professor de skate apaixonado. Com certificações em TEA e S21, trago criatividade, energia e cuidado genuíno a cada interação com crianças. Amo apanhadas e acredito que as crianças devem brincar e criar memórias em vez de passar o dia no telemóvel. O meu objetivo é criar momentos mágicos que as crianças lembrarão para sempre!",
    certifications: ["TEA Certified", "S21 Certification", "First Aid Certified"],
    experience: "Animador infantil profissional",
    languages: ["Portuguese", "English", "Spanish", "French"],
    specialties: ["Creative activities", "Educational games", "Outdoor adventures", "Arts & crafts"],
    realPhoto: "https://customer-assets.emergentagent.com/job_skate-party/artifacts/pg049z35_5D7B8BF4-317A-4305-A85C-42BA646C6DC4.png"
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
      text: {
        pt: "Ted é absolutamente incrível com crianças! A minha filha teve a melhor festa de aniversário de sempre. Altamente recomendado!",
        en: "Ted is absolutely amazing with children! My daughter had the best birthday party ever. Highly recommended!",
        es: "¡Ted es absolutamente increíble con los niños! Mi hija tuvo la mejor fiesta de cumpleaños de su vida. ¡Muy recomendado!",
        fr: "Ted est absolument incroyable avec les enfants! Ma fille a eu la meilleure fête d'anniversaire de sa vie. Hautement recommandé!"
      },
      rating: 5,
      service: {
        pt: "Festa Aniversário",
        en: "Birthday Party",
      }
    },
    {
      name: "João Santos", 
      text: {
        pt: "Profissional, criativo e muito divertido! Ted fez o babysitting parecer uma festa para as nossas crianças.",
        en: "Professional, creative, and so much fun! Ted made babysitting feel like a party for our kids.",
      },
      rating: 5,
      service: {
        pt: "Babysitting",
        en: "Babysitting",
      }
    },
    {
      name: "Ana Costa",
      text: {
        pt: "O meu filho aprendeu a andar de skate em apenas algumas aulas com Ted. Professor paciente e encorajador!",
        en: "My son learned to skateboard in just a few lessons with Ted. Patient and encouraging teacher!",
      rating: 5,
      service: {
        pt: "Aulas Skate",
        en: "Skate Lessons"
      }
    }
  ]
};

export const languages = {
  pt: {
    nav: {
      home: "Início",
      babysitting: "Babysitting", 
      birthdays: "Festas Aniversário",
      about: "Sobre Ted",
      contact: "Contacto"
    },
    hero: {
      title: "Animação com Ted!",
      subtitle: "Babysitting, festas de aniversário ",
      cta: "Descobre os Serviços",
      checkAvailability: "Consultar Disponibilidade"
    },
    services: {
      title: "Serviços",
      subtitle: "Do babysitting às festas de aniversário - Ted torna cada momento especial!",
      babysitting: {
        title: "Babysitting com Ted",
        description: "Serviços profissionais de babysitting com atividades criativas, jogos e muita diversão !",
        schedule: "Horários flexíveis disponíveis",
        location: "Região de Algarve",
        season: "Disponível todo o ano",
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
          subtitle: "Crie memórias para as suas crianças com babysitting profissional!",
          book: "Consultar Disponibilidade",
          contact: "Contactar Ted"
        }
      },
      birthdays: {
        title: "Festas de Aniversário",
        description: "Festas de aniversário temáticas inesquecíveis,jogos e diversão sem fim!",
        themes: {
          title: "Temas Incríveis",
          subtitle: "Escolha o tema perfeito para a sua celebração especial",
          magical: {
            name: "Fun",
            description: "Muita diversao",
            activities: ["Jogos e brincadeiras"]
          },
          creative: {
            name: "Fun Fun",
            description: "Pintura, artesanato e expressão criativa",
            activities: ["Pintura facial", "Artes e ofícios", "Decorações DIY"]
          },
          adventure: {
            name: "Super Fun",
            description: "Jogos ao ar livre e exploração",
            activities: ["Cursos de obstáculos", "Caça ao tesouro na natureza", "Jogos de equipa"]
          }
        },
        packages: {
          title: "Pacotes de Festa",
          subtitle: "Escolha o pacote perfeito para a sua celebração",
          basic: {
            name: "Fun",
            description: "Festa inicial perfeita",
            features: ["Até 8 crianças", "2 horas de diversão", "Decorações básicas", "Jogos e atividades", "Lista de música"]
          },
          premium: {
            name: "Fun Fun",
            description: "Escolha mais popular",
            features: ["Até 12 crianças", "3 horas de magia", "Decorações premium", "Jogos interativos", "Fotos profissionais", "Atividades temáticas"]
          },
          deluxe: {
            name: "Super fun",
            description: "Experiência de festa definitiva",
            features: ["2 animadores", "4 horas completas", "Caça ao tesouro", "Múltiplas atividades"]
          }
        },
        included: {
          title: "Todas as Festas Incluem",
          subtitle: "Inclusões padrão em todos os pacotes de festa de aniversário",
          decorations: {
            title: "Padrao Ted",
            desc: "Muita diversao com segurança "
          },
          entertainment: {
            title: "Entretenimento",
            desc: "Música e jogos interativos"
          },
          memories: {
            title: "Memórias",
            desc: "Fotos de momentos especiais"
          },
          activities: {
            title: "Atividades",
            desc: "Atividades divertidas apropriadas para a idade"
          }
        },
        cta: {
          title: "Prontos para a Festa de Aniversário Definitiva? 🎉",
          subtitle: "Deixe Ted criar memórias que a sua criança guardará para sempre!",
          book: "Reservar Agora",
          questions: "Fazer Perguntas"
        }
      },
      
    },
    about: {
      title: "Conhece Ted!",
      subtitle: "Criando momentos mágicos por todo Portugal",
      bio: "Olá! Sou Ted, tenho 23 anos e vim do Brasil para ser animador em Portugal. Sou um animador por amor e professor de skate apaixonado. Com certificações em TEA e S21, trago criatividade, energia e cuidado genuíno a cada interação com crianças. Amo apanhadas e acredito que as crianças devem brincar e criar memórias em vez de passar o dia no telemóvel. O meu objetivo é criar momentos mágicos que as crianças lembrarão para sempre!",
      stats: {
        title: "Ted em Números",
        happyKids: "Crianças Felizes",
        avgRating: "Avaliação Média", 
        experience: "Anos de Experiência",
        parties: "Festas Organizadas",
        languages: "Idiomas"
      },
      languages: {
        title: "Idiomas Falados",
        subtitle: "Comunicando com famílias de todo o mundo"
      },
      specialties: {
        title: "Especialidades do Ted",
        subtitle: "O que torna Ted especial no entretenimento infantil",
        creative: "Atividades Criativas",
        creativeDesc: "Artes, ofícios e brincadeiras imaginativas",
        educational: "Jogos Educativos",
        educationalDesc: "Aprendizagem através de diversão e interação",
        outdoor: "Aventuras ao Ar Livre",
        outdoorDesc: "Exploração segura e brincadeiras ativas",
        arts: "Artes e Ofícios",
        artsDesc: "Projetos criativos práticos"
      },
      experience: {
        title: "Experiência e Qualificações",
        certifications: "Certificações Profissionais",
        certificationsDesc: "TEA e S21 certificado, garantindo os mais altos padrões no cuidado e entretenimento infantil.",
        experienceTitle: "Experiência Profissional",
        experienceDesc: "Vasta experiência trabalhando com crianças de todas as idades, criando ambientes seguros e envolventes.",
        passion: "Paixão pelas Crianças",
        passionDesc: "Amor genuíno por trabalhar com crianças, criando momentos mágicos que inspiram criatividade e alegria."
      },
      cta: {
        title: "Pronto para Conhecer Ted?",
        subtitle: "Vamos criar memórias mágicas para as suas crianças juntos!",
        contact: "Contactar Ted",
        services: "Explorar Serviços"
      },
      certified: "Profissional Certificado",
      certifiedDesc: "Ted traz formação profissional e paixão genuína juntas para criar experiências inesquecíveis para crianças."
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
        thankYou: "Obrigado! Ted entrará em contacto consigo em breve. Para resposta imediata, use WhatsApp.",
        whatsappMessage: "Olá Ted! Estou interessado nos seus serviços. Podemos conversar?",
        required: "Obrigatório",
        services: {
          select: "Selecione um serviço",
          babysitting: "Babysitting",
          birthday: "Festa Aniversário"
          other: "Outro"
        }
      },
      calendar: {
        days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        selected: "Selecionado: {date}",
        selectDate: "Selecione uma data"
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
      from: "A partir de",
      selected: "Selecionado",
      chooseTheme: "Escolher Este Tema",
      choosePackage: "Escolher Pacote",
      chooseLevel: "Escolher Nível",
      whatIncluded: "O Que Está Incluído",
      testimonials: "O Que as Famílias Dizem",
      testimonialsSub: "Histórias reais de famílias felizes",
      readyForMagic: "Prontos para um Pouco de Magia?",
      bookToday: "Reserve Ted hoje e crie memórias inesquecíveis para as suas crianças!",
      // System texts
      loading: "A carregar...",
      error: "Erro",
      success: "Sucesso",
      required: "Obrigatório",
      optional: "Opcional",
      submit: "Submeter",
      cancel: "Cancelar",
      close: "Fechar",
      next: "Próximo",
      previous: "Anterior",
      // Service specific
      chooseThisTheme: "Escolher Este Tema",
      selectedTheme: "Selecionado! 🎉",
      choosePackage: "Escolher Pacote",
      chooseLevel: "Escolher Nível",
      bookFirstLesson: "Reservar Primeira Aula",
      askQuestions: "Fazer Perguntas",
      // Date/Time
      days: {
        monday: "Segunda",
        tuesday: "Terça", 
        wednesday: "Quarta",
        thursday: "Quinta",
        friday: "Sexta",
        saturday: "Sábado",
        sunday: "Domingo"
      },
      months: {
        january: "Janeiro",
        february: "Fevereiro",
        march: "Março",
        april: "Abril", 
        may: "Maio",
        june: "Junho",
        july: "Julho",
        august: "Agosto",
        september: "Setembro",
        october: "Outubro",
        november: "Novembro", 
        december: "Dezembro"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      babysitting: "Babysitting",
      birthdays: "Birthday Parties", 
      about: "About Ted",
      contact: "Contact"
    },
    hero: {
      title: "Fun with Ted!",
      subtitle: "Babysitting, birthday parties",
      cta: "Discover Services",
      checkAvailability: "Check Availability"
    },
    services: {
      title: "Magical Services",
      subtitle: "From babysitting adventures to birthday Ted makes every moment special!",
      babysitting: {
        title: "Babysitting with Ted",
        description: "Professional babysitting services with creative activities, games, and lots of laughter!",
        schedule: "Flexible hours available",
        location: "Algarve",
        season: "Available year-round",
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
          subtitle: "For your children with professional babysitting!",
          book: "Check Availability",
          contact: "Contact Ted"
        }
      },
      birthdays: {
        title: "Birthday Parties",
        description: "Unforgettable themed birthday parties filled with magic, games, and endless fun!",
        themes: {
          title: "Amazing Party Themes",
          subtitle: "Choose the perfect theme for your special celebration",
          magical: {
            name: "Magical Adventure",
            description: "Wizards, fairies, and magical creatures",
            activities: ["Magic tricks", "Fairy tale games", "Treasure hunt"]
          },
          creative: {
            name: "Creative Art Party",
            description: "Painting, crafting, and creative expression",
            activities: ["Face painting", "Arts & crafts", "DIY decorations"]
          },
          adventure: {
            name: "Adventure Explorer",
            description: "Outdoor games and exploration",
            activities: ["Obstacle courses", "Nature scavenger hunt", "Team games"]
          }
        },
        packages: {
          title: "Party Packages",
          subtitle: "Choose the perfect package for your celebration",
          basic: {
            name: "Basic Magic",
            description: "Perfect starter party",
            features: ["Up to 8 kids", "2 hours of fun", "Basic decorations", "Games & activities", "Music playlist"]
          },
          premium: {
            name: "Premium Adventure",
            description: "Most popular choice",
            features: ["Up to 12 kids", "3 hours of magic", "Premium decorations", "Interactive games", "Professional photos", "Themed activities"]
          },
          deluxe: {
            name: "Deluxe Spectacular",
            description: "Ultimate party experience",
            features: ["Up to 15 kids", "4 hours complete", "Full decorations setup", "Multiple activities", "Photo & video", "Custom theme creation", "Surprise elements"]
          }
        },
        included: {
          title: "Every Party Includes",
          subtitle: "Standard inclusions in all birthday party packages",
          decorations: {
            title: "Decorations",
            desc: "Themed decorations and setup"
          },
          entertainment: {
            title: "Entertainment",
            desc: "Music and interactive games"
          },
          memories: {
            title: "Memories",
            desc: "Photos of special moments"
          },
          activities: {
            title: "Activities",
            desc: "Age-appropriate fun activities"
          }
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
          beginner: {
            name: "Beginner",
            description: "First steps on wheels",
            skills: ["Balance and posture", "Basic pushing", "Safe falling techniques"]
          },
          intermediate: {
            name: "Intermediate", 
            description: "Building confidence",
            skills: ["Turning and stopping", "Speed control", "Basic tricks"]
          },
          advanced: {
            name: "Advanced",
            description: "Master the board",
            skills: ["Advanced tricks", "Ramp riding", "Style development"]
          }
        },
        packages: {
          title: "Lesson Packages",
          subtitle: "Choose the perfect package for your skating goals",
          single: {
            title: "Single Lesson",
            description: "Perfect for trying out",
            features: ["1 hour session", "All equipment included", "Personal attention", "Safety gear provided"]
          },
          package4: {
            title: "4 Lesson Package",
            description: "Great value option",
            features: ["4 x 1 hour sessions", "Progressive skill building", "Equipment included", "Track your progress"]
          },
          package8: {
            title: "8 Lesson Course",
            description: "Complete mastery path",
            features: ["8 x 1 hour sessions", "From beginner to advanced", "Equipment included", "Certificate completion"]
          },
          group: {
            title: "Group Lessons",
            description: "Fun with friends",
            features: ["Minimum 4 people", "Shared experience", "Team building", "Great for parties"]
          }
        },
        safety: {
          title: "Safety & Equipment",
          subtitle: "Your safety is our top priority",
          safetyFirst: {
            title: "Safety First",
            desc: "Professional safety instruction"
          },
          expertTeaching: {
            title: "Expert Teaching", 
            desc: "Experienced and certified instructor"
          },
          qualityEquipment: {
            title: "Quality Equipment",
            desc: "Professional skateboards and gear"
          },
          provenMethod: {
            title: "Proven Method",
            desc: "Progressive learning approach"
          }
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
      bio: "Hi! I'm Ted, I'm 23 years old and I came from Brazil to be an entertainer in Portugal. I'm an entertainer by love and a passionate skate teacher. With certifications in TEA and S21, I bring creativity, energy, and genuine care to every interaction with children. I love hugs and believe children should play and create memories instead of spending all day on their phones. My goal is to create magical moments that children will remember forever!",
      stats: {
        title: "Ted by the Numbers",
        happyKids: "Happy Children",
        avgRating: "Average Rating", 
        experience: "Years Experience",
        parties: "Parties Organized",
        languages: "Languages"
      },
      languages: {
        title: "Languages Spoken",
        subtitle: "Communicating with families from around the world"
      },
      specialties: {
        title: "Ted's Specialties",
        subtitle: "What makes Ted special in children's entertainment",
        creative: "Creative Activities",
        creativeDesc: "Arts, crafts, and imaginative play",
        educational: "Educational Games",
        educationalDesc: "Learning through fun and interaction",
        outdoor: "Outdoor Adventures",
        outdoorDesc: "Safe exploration and active play",
        arts: "Arts & Crafts",
        artsDesc: "Hands-on creative projects"
      },
      experience: {
        title: "Experience & Qualifications",
        certifications: "Professional Certifications",
        certificationsDesc: "TEA and S21 certified, ensuring the highest standards in children's care and entertainment.",
        experienceTitle: "Professional Experience",
        experienceDesc: "Extensive experience working with children of all ages, creating safe and engaging environments.",
        passion: "Passion for Children",
        passionDesc: "Genuine love for working with children, creating magical moments that inspire creativity and joy."
      },
      cta: {
        title: "Ready to Meet Ted?",
        subtitle: "Let's create magical memories for your children together!",
        contact: "Contact Ted",
        services: "Explore Services"
      },
      certified: "Certified Professional",
      certifiedDesc: "Ted brings professional training and genuine passion together to create unforgettable experiences for children."
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
        thankYou: "Thank you! Ted will contact you soon. For immediate response, please use WhatsApp.",
        whatsappMessage: "Hi Ted! I'm interested in your services. Can we chat?",
        required: "Required",
        services: {
          select: "Select a service",
          babysitting: "Babysitting",
          birthday: "Birthday Party",
          skate: "Skate Lessons",
          other: "Other"
        }
      },
      calendar: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        selected: "Selected: {date}",
        selectDate: "Select a date"
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
      from: "From",
      selected: "Selected",
      chooseTheme: "Choose This Theme",
      choosePackage: "Choose Package",
      chooseLevel: "Choose Level",
      whatIncluded: "What's Included",
      testimonials: "What Families Say",
      testimonialsSub: "Real stories from happy families",
      readyForMagic: "Ready for Some Magic?",
      bookToday: "Book Ted today and create unforgettable memories for your children!",
      // System texts
      loading: "Loading...",
      error: "Error",
      success: "Success",
      required: "Required",
      optional: "Optional",
      submit: "Submit",
      cancel: "Cancel",
      close: "Close",
      next: "Next",
      previous: "Previous",
      // Service specific
      chooseThisTheme: "Choose This Theme",
      selectedTheme: "Selected! 🎉",
      choosePackage: "Choose Package",
      chooseLevel: "Choose Level",
      bookFirstLesson: "Book First Lesson",
      askQuestions: "Ask Questions",
      // Date/Time
      days: {
        monday: "Monday",
        tuesday: "Tuesday", 
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
      },
      months: {
        january: "January",
        february: "February",
        march: "March",
        april: "April", 
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November", 
        december: "December"
      }
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
      bio: "¡Hola! Soy Ted, tengo 23 años y vine de Brasil para ser animador en Portugal. Soy un animador por amor y profesor de skate apasionado. Con certificaciones en TEA y S21, traigo creatividad, energía y cuidado genuino a cada interacción con niños. Amo los abrazos y creo que los niños deben jugar y crear recuerdos en lugar de pasar todo el día en sus teléfonos. ¡Mi objetivo es crear momentos mágicos que los niños recordarán para siempre!",
      stats: {
        title: "Ted en Números",
        happyKids: "Niños Felices",
        avgRating: "Calificación Promedio", 
        experience: "Años de Experiencia",
        parties: "Fiestas Organizadas",
        languages: "Idiomas"
      },
      languages: {
        title: "Idiomas Hablados",
        subtitle: "Comunicándose con familias de todo el mundo"
      },
      specialties: {
        title: "Especialidades de Ted",
        subtitle: "Lo que hace especial a Ted en el entretenimiento infantil",
        creative: "Actividades Creativas",
        creativeDesc: "Artes, manualidades y juego imaginativo",
        educational: "Juegos Educativos",
        educationalDesc: "Aprendizaje a través de la diversión e interacción",
        outdoor: "Aventuras al Aire Libre",
        outdoorDesc: "Exploración segura y juego activo",
        arts: "Artes y Manualidades",
        artsDesc: "Proyectos creativos prácticos"
      },
      experience: {
        title: "Experiencia y Calificaciones",
        certifications: "Certificaciones Profesionales",
        certificationsDesc: "Certificado TEA y S21, garantizando los más altos estándares en el cuidado y entretenimiento de niños.",
        experienceTitle: "Experiencia Profesional",
        experienceDesc: "Amplia experiencia trabajando con niños de todas las edades, creando ambientes seguros y atractivos.",
        passion: "Pasión por los Niños",
        passionDesc: "Amor genuino por trabajar con niños, creando momentos mágicos que inspiran creatividad y alegría."
      },
      cta: {
        title: "¿Listo para Conocer a Ted?",
        subtitle: "¡Vamos a crear recuerdos mágicos para tus niños juntos!",
        contact: "Contactar Ted",
        services: "Explorar Servicios"
      },
      certified: "Profesional Certificado",
      certifiedDesc: "Ted combina formación profesional y pasión genuina para crear experiencias inolvidables para los niños."
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
      bio: "Salut! Je suis Ted, j'ai 23 ans et je suis venu du Brésil pour être animateur au Portugal. Je suis un animateur par amour et professeur de skate passionné. Avec des certifications en TEA et S21, j'apporte créativité, énergie et soin véritable à chaque interaction avec les enfants. J'aime les câlins et je crois que les enfants devraient jouer et créer des souvenirs au lieu de passer toute la journée sur leurs téléphones. Mon objectif est de créer des moments magiques dont les enfants se souviendront pour toujours!",
      stats: {
        title: "Ted en Chiffres",
        happyKids: "Enfants Heureux",
        avgRating: "Note Moyenne", 
        experience: "Années d'Expérience",
        parties: "Fêtes Organisées",
        languages: "Langues"
      },
      languages: {
        title: "Langues Parlées",
        subtitle: "Communiquant avec des familles du monde entier"
      },
      specialties: {
        title: "Spécialités de Ted",
        subtitle: "Ce qui rend Ted spécial dans le divertissement pour enfants",
        creative: "Activités Créatives",
        creativeDesc: "Arts, artisanat et jeu imaginatif",
        educational: "Jeux Éducatifs",
        educationalDesc: "Apprentissage par le plaisir et l'interaction",
        outdoor: "Aventures en Plein Air",
        outdoorDesc: "Exploration sûre et jeu actif",
        arts: "Arts et Artisanat",
        artsDesc: "Projets créatifs pratiques"
      },
      experience: {
        title: "Expérience et Qualifications",
        certifications: "Certifications Professionnelles",
        certificationsDesc: "Certifié TEA et S21, garantissant les plus hauts standards dans les soins et le divertissement des enfants.",
        experienceTitle: "Expérience Professionnelle",
        experienceDesc: "Vaste expérience de travail avec des enfants de tous âges, créant des environnements sûrs et engageants.",
        passion: "Passion pour les Enfants",
        passionDesc: "Amour véritable pour travailler avec les enfants, créant des moments magiques qui inspirent la créativité et la joie."
      },
      cta: {
        title: "Prêt à Rencontrer Ted?",
        subtitle: "Créons ensemble des souvenirs magiques pour vos enfants!",
        contact: "Contacter Ted",
        services: "Explorer Services"
      },
      certified: "Professionnel Certifié",
      certifiedDesc: "Ted apporte formation professionnelle et passion véritable ensemble pour créer des expériences inoubliables pour les enfants."
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
