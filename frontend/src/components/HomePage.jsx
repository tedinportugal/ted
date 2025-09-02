import React, { useState, useEffect } from 'react';
import { Star, Heart, Calendar, Users, Zap, Award } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText, ConfettiEffect } from './MagicalElements';

const HomePage = ({ currentLanguage, setCurrentPage }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const t = languages[currentLanguage];
  const tedRealPhoto = "https://customer-assets.emergentagent.com/job_skate-party/artifacts/pg049z35_5D7B8BF4-317A-4305-A85C-42BA646C6DC4.png";

  useEffect(() => {
    // Show confetti on page load
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Create service data with proper translations
  const getServiceFeatures = (serviceKey, currentLang) => {
    const translations = {
      babysitting: {
        pt: ['Atividades criativas', 'Seguro e divertido', 'Todas as idades'],
        en: ['Creative activities', 'Safe & fun', 'All ages'],
        es: ['Actividades creativas', 'Seguro y divertido', 'Todas las edades'],
        fr: ['Activités créatives', 'Sûr et amusant', 'Tous âges']
      },
      birthdays: {
        pt: ['Festas temáticas', 'Decorações incluídas', 'Momentos mágicos'],
        en: ['Themed parties', 'Decorations included', 'Magical moments'],
        es: ['Fiestas temáticas', 'Decoraciones incluidas', 'Momentos mágicos'],
        fr: ['Fêtes thématiques', 'Décorations incluses', 'Moments magiques']
      },
      skate: {
        pt: ['Todos os níveis', 'Equipamento incluído', 'Segurança primeiro'],
        en: ['All skill levels', 'Equipment included', 'Safety first'],
        es: ['Todos los niveles', 'Equipo incluido', 'Seguridad primero'],
        fr: ['Tous niveaux', 'Équipement inclus', 'Sécurité d\'abord']
      }
    };
    return translations[serviceKey][currentLang] || translations[serviceKey]['en'];
  };

  const getServicePrices = (serviceKey, currentLang) => {
    const priceTranslations = {
      babysitting: {
        pt: `${t.common.from} 30€/hora`,
        en: `${t.common.from} 30€/hour`, 
        es: `${t.common.from} 30€/hora`,
        fr: `${t.common.from} 30€/heure`
      },
      birthdays: {
        pt: `${t.common.from} 120€/festa`,
        en: `${t.common.from} 120€/party`,
        es: `${t.common.from} 120€/fiesta`, 
        fr: `${t.common.from} 120€/fête`
      },
      skate: {
        pt: `${t.common.from} 25€/aula`,
        en: `${t.common.from} 25€/lesson`,
        es: `${t.common.from} 25€/clase`,
        fr: `${t.common.from} 25€/cours`
      }
    };
    return priceTranslations[serviceKey][currentLang] || priceTranslations[serviceKey]['en'];
  };

  const services = [
    {
      key: 'babysitting',
      title: t.services.babysitting.title,
      description: t.services.babysitting.description,
      icon: Heart,
      color: 'from-pink-400 to-pink-600',
      price: getServicePrices('babysitting', currentLanguage),
      features: getServiceFeatures('babysitting', currentLanguage)
    },
    {
      key: 'birthdays',
      title: t.services.birthdays.title,
      description: t.services.birthdays.description,
      icon: Star,
      color: 'from-purple-400 to-purple-600',
      price: getServicePrices('birthdays', currentLanguage),
      features: getServiceFeatures('birthdays', currentLanguage)
    },
    {
      key: 'skate',
      title: t.services.skate.title,
      description: t.services.skate.description,
      icon: Zap,
      color: 'from-blue-400 to-blue-600',
      price: getServicePrices('skate', currentLanguage),
      features: getServiceFeatures('skate', currentLanguage)
    }
  ];

  return (
    <div className="min-h-screen">
      <ConfettiEffect active={showConfetti} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-100 via-teal-50 to-purple-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="bubble-text text-5xl md:text-7xl font-bold mb-6">
              <GradientText>{t.hero.title}</GradientText>
            </h1>
            <p className="soft-text text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <MagicalButton
                onClick={() => setCurrentPage('babysitting')}
                className="text-lg px-8 py-4"
              >
                {t.hero.cta}
              </MagicalButton>
              
              <MagicalButton
                onClick={() => setCurrentPage('contact')}
                variant="outline"
                className="text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.hero.checkAvailability}
              </MagicalButton>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-orange-600">{t.common.happyKids}</div>
                <div className="soft-text text-gray-600">{t.about.stats.happyKids}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-teal-600">{t.common.rating}</div>
                <div className="soft-text text-gray-600">{t.about.stats.avgRating}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-purple-600">{t.common.yearsExp}</div>
                <div className="soft-text text-gray-600">{t.about.stats.experience}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements - fixed positions */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-gentle-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-25"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="bubble-text text-4xl md:text-5xl font-bold mb-4">
              <GradientText>{t.services.title}</GradientText>
            </h2>
            <p className="soft-text text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.key}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-4 border-transparent hover:border-orange-200 overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="bubble-text text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="soft-text text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{service.price}</div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <MagicalButton
                      onClick={() => setCurrentPage(service.key)}
                      className="w-full"
                      variant="secondary"
                    >
                      {t.common.learnMore}
                    </MagicalButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="bubble-text text-4xl font-bold mb-6">
                <GradientText>{t.about.title}</GradientText>
              </h2>
              <p className="soft-text text-lg text-gray-700 mb-6 leading-relaxed">
                {mockData.about.bio.substring(0, 200)}...
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {mockData.about.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="soft-text font-medium text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>

              <MagicalButton onClick={() => setCurrentPage('about')}>
                {t.about.cta.contact}
              </MagicalButton>
            </div>

            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
                    <img
                      src={tedRealPhoto}
                      alt="Ted - Your Children's Entertainer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Fixed decorative elements around Ted's photo */}
                  <div className="absolute -top-6 -right-6 text-4xl">⭐</div>
                  <div className="absolute -bottom-6 -left-6 text-4xl">🎈</div>
                  <div className="absolute top-1/2 -left-8 text-3xl animate-glow">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="bubble-text text-4xl font-bold mb-4">
              <GradientText>{t.about.testimonials || "What Families Say"}</GradientText>
            </h2>
            <p className="soft-text text-xl text-gray-600">{t.about.testimonialsSub || "Real stories from happy families"}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-400"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-teal-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="bubble-text text-4xl font-bold text-white mb-6 animate-gentle-pulse">
            {t.hero.ctaTitle || "Ready for Some Magic?"}
          </h2>
          <p className="soft-text text-xl text-orange-100 mb-8">
            {t.hero.ctaSubtitle || "Book Ted today and create unforgettable memories for your children!"}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              {t.common.getStarted}
            </MagicalButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;