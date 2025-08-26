"use client";

import React, { useState, useEffect } from "react";
import { Heart, Music, Sparkles, Star, MapPin } from "lucide-react";
import { Highlighter } from "@/components/highlight";
import { WorldMap } from "@/components/map";

const VirtualLoveLetter: React.FC = () => {
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [currentJoke, setCurrentJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const cuteJokes: string[] = [
    // Sweet & Cheesy
    "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
    "Do you have a map? I keep getting lost in your eyes! 🗺️",
    "If you were a vegetable, you'd be a cute-cumber! 🥒",
    "Are you made of copper and tellurium? Because you're Cu-Te! 🧪",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you! 🩹",

    // Punny Love
    "You're the peanut butter to my jelly, the cheese to my macaroni! 🥜",
    "I love you a latte! ☕️💕",
    "You're one in a melon! 🍉",
    "Olive you so much! 🫒",
    "You're my butter half! 🧈",

    // Playfully Romantic
    "If kisses were snowflakes, I'd send you a blizzard! ❄️",
    "You stole my heart, but I'll let you keep it! 💖",
    "Are you WiFi? Because I'm feeling a connection! 📶",
    "You must be a parking ticket, because you've got FINE written all over you! 🎫",
    "If you were a triangle, you'd be acute one! 📐",

    // Food-Related Cuteness
    "You're the apple of my pie! 🥧",
    "We go together like cookies and milk! 🍪",
    "You're sweeter than honey! 🍯",
    "You make my heart skip a beet! 🍠",
    "You're the icing on my cupcake! 🧁",

    // Extra Sweet Ones
    "Are you a camera? Because every time I look at you, I smile! 📸",
    "Do you believe in love at first sight, or should I walk by again? 👀",
    "You're like a dictionary - you add meaning to my life! 📖",
    "Are you a time traveler? Because I absolutely see you in my future! ⏰",
    "You must be a star, because your beauty lights up the night! ⭐",
    "If you were a song, you'd be the catchiest tune! 🎵",
    "You're like a fine wine - you get better with every moment! 🍷",
    "Are you a compass? Because I'd be lost without you! 🧭",
    "You're the missing piece to my puzzle! 🧩",
    "Do you have a sunburn, or are you always this hot? ☀️",
  ];

  // Love connection coordinates
  const loveConnection = [
    {
      start: { lat: 21.562556, lng: 87.400556, label: "Our Beginning" }, // 21°33'37"N 87°24'12"E
      end: { lat: 20.935, lng: 85.262778, label: "Our Forever" }, // 20°56'06"N 85°15'47"E
    },
  ];

  const loveLetterText = (
    <div>
      My{" "}
      <Highlighter action="underline" color="#FF9800">
        Garma garam jalebi,
      </Highlighter>
      ,
      <br />
      <br />
      Every morning when I wake up, my first thought is of you. Your{" "}
      <Highlighter action="highlight" color="#ffd1dc">
        smile brightens
      </Highlighter>{" "}
      even the cloudiest days, and your laugh is the{" "}
      <Highlighter action="box" color="#87CEFA">
        most beautiful melody
      </Highlighter>{" "}
      I&apos;ve ever heard.
      <br />
      <br />I love the way you love me, care for me, concentrating, how you
      always do bakchodi 😂 (and I let you because seeing you happy is worth
      it), and the way you make even the most ordinary moments feel{" "}
      <Highlighter action="circle" color="#90ee90">
        magical
      </Highlighter>
      .
      <br />
      <br />
      You are my{" "}
      <Highlighter action="highlight" color="#ffb3e6">
        sunshine
      </Highlighter>
      , my{" "}
      <Highlighter action="underline" color="#b3d9ff">
        anchor
      </Highlighter>
      , and my{" "}
      <Highlighter action="box" color="#ffffb3">
        greatest adventure
      </Highlighter>{" "}
      all rolled into one incredible person. Thank you for choosing to share
      your heart with mine.
      <br />
      <br />
      With all my love and countless{" "}
      <Highlighter action="highlight" color="#e6ccff">
        butterfly kisses
      </Highlighter>
      ,
      <br />
      Forever yours ✨
    </div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLetterVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        y: 100,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 4000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMagicButton = () => {
    const randomJoke = cuteJokes[Math.floor(Math.random() * cuteJokes.length)];
    setCurrentJoke(randomJoke);
    setShowJoke(true);

    setTimeout(() => {
      setShowJoke(false);
    }, 4000);
  };

  const handleSurpriseButton = () => {
    setShowMap(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Note: In a real Next.js app, you'd implement actual audio playback here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 overflow-hidden relative">
      {/* Floating Hearts Animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce opacity-60"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animation: `float-up 4s ease-out forwards`,
          }}
        >
          <Heart className="text-pink-400 w-6 h-6 fill-current" />
        </div>
      ))}

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Star className="text-yellow-300 w-3 h-3 fill-current opacity-70" />
          </div>
        ))}
      </div>

      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/30 transition-all duration-300 z-20"
      >
        <Music
          className={`w-6 h-6 text-purple-600 ${
            isPlaying ? "animate-pulse" : ""
          }`}
        />
      </button>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 animate-fade-in">
              Sorry paaku 🥹
            </h1>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-4 h-4 text-pink-400 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Love Letter */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transform transition-all duration-1000 ${
              isLetterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="font-serif text-gray-700 leading-relaxed text-lg md:text-xl">
              {loveLetterText}
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center mt-8 space-x-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              <Heart className="w-6 h-6 text-pink-400 fill-current" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>
          </div>

          {/* Magic Button */}
          <div className="text-center mt-8 space-y-4">
            <button
              onClick={handleMagicButton}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Magic Smile Button</span>
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={handleSurpriseButton}
              className="group bg-gradient-to-r from-rose-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Our Love Map Surprise</span>
                <Heart className="w-5 h-5 fill-current" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Joke Display */}
          {showJoke && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 max-w-md w-full text-center transform animate-bounce">
                <div className="text-2xl mb-4">😄</div>
                <p className="text-gray-700 text-lg font-medium">
                  {currentJoke}
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-pink-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Love Map Display */}
          {showMap && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50 backdrop-blur-sm">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 max-w-4xl w-full relative">
                <button
                  onClick={() => setShowMap(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors text-2xl font-bold"
                >
                  ×
                </button>
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500 mb-2">
                    Our Love Connection
                  </h2>
                  <p className="text-gray-600">Destiny not distance</p>
                </div>
                <div className="mb-6">
                  <WorldMap dots={loveConnection} lineColor="#ef4444" />
                </div>
                <div className="text-center space-y-2">
                  <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span>
                      Paaku is here: 21°33&apos;37&quot;N 87°24&apos;12&quot;E
                    </span>
                  </div>
                  <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span>
                      And bakchod surya is here: 20°56&apos;06&quot;N
                      85°15&apos;47&quot;E
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-400px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VirtualLoveLetter;
