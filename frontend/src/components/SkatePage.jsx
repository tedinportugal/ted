import React, { useState } from 'react';
import { Zap, Shield, Trophy, Users, Calendar, CheckCircle, Star } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText } from './MagicalElements';

const SkatePage = ({ currentLanguage, setCurrentPage }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const service = mockData.services.skate;
  const t = languages[currentLanguage];
  const tedRealPhoto = "https://customer-assets.emergentagent.com/job_skate-party/artifacts/pg049z35_5D7B8BF4-317A-4305-A85C-42BA646C6DC4.png";

  const pricingOptions = [
    {
      type: 'single',
      title: 'Single Lesson',
      price: service.pricing.single,
      description: 'Perfect for trying out',
      features: ['1 hour session', 'All equipment included', 'Personal attention', 'Safety gear provided'],
      popular: false,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'package4',
      title: '4 Lesson Package',
      price: service.pricing.package4,
      description: 'Great value option',
      features: ['4 x 1 hour sessions', 'Progressive skill building', 'Equipment included', 'Track your progress'],
      popular: true,
      color: 'from-purple-400 to-purple-600'
    },
    {
      type: 'package8',
      title: '8 Lesson Course',
      price: service.pricing.package8,
      description: 'Complete mastery path',
      features: ['8 x 1 hour sessions', 'From beginner to advanced', 'Equipment included', 'Certificate completion'],
      popular: false,
      color: 'from-orange-400 to-red-500'
    },
    {
      type: 'group',
      title: 'Group Lessons',
      price: service.pricing.group,
      description: 'Fun with friends',
      features: ['Minimum 4 people', 'Shared experience', 'Team building', 'Great for parties'],
      popular: false,
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 animate-bounce">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText>{service.title}</GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700">Safety First</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-gray-700">{service.equipment}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating skate elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-60">🛹</div>
        <div className="absolute top-32 right-20 text-4xl animate-spin opacity-60" style={{ animationDuration: '4s' }}>⚡</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-pulse opacity-60">🏆</div>
        <div className="absolute bottom-32 right-16 text-4xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>🎯</div>
      </section>

      {/* Skill Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Skill Levels</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Find the perfect level for your skating journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.levels.map((level, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-gradient-to-br p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  selectedLevel === index
                    ? 'from-blue-100 to-purple-100 border-4 border-blue-400 scale-105'
                    : 'from-white to-gray-50 border-4 border-transparent hover:border-blue-200'
                }`}
                onClick={() => setSelectedLevel(index)}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{level.name}</h3>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-2">You'll Learn:</h4>
                  {level.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <MagicalButton
                    onClick={() => setSelectedLevel(index)}
                    className="w-full"
                    variant={selectedLevel === index ? "primary" : "outline"}
                  >
                    {selectedLevel === index ? "Selected! 🛹" : "Choose Level"}
                  </MagicalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Lesson Packages</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your skating goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden ${
                  option.popular ? 'border-4 border-purple-400 scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                      Popular ⭐
                    </div>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${option.color}`}></div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                    <div className="text-3xl font-bold text-blue-600">{option.price}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <MagicalButton
                    onClick={() => setCurrentPage('contact')}
                    className="w-full text-sm px-4 py-2"
                    variant={option.popular ? "primary" : "secondary"}
                  >
                    Book Now
                  </MagicalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Equipment with Ted's Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="bubble-text text-4xl font-bold mb-4">
                <GradientText>{t.services.skate.safety?.title || "Safety & Equipment"}</GradientText>
              </h2>
              <p className="soft-text text-xl text-gray-600 mb-8">{t.services.skate.safety?.subtitle || "Your safety is our top priority"}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Shield, title: t.services.skate.safety?.safetyFirst?.title || 'Safety First', desc: t.services.skate.safety?.safetyFirst?.desc || 'Professional safety instruction', color: 'text-green-500' },
                  { icon: Users, title: t.services.skate.safety?.expertTeaching?.title || 'Expert Teaching', desc: t.services.skate.safety?.expertTeaching?.desc || 'Experienced and certified instructor', color: 'text-blue-500' },
                  { icon: Trophy, title: t.services.skate.safety?.qualityEquipment?.title || 'Quality Equipment', desc: t.services.skate.safety?.qualityEquipment?.desc || 'Professional skateboards and gear', color: 'text-orange-500' },
                  { icon: Star, title: t.services.skate.safety?.provenMethod?.title || 'Proven Method', desc: t.services.skate.safety?.provenMethod?.desc || 'Progressive learning approach', color: 'text-purple-500' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="bubble-text text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="soft-text text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl overflow-hidden border-8 border-white shadow-2xl mx-auto">
                    <img
                      src={tedRealPhoto}
                      alt="Ted - Your Skate Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Fixed decorative elements around Ted's photo */}
                  <div className="absolute -top-4 -right-4 text-4xl">🛹</div>
                  <div className="absolute -bottom-4 -left-4 text-4xl">⚡</div>
                  <div className="absolute top-1/2 -left-8 text-3xl animate-glow">🏆</div>
                  <div className="absolute bottom-1/4 -right-8 text-3xl">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 animate-pulse">
            Ready to Roll? 🛹
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your skating journey with Ted and master the board with confidence!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book First Lesson
            </MagicalButton>
            
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
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

export default SkatePage;