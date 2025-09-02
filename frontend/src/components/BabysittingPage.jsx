import React, { useState } from 'react';
import { Heart, Clock, Users, Star, MapPin, Calendar, Sparkles } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText } from './MagicalElements';

const BabysittingPage = ({ currentLanguage, setCurrentPage }) => {
  const [selectedChildren, setSelectedChildren] = useState('1child');
  const service = mockData.services.babysitting;
  const t = languages[currentLanguage];

  const childrenOptions = [
    { key: '1child', label: '1 Child', emoji: '👶' },
    { key: '2children', label: '2 Children', emoji: '👶👶' },
    { key: '3children', label: 'Up to 3 Children', emoji: '👶👶👶' },
    { key: '5children', label: 'Up to 5 Children', emoji: '👶👶👶👶👶' },
    { key: '8children', label: 'Up to 8 Children', emoji: '👶👶👶👶👶👶👶👶' }
  ];

  const timeOptions = [
    { key: '1hour', label: '1 Hour', duration: '1h' },
    { key: '2hours', label: '2 Hours', duration: '2h' },
    { key: '3hours', label: '3 Hours', duration: '3h' },
    { key: '4hours', label: '4 Hours', duration: '4h' },
    { key: '6hours', label: '6 Hours Complete', duration: '6h' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full mb-6 animate-gentle-pulse">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText>{service.title}</GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="font-semibold text-gray-700">{service.schedule}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-gray-700">{service.location}</span>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-lg inline-block">
              <p className="text-orange-800 font-medium">
                <Star className="w-4 h-4 inline mr-2" />
                {service.season}
              </p>
            </div>
          </div>
        </div>

        {/* Floating magical elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-60">🎈</div>
        <div className="absolute top-32 right-20 text-4xl animate-pulse opacity-60">⭐</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>🧸</div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Pricing Calculator</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Select the number of children and duration to see pricing</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            {/* Children Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Number of Children</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {childrenOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedChildren(option.key)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedChildren === option.key
                        ? 'border-purple-500 bg-purple-100 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{option.emoji}</div>
                    <div className="font-semibold text-gray-700">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="bubble-text text-2xl font-bold text-gray-800 mb-6 text-center">Pricing for {childrenOptions.find(opt => opt.key === selectedChildren)?.label}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {timeOptions.map((time) => (
                  <div
                    key={time.key}
                    className="text-center p-6 bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-lg font-semibold text-gray-700 mb-2">{time.label}</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {service.pricing[selectedChildren]?.[time.key] || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-500">{time.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Activities */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>What's Included</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Every babysitting session includes these amazing activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Workshops */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Creative Workshops</GradientText>
            </h2>
            <p className="text-xl text-gray-600">Optional add-on activities for extra fun!</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Beading Workshop (Miçangas)</h3>
                <p className="text-lg text-gray-600 mb-6">{service.workshops.micangas.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="font-medium">1 Child</span>
                    <span className="text-xl font-bold text-orange-600">{service.workshops.micangas['1child']}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="font-medium">2 Children</span>
                    <span className="text-xl font-bold text-orange-600">{service.workshops.micangas['2children']}</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="font-medium">Up to 8 Children</span>
                    <span className="text-xl font-bold text-orange-600">{service.workshops.micangas['8children']}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Duration: {service.workshops.micangas.duration}
                </p>
              </div>

              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-8xl animate-pulse">
                  🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-400 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 animate-pulse">
            Ready to Book Ted?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Create magical memories for your children with professional babysitting at Hotel Aquashow!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </MagicalButton>
            
            <MagicalButton
              onClick={() => setCurrentPage('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Ted
            </MagicalButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabysittingPage;