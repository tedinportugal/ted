import React from 'react';
import { Award, Heart, Star, Users, Globe, BookOpen, Shield, Sparkles } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText } from './MagicalElements';

const AboutPage = ({ currentLanguage, setCurrentPage }) => {
  const about = mockData.about;
  const t = languages[currentLanguage];
  const tedLogoUrl = "https://customer-assets.emergentagent.com/job_skate-party/artifacts/0195n2c4_1EFB7748-DA5F-4EA5-914F-2AC90C2B4BEB.png";

  const stats = [
    { number: t.common.happyKids, label: t.about.stats.happyKids, icon: Heart, color: 'text-pink-500' },
    { number: t.common.yearsExp, label: t.about.stats.experience, icon: Star, color: 'text-yellow-500' },
    { number: '4', label: t.about.stats.languages, icon: Globe, color: 'text-blue-500' },
    { number: '100+', label: t.about.stats.parties, icon: Users, color: 'text-purple-500' }
  ];

  const specialties = [
    { name: t.about.specialties.creative, icon: Sparkles, description: t.about.specialties.creativeDesc },
    { name: t.about.specialties.educational, icon: BookOpen, description: t.about.specialties.educationalDesc },
    { name: t.about.specialties.outdoor, icon: Shield, description: t.about.specialties.outdoorDesc },
    { name: t.about.specialties.arts, icon: Award, description: t.about.specialties.artsDesc }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-teal-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <GradientText>Meet Ted!</GradientText>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {about.bio}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {about.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
                    <Award className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagicalButton onClick={() => setCurrentPage('contact')}>
                  Get in Touch
                </MagicalButton>
                <MagicalButton 
                  onClick={() => setCurrentPage('home')}
                  variant="outline"
                >
                  See Services
                </MagicalButton>
              </div>
            </div>

            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
                    <img
                      src={tedLogoUrl}
                      alt="Ted"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating elements around Ted's photo */}
                  <div className="absolute -top-6 -right-6 text-4xl animate-bounce">⭐</div>
                  <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse">❤️</div>
                  <div className="absolute top-1/2 -left-12 text-3xl animate-spin" style={{ animationDuration: '4s' }}>🎈</div>
                  <div className="absolute top-1/4 -right-12 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🧸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Ted by the Numbers</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Creating magical moments across Portugal</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-orange-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Languages Spoken</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Communicating with families from around the world</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {about.languages.map((language, index) => {
              const flags = { 'Portuguese': '🇵🇹', 'English': '🇬🇧', 'Spanish': '🇪🇸', 'French': '🇫🇷' };
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {flags[language]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{language}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Ted's Specialties</GradientText>
            </h2>
            <p className="text-xl text-gray-600">What makes Ted special in children's entertainment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4">
                  <specialty.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{specialty.name}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <GradientText>Experience & Qualifications</GradientText>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Certifications</h3>
                    <p className="text-gray-600">TEA and S21 certified, ensuring the highest standards in children's care and entertainment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{about.experience}</h3>
                    <p className="text-gray-600">Extensive experience working with children of all ages, creating safe and engaging environments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion for Children</h3>
                    <p className="text-gray-600">Genuine love for working with children, creating magical moments that inspire creativity and joy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-teal-200 rounded-3xl p-8 text-center shadow-2xl">
                <div className="text-8xl mb-6 animate-bounce">🏆</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Certified Professional</h3>
                <p className="text-gray-600 mb-6">
                  Ted brings professional training and genuine passion together to create unforgettable experiences for children.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-2xl animate-pulse">⭐</div>
                  <div className="text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
                  <div className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
                  <div className="text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>⭐</div>
                  <div className="text-2xl animate-pulse" style={{ animationDelay: '2s' }}>⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-teal-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 animate-pulse">
            Ready to Meet Ted?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's create magical memories for your children together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Ted
            </MagicalButton>
            
            <MagicalButton
              onClick={() => setCurrentPage('home')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
            >
              Explore Services
            </MagicalButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;