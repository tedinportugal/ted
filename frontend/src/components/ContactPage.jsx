import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Calendar, Clock, Send, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText } from './MagicalElements';

const ContactPage = ({ currentLanguage }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    children: '',
    duration: ''
  });
  
  const contact = mockData.contact;
  const t = languages[currentLanguage];

  // Service options for booking
  const serviceOptions = [
    {
      id: 'babysitting',
      title: t.services.babysitting.title,
      description: t.services.babysitting.description,
      price: currentLanguage === 'pt' ? 'A partir de 30€/hora' : currentLanguage === 'es' ? 'Desde 30€/hora' : currentLanguage === 'fr' ? 'À partir de 30€/heure' : 'From 30€/hour',
      icon: '👶',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'birthdays',
      title: t.services.birthdays.title,
      description: t.services.birthdays.description,
      price: currentLanguage === 'pt' ? 'A partir de 120€/festa' : currentLanguage === 'es' ? 'Desde 120€/fiesta' : currentLanguage === 'fr' ? 'À partir de 120€/fête' : 'From 120€/party',
      icon: '🎉',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'skate',
      title: t.services.skate.title,
      description: t.services.skate.description,
      price: currentLanguage === 'pt' ? 'A partir de 25€/aula' : currentLanguage === 'es' ? 'Desde 25€/clase' : currentLanguage === 'fr' ? 'À partir de 25€/cours' : 'From 25€/lesson',
      icon: '🛹',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  // Generate mock calendar for next 30 days with translated day names
  const generateCalendar = () => {
    const days = [];
    const today = new Date();
    const unavailable = mockData.availability.unavailableDates;
    
    const dayNames = {
      pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    };
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      
      days.push({
        date: date,
        dateString: dateString,
        available: !unavailable.includes(dateString),
        dayName: dayNames[currentLanguage][date.getDay()],
        dayNumber: date.getDate()
      });
    }
    return days;
  };

  const calendarDays = generateCalendar();

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentStep(2);
  };

  const handleDateSelect = (day) => {
    if (day.available) {
      setSelectedDate(day);
      setCurrentStep(3);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
    
    // Mock booking confirmation
    setTimeout(() => {
      const selectedServiceData = serviceOptions.find(s => s.id === selectedService);
      const message = encodeURIComponent(
        `${t.contact.form.whatsappMessage || `Hi Ted! I'd like to book ${selectedServiceData?.title} for ${selectedDate?.date.toLocaleDateString()}. My details: ${formData.name}, ${formData.email}, ${formData.phone}. ${formData.message ? `Additional info: ${formData.message}` : ''}`}`
      );
      window.open(`https://wa.me/${contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
    }, 2000);
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return currentLanguage === 'pt' ? 'Escolha o Seu Serviço' : currentLanguage === 'es' ? 'Elige Tu Servicio' : currentLanguage === 'fr' ? 'Choisissez Votre Service' : 'Choose Your Service';
      case 2: return t.contact.availability.title;
      case 3: return currentLanguage === 'pt' ? 'Suas Informações' : currentLanguage === 'es' ? 'Tu Información' : currentLanguage === 'fr' ? 'Vos Informations' : 'Your Information';
      case 4: return currentLanguage === 'pt' ? 'Reserva Confirmada!' : currentLanguage === 'es' ? '¡Reserva Confirmada!' : currentLanguage === 'fr' ? 'Réservation Confirmée!' : 'Booking Confirmed!';
      default: return '';
    }
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contact.instagram.replace('@', '')}`, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi Ted! I would like to know more about your services.');
    window.open(`https://wa.me/${contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="bubble-text text-4xl md:text-5xl font-bold mb-4">
            <GradientText>{currentStep === 4 ? getStepTitle() : t.contact.title}</GradientText>
          </h1>
          <p className="soft-text text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            {currentStep === 4 
              ? (currentLanguage === 'pt' ? 'Ted entrará em contacto consigo em breve via WhatsApp!' 
                : currentLanguage === 'es' ? '¡Ted se pondrá en contacto contigo pronto vía WhatsApp!' 
                : currentLanguage === 'fr' ? 'Ted vous contactera bientôt via WhatsApp!'
                : 'Ted will contact you soon via WhatsApp!')
              : t.contact.subtitle
            }
          </p>

          {/* Progress Steps */}
          {currentStep < 4 && (
            <div className="flex justify-center items-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= step 
                        ? 'bg-orange-500 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-8 h-1 transition-all duration-300 ${
                        currentStep > step ? 'bg-orange-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <h2 className="bubble-text text-2xl font-bold text-gray-800 mb-8">{getStepTitle()}</h2>
        </div>
      </section>

      {/* Step Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Step 1: Choose Service */}
        {currentStep === 1 && (
          <div className="grid md:grid-cols-3 gap-8">
            {serviceOptions.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className="cursor-pointer bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-4 border-transparent hover:border-orange-200"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="bubble-text text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="soft-text text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-2xl font-bold text-orange-600">{service.price}</div>
                  </div>

                  <MagicalButton className="w-full" variant="secondary">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t.common.choosePackage || "Choose This Service"}
                  </MagicalButton>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Choose Date */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block bg-orange-100 rounded-full p-4 mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="bubble-text text-2xl font-bold text-gray-800 mb-2">
                  {selectedService && serviceOptions.find(s => s.id === selectedService)?.title}
                </h3>
                <p className="soft-text text-gray-600">
                  {currentLanguage === 'pt' ? 'Selecione uma data disponível' 
                    : currentLanguage === 'es' ? 'Selecciona una fecha disponible'
                    : currentLanguage === 'fr' ? 'Sélectionnez une date disponible'
                    : 'Select an available date'}
                </p>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {t.contact.calendar.days.map(day => (
                  <div key={day} className="bubble-text text-center font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-6">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!day.available}
                    className={`p-3 rounded-lg text-center transition-all duration-300 ${
                      day.available
                        ? 'bg-green-100 hover:bg-green-200 text-green-800 hover:scale-105 cursor-pointer'
                        : 'bg-red-100 text-red-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xs">{day.dayName}</div>
                    <div className="font-bold">{day.dayNumber}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 rounded"></div>
                  <span className="soft-text">{t.contact.availability.available}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 rounded"></div>
                  <span className="soft-text">{t.contact.availability.unavailable}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <MagicalButton onClick={goBack} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {currentLanguage === 'pt' ? 'Voltar' : currentLanguage === 'es' ? 'Volver' : currentLanguage === 'fr' ? 'Retour' : 'Back'}
                </MagicalButton>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-100 rounded-full p-4 mb-4">
                  <Send className="w-8 h-8 text-purple-600" />
                </div>
                <div className="bg-orange-50 rounded-2xl p-4 mb-6">
                  <p className="soft-text text-orange-800 font-semibold">
                    📅 {selectedDate?.date.toLocaleDateString(currentLanguage === 'pt' ? 'pt-PT' : currentLanguage === 'es' ? 'es-ES' : currentLanguage === 'fr' ? 'fr-FR' : 'en-GB', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="soft-text text-orange-600 text-sm">
                    {serviceOptions.find(s => s.id === selectedService)?.title}
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="bubble-text block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.name} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="soft-text w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="bubble-text block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.email} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="soft-text w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="bubble-text block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="soft-text w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="bubble-text block text-sm font-semibold text-gray-700 mb-2">
                      {selectedService === 'babysitting' 
                        ? (currentLanguage === 'pt' ? 'Número de Crianças' : currentLanguage === 'es' ? 'Número de Niños' : currentLanguage === 'fr' ? 'Nombre d\'Enfants' : 'Number of Children')
                        : (currentLanguage === 'pt' ? 'Duração Preferida' : currentLanguage === 'es' ? 'Duración Preferida' : currentLanguage === 'fr' ? 'Durée Préférée' : 'Preferred Duration')
                      }
                    </label>
                    <input
                      type="text"
                      name={selectedService === 'babysitting' ? 'children' : 'duration'}
                      value={selectedService === 'babysitting' ? formData.children : formData.duration}
                      onChange={handleInputChange}
                      placeholder={selectedService === 'babysitting' ? '1-8' : '1-4 hours'}
                      className="soft-text w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="bubble-text block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="soft-text w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors resize-none"
                    placeholder={t.contact.form.placeholder}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagicalButton onClick={goBack} variant="outline" className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {currentLanguage === 'pt' ? 'Voltar' : currentLanguage === 'es' ? 'Volver' : currentLanguage === 'fr' ? 'Retour' : 'Back'}
                  </MagicalButton>
                  
                  <MagicalButton type="submit" className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    {currentLanguage === 'pt' ? 'Confirmar Reserva' : currentLanguage === 'es' ? 'Confirmar Reserva' : currentLanguage === 'fr' ? 'Confirmer Réservation' : 'Confirm Booking'}
                  </MagicalButton>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-8xl mb-6 animate-gentle-pulse">🎉</div>
              <div className="text-6xl text-green-500 mb-6">
                <CheckCircle className="w-16 h-16 mx-auto" />
              </div>
              
              <h3 className="bubble-text text-3xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'pt' ? 'Reserva Enviada!' 
                  : currentLanguage === 'es' ? '¡Reserva Enviada!' 
                  : currentLanguage === 'fr' ? 'Réservation Envoyée!'
                  : 'Booking Sent!'}
              </h3>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <p className="soft-text text-green-800 mb-4">
                  <strong>{formData.name}</strong>, {currentLanguage === 'pt' ? 'a sua reserva foi enviada para Ted via WhatsApp!' 
                    : currentLanguage === 'es' ? '¡tu reserva ha sido enviada a Ted vía WhatsApp!' 
                    : currentLanguage === 'fr' ? 'votre réservation a été envoyée à Ted via WhatsApp!'
                    : 'your booking has been sent to Ted via WhatsApp!'}
                </p>
                <div className="text-sm text-green-600 space-y-1">
                  <p>📅 <strong>{selectedDate?.date.toLocaleDateString()}</strong></p>
                  <p>🎯 <strong>{serviceOptions.find(s => s.id === selectedService)?.title}</strong></p>
                  <p>📱 <strong>{formData.phone}</strong></p>
                </div>
              </div>
              
              <p className="soft-text text-gray-600 mb-8">
                {currentLanguage === 'pt' ? 'Ted entrará em contacto consigo em breve para confirmar todos os detalhes!'
                  : currentLanguage === 'es' ? '¡Ted se pondrá en contacto contigo pronto para confirmar todos los detalles!'
                  : currentLanguage === 'fr' ? 'Ted vous contactera bientôt pour confirmer tous les détails!'
                  : 'Ted will contact you soon to confirm all the details!'}
              </p>
              
              <MagicalButton 
                onClick={() => {
                  setCurrentStep(1);
                  setSelectedService('');
                  setSelectedDate(null);
                  setFormData({ name: '', email: '', phone: '', message: '', children: '', duration: '' });
                }}
                className="mb-4"
              >
                {currentLanguage === 'pt' ? 'Nova Reserva' 
                  : currentLanguage === 'es' ? 'Nueva Reserva' 
                  : currentLanguage === 'fr' ? 'Nouvelle Réservation'
                  : 'New Booking'}
              </MagicalButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;