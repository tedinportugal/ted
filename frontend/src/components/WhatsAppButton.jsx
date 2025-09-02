import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { mockData } from '../data/mock';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Ted! I'm interested in your services. Can we chat?");
    const whatsappUrl = `https://wa.me/${mockData.contact.whatsapp.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-gentle-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with Ted on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>

      {/* Pulse animation rings */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-2 rounded-full bg-green-400 animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </>
  );
};

export default WhatsAppButton;