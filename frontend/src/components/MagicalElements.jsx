import React, { useEffect, useState } from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

// Fixed magical elements component - no bouncing animations
const FixedElement = ({ children, delay = 0 }) => {
  return (
    <div
      className="absolute animate-glow opacity-70"
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
      }}
    >
      {children}
    </div>
  );
};

// Gentle confetti animation - slower and more subtle
const ConfettiPiece = ({ color, delay }) => {
  return (
    <div
      className={`absolute w-2 h-2 ${color} animate-gentle-pulse opacity-60`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: '-10px',
        animation: `gentle-fall 6s linear infinite ${delay}s`,
      }}
    />
  );
};

// Magic sparkles background - fixed positions with gentle glow
export const MagicalBackground = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 4,
      x: Math.random() * 90,
      y: Math.random() * 80
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Fixed position magical elements with gentle glow */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-glow opacity-60"
          style={{
            animationDelay: `${sparkle.delay}s`,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >
          <Star className="w-4 h-4 text-yellow-400" />
        </div>
      ))}
      
      {/* Fixed hearts */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-gentle-pulse opacity-50"
          style={{
            animationDelay: `${i * 0.8}s`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 80}%`,
          }}
        >
          <Heart className="w-3 h-3 text-pink-400 fill-current" />
        </div>
      ))}

      {/* Fixed sparkles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-glow opacity-40"
          style={{
            animationDelay: `${i * 0.5}s`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 80}%`,
          }}
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
      ))}
    </div>
  );
};

// Gentle confetti effect for celebrations
export const ConfettiEffect = ({ active = false }) => {
  if (!active) return null;

  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500',
    'bg-purple-500', 'bg-pink-500', 'bg-orange-500'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {Array.from({ length: 30 }, (_, i) => (
        <ConfettiPiece
          key={i}
          color={colors[Math.floor(Math.random() * colors.length)]}
          delay={Math.random() * 4}
        />
      ))}
      <style jsx>{`
        @keyframes gentle-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Bubble-like gradient text
export const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`bubble-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// Gentle hover button effect - no bouncing
export const MagicalButton = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClasses = "soft-text transform transition-all duration-300 hover:scale-105 active:scale-95 font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white",
    secondary: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white",
    outline: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};