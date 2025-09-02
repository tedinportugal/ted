import React, { useEffect, useState } from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

// Floating magical elements component
const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <div
      className="absolute animate-bounce opacity-70"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
      }}
    >
      {children}
    </div>
  );
};

// Confetti animation
const ConfettiPiece = ({ color, delay }) => {
  return (
    <div
      className={`absolute w-2 h-2 ${color} animate-pulse`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: '-10px',
        animation: `fall 4s linear infinite ${delay}s`,
      }}
    />
  );
};

// Magic sparkles background
export const MagicalBackground = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating magical elements */}
      {sparkles.map((sparkle) => (
        <FloatingElement key={sparkle.id} delay={sparkle.delay} duration={sparkle.duration}>
          <Star className="w-4 h-4 text-yellow-400 animate-spin" />
        </FloatingElement>
      ))}
      
      {/* Hearts */}
      {Array.from({ length: 8 }, (_, i) => (
        <FloatingElement key={`heart-${i}`} delay={i * 0.5} duration={4}>
          <Heart className="w-3 h-3 text-pink-400 fill-current" />
        </FloatingElement>
      ))}

      {/* Sparkles */}
      {Array.from({ length: 10 }, (_, i) => (
        <FloatingElement key={`sparkle-${i}`} delay={i * 0.3} duration={3}>
          <Sparkles className="w-5 h-5 text-purple-400" />
        </FloatingElement>
      ))}
    </div>
  );
};

// Confetti effect for celebrations
export const ConfettiEffect = ({ active = false }) => {
  if (!active) return null;

  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500',
    'bg-purple-500', 'bg-pink-500', 'bg-orange-500'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {Array.from({ length: 50 }, (_, i) => (
        <ConfettiPiece
          key={i}
          color={colors[Math.floor(Math.random() * colors.length)]}
          delay={Math.random() * 3}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// Animated gradient text
export const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse ${className}`}>
      {children}
    </span>
  );
};

// Bouncing button effect
export const MagicalButton = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClasses = "transform transition-all duration-300 hover:scale-105 active:scale-95 font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white",
    secondary: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white",
    outline: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className} animate-bounce`}
      style={{ animationDuration: '2s' }}
    >
      {children}
    </button>
  );
};