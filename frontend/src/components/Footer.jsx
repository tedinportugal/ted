import React from 'react';
import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { mockData, languages } from '../data/mock';

const Footer = ({ currentLanguage }) => {
  const t = languages[currentLanguage];
  const contact = mockData.contact;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400 mr-3">
                <img
                  src="https://customer-assets.emergentagent.com/job_skate-party/artifacts/pg049z35_5D7B8BF4-317A-4305-A85C-42BA646C6DC4.png"
                  alt="Ted"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="bubble-text text-xl font-bold text-orange-400">Ted</h3>
                <p className="soft-text text-sm text-gray-300">Magical Fun</p>
              </div>
            </div>
            <p className="soft-text text-gray-300 text-sm leading-relaxed">
              {currentLanguage === 'pt' 
                ? 'Criando momentos mágicos para crianças em Portugal'
                : currentLanguage === 'es'
                ? 'Creando momentos mágicos para niños en Portugal'
                : currentLanguage === 'fr' 
                ? 'Créer des moments magiques pour les enfants au Portugal'
                : 'Creating magical moments for children in Portugal'
              }
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="bubble-text text-lg font-semibold text-orange-400 mb-4">
              {t.nav.home === 'Início' ? 'Serviços' : t.nav.home === 'Inicio' ? 'Servicios' : t.nav.home === 'Accueil' ? 'Services' : 'Services'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="soft-text text-gray-300 hover:text-orange-400 transition-colors">{t.nav.babysitting}</a></li>
              <li><a href="#" className="soft-text text-gray-300 hover:text-orange-400 transition-colors">{t.nav.birthdays}</a></li>
              <li><a href="#" className="soft-text text-gray-300 hover:text-orange-400 transition-colors">{t.nav.skate}</a></li>
              <li><a href="#" className="soft-text text-gray-300 hover:text-orange-400 transition-colors">{t.nav.about}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="bubble-text text-lg font-semibold text-orange-400 mb-4">
              {t.contact.info.title}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="soft-text text-gray-300 text-sm">{contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="soft-text text-gray-300 text-sm">{contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-orange-400" />
                <span className="soft-text text-gray-300 text-sm">{contact.instagram}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="soft-text text-gray-300 text-sm">{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Website */}
          <div>
            <h4 className="bubble-text text-lg font-semibold text-orange-400 mb-4">Website</h4>
            <div className="space-y-3">
              <div className="p-4 bg-gray-800 rounded-lg border border-orange-400">
                <p className="bubble-text text-xl font-bold text-orange-400 mb-1">tedinportugal.com</p>
                <p className="soft-text text-gray-300 text-sm">
                  {currentLanguage === 'pt' 
                    ? 'O seu destino para diversão mágica'
                    : currentLanguage === 'es'
                    ? 'Tu destino para diversión mágica'
                    : currentLanguage === 'fr' 
                    ? 'Votre destination pour le plaisir magique'
                    : 'Your destination for magical fun'
                  }
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="soft-text">
                  {currentLanguage === 'pt' 
                    ? 'Feito com amor em Portugal'
                    : currentLanguage === 'es'
                    ? 'Hecho con amor en Portugal'
                    : currentLanguage === 'fr' 
                    ? 'Fait avec amour au Portugal'
                    : 'Made with love in Portugal'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="soft-text text-gray-400 text-sm">
            © {currentYear} <span className="font-semibold text-orange-400">tedinportugal.com</span> - 
            {currentLanguage === 'pt' 
              ? ' Todos os direitos reservados. Ted, 23 anos, animador por amor do Brasil para Portugal.'
              : currentLanguage === 'es'
              ? ' Todos los derechos reservados. Ted, 23 años, animador por amor de Brasil a Portugal.'
              : currentLanguage === 'fr' 
              ? ' Tous droits réservés. Ted, 23 ans, animateur par amour du Brésil au Portugal.'
              : ' All rights reserved. Ted, 23 years old, entertainer by love from Brazil to Portugal.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;