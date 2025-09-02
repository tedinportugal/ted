import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Calendar, Clock, Send } from 'lucide-react';
import { mockData, languages } from '../data/mock';
import { MagicalButton, GradientText } from './MagicalElements';

const ContactPage = ({ currentLanguage }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    date: ''
  });
  
  const contact = mockData.contact;
  const t = languages[currentLanguage];

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

  const handleDateSelect = (day) => {
    if (day.available) {
      setSelectedDate(day);
      setFormData(prev => ({ ...prev, date: day.dateString }));
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
    // Mock form submission
    alert(t.contact.form.thankYou || 'Thank you! Ted will contact you soon. For immediate response, please use WhatsApp.');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`${t.contact.form.whatsappMessage || `Hi Ted! I'm interested in ${formData.service || 'your services'}. ${selectedDate ? `I'm looking at ${selectedDate.date.toLocaleDateString()}. ` : ''}Can we chat?`}`);
    window.open(`https://wa.me/${contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contact.instagram.replace('@', '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <GradientText>Get in Touch</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Ready to create magical memories? Let's plan something amazing for your children!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <GradientText>Contact Information</GradientText>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">WhatsApp (Preferred)</h3>
                    <p className="text-gray-600">{contact.whatsapp}</p>
                  </div>
                  <MagicalButton onClick={handleWhatsApp} className="text-sm px-4 py-2">
                    Chat Now
                  </MagicalButton>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">{contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <p className="text-gray-600">{contact.instagram}</p>
                  </div>
                  <MagicalButton onClick={handleInstagram} variant="secondary" className="text-sm px-4 py-2">
                    Follow
                  </MagicalButton>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                <GradientText>Service Hours</GradientText>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Babysitting: 19:30 - 02:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Birthday Parties: Flexible timing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">Skate Lessons: By appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Calendar */}
          <div className="space-y-8">
            {/* Availability Calendar */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <GradientText>Check Availability</GradientText>
              </h2>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {t.contact.calendar.days.map(day => (
                  <div key={day} className="bubble-text text-center font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!day.available}
                    className={`p-3 rounded-lg text-center transition-all duration-300 ${
                      selectedDate?.dateString === day.dateString
                        ? 'bg-orange-500 text-white scale-110 shadow-lg'
                        : day.available
                        ? 'bg-green-100 hover:bg-green-200 text-green-800 hover:scale-105'
                        : 'bg-red-100 text-red-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xs">{day.dayName}</div>
                    <div className="font-bold">{day.dayNumber}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-200 rounded"></div>
                  <span className="soft-text">{t.contact.availability.available}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-200 rounded"></div>
                  <span className="soft-text">{t.contact.availability.unavailable}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="soft-text">{t.contact.availability.selected}</span>
                </div>
              </div>

              {selectedDate && (
                <div className="mt-6 p-4 bg-orange-50 rounded-2xl border-2 border-orange-200">
                  <p className="soft-text text-orange-800 font-semibold text-center">
                    📅 {t.contact.availability.selected}: {selectedDate.date.toLocaleDateString(currentLanguage === 'pt' ? 'pt-PT' : currentLanguage === 'es' ? 'es-ES' : currentLanguage === 'fr' ? 'fr-FR' : 'en-GB', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                <GradientText>Send a Message</GradientText>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="babysitting">Babysitting</option>
                      <option value="birthday-party">Birthday Party</option>
                      <option value="skate-lessons">Skate Lessons</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell Ted about your needs, number of children, special requests, etc."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagicalButton type="submit" className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </MagicalButton>
                  
                  <MagicalButton
                    type="button"
                    onClick={handleWhatsApp}
                    variant="secondary"
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Instead
                  </MagicalButton>
                </div>
              </form>

              <div className="mt-6 p-4 bg-green-50 rounded-2xl border-2 border-green-200">
                <p className="text-green-800 text-sm text-center">
                  💚 <strong>Quick Response Tip:</strong> For fastest response, use WhatsApp! Ted usually replies within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;