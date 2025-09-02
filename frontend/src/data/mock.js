// Mock data for Ted's website
export const mockData = {
  services: {
    babysitting: {
      title: "Babysitting with Ted",
      description: "Professional and fun babysitting services with creative activities, games, and lots of laughter!",
      features: [
        "Creative activities and games",
        "Face painting and arts & crafts",
        "Educational play time",
        "Outdoor adventures",
        "Healthy snacks preparation",
        "Bedtime stories and routines"
      ],
      pricing: {
        hourly: "15€/hour",
        halfDay: "50€/4 hours",
        fullDay: "90€/8 hours",
        overnight: "120€/night"
      },
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
    email: "ted@tedinportugal.com",
    phone: "+351936331843",
    instagram: "@tedinportugal",
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
      cta: "Descobre os Serviços"
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
      cta: "Discover Services"
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
      cta: "Descubre Servicios"
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
      cta: "Découvrir Services"
    }
  }
};