import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { languages } from '../data/mock';

const Header = ({ currentLanguage, setCurrentLanguage, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const t = languages[currentLanguage];
  const tedLogoUrl = "https://customer-assets.emergentagent.com/job_skate-party/artifacts/mn6xvfxy_E4C84B48-391A-4654-950D-CBD933579CC6.jpeg";

  const navigationItems = [
    { key: 'home', label: t.nav.home },
    { key: 'babysitting', label: t.nav.babysitting },
    { key: 'birthdays', label: t.nav.birthdays },
    { key: 'skate', label: t.nav.skate },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact }
  ];

  const languageOptions = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg mr-3">
              <img
                src={tedLogoUrl}
                alt="Ted Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
                Ted
              </h1>
              <p className="text-sm text-gray-600">Magical Fun</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.key
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-teal-100 hover:bg-teal-200 transition-colors"
              >
                <Globe className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">
                  {languageOptions.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setCurrentLanguage(option.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        currentLanguage === option.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{option.flag}</span>
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-orange-600" />
              ) : (
                <Menu className="w-6 h-6 text-orange-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                    currentPage === item.key
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;