import React, { useState } from 'react';
import { Star, Gift, Users, Calendar, Cake, Music, Camera, Palette } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText, ConfettiEffect } from './MagicalElements';

const BirthdaysPage = ({ currentLanguage, setCurrentPage }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const service = mockData.services.birthdays;
  const t = languages[currentLanguage];
  const tedRealPhoto = "https://customer-assets.emergentagent.com/job_skate-party/artifacts/pg049z35_5D7B8BF4-317A-4305-A85C-42BA646C6DC4.png";

  const handleThemeSelect = (index) => {
    setSelectedTheme(index);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const packages = [
    {
      name: 'Basic Magic',
      price: service.pricing.basic,
      description: 'Perfect starter party',
      features: ['Up to 8 kids', '2 hours of fun', 'Basic decorations', 'Games & activities', 'Music playlist'],
      color: 'from-blue-400 to-blue-600',
      popular: false
    },
    {
      name: 'Premium Adventure',
      price: service.pricing.premium,
      description: 'Most popular choice',
      features: ['Up to 12 kids', '3 hours of magic', 'Premium decorations', 'Interactive games', 'Professional photos', 'Themed activities'],
      color: 'from-purple-400 to-purple-600',
      popular: true
    },
    {
      name: 'Deluxe Spectacular',
      price: service.pricing.deluxe,
      description: 'Ultimate party experience',
      features: ['Up to 15 kids', '4 hours complete', 'Full decorations setup', 'Multiple activities', 'Photo & video', 'Custom theme creation', 'Surprise elements'],
      color: 'from-orange-400 to-pink-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <ConfettiEffect active={showConfetti} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6 animate-bounce">
              <Star className="w-10 h-10 text-white fill-current" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText>{service.title}</GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {service.included.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                  <Gift className="w-4 h-4 text-purple-500" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating party elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-60">🎈</div>
        <div className="absolute top-32 right-20 text-4xl animate-spin opacity-60">🎂</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-pulse opacity-60">🎁</div>
        <div className="absolute bottom-32 right-16 text-4xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>🎊</div>
      </section>

      {/* Party Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Amazing Party Themes</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Choose the perfect theme for your special celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.themes.map((theme, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-gradient-to-br p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  selectedTheme === index
                    ? 'from-purple-100 to-pink-100 border-4 border-purple-400 scale-105'
                    : 'from-white to-gray-50 border-4 border-transparent hover:border-purple-200'
                }`}
                onClick={() => handleThemeSelect(index)}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce">
                    {index === 0 ? '🪄' : index === 1 ? '🎨' : '🗺️'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{theme.name}</h3>
                  <p className="text-gray-600 mb-4">{theme.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-2">Activities Include:</h4>
                  {theme.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <MagicalButton
                    onClick={() => handleThemeSelect(index)}
                    className="w-full"
                    variant={selectedTheme === index ? "primary" : "outline"}
                  >
                    {selectedTheme === index ? (t.common.selectedTheme || "Selected! 🎉") : (t.common.chooseThisTheme || "Choose This Theme")}
                  </MagicalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Party Packages</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden ${
                  pkg.popular ? 'border-4 border-purple-400 scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      Most Popular ⭐
                    </div>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-purple-600">{pkg.price}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <MagicalButton
                    onClick={() => setCurrentPage('contact')}
                    className="w-full"
                    variant={pkg.popular ? "primary" : "secondary"}
                  >
                    {t.common.choosePackage || "Choose Package"}
                  </MagicalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included with Ted's Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl overflow-hidden border-8 border-white shadow-2xl mx-auto">
                    <img
                      src={tedRealPhoto}
                      alt="Ted - Your Party Host"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Fixed decorative elements around Ted's photo */}
                  <div className="absolute -top-4 -right-4 text-4xl">🎂</div>
                  <div className="absolute -bottom-4 -left-4 text-4xl">🎁</div>
                  <div className="absolute top-1/2 -left-8 text-3xl animate-glow">🎉</div>
                  <div className="absolute bottom-1/4 -right-8 text-3xl">🎊</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="bubble-text text-4xl font-bold mb-4">
                <GradientText>{t.services.birthdays.included?.title || "Every Party Includes"}</GradientText>
              </h2>
              <p className="soft-text text-xl text-gray-600 mb-8">{t.services.birthdays.included?.subtitle || "Standard inclusions in all birthday party packages"}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Palette, title: t.services.birthdays.included?.decorations?.title || 'Decorations', desc: t.services.birthdays.included?.decorations?.desc || 'Themed decorations and setup' },
                  { icon: Music, title: t.services.birthdays.included?.entertainment?.title || 'Entertainment', desc: t.services.birthdays.included?.entertainment?.desc || 'Music and interactive games' },
                  { icon: Camera, title: t.services.birthdays.included?.memories?.title || 'Memories', desc: t.services.birthdays.included?.memories?.desc || 'Photos of special moments' },
                  { icon: Cake, title: t.services.birthdays.included?.activities?.title || 'Activities', desc: t.services.birthdays.included?.activities?.desc || 'Age-appropriate fun activities' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="bubble-text text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="soft-text text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 animate-pulse">
            Ready for the Ultimate Birthday Party? 🎉
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let Ted create magical memories that your child will treasure forever!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </MagicalButton>
            
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Ask Questions
            </MagicalButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdaysPage;