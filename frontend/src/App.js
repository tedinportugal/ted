import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BabysittingPage from "./components/BabysittingPage";
import BirthdaysPage from "./components/BirthdaysPage";
import SkatePage from "./components/SkatePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { MagicalBackground } from "./components/MagicalElements";
import { Toaster } from "./components/ui/toaster";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Test backend connection
  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log('Backend connected:', response.data.message);
      } catch (e) {
        console.error('Backend connection error:', e);
      }
    };
    testBackend();
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      case 'babysitting':
        return <BabysittingPage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      case 'birthdays':
        return <BirthdaysPage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      case 'skate':
        return <SkatePage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage currentLanguage={currentLanguage} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App min-h-screen relative">
      {/* Magical animated background */}
      <MagicalBackground />
      
      {/* Header */}
      <Header 
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>

      {/* WhatsApp floating button */}
      <WhatsAppButton />

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

export default App;
