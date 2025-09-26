"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Phase2Section = () => {
  const [showCrack, setShowCrack] = useState(false);
  const [crackIntensity, setCrackIntensity] = useState(0);

  useEffect(() => {
    // Crack animation appears
    setTimeout(() => setShowCrack(true), 200);
    
    // Scroll listener for crack intensity based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const intensity = Math.min(scrollY / 3000, 1); // Adjust divisor for sensitivity
      setCrackIntensity(intensity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black z-10 mb-[100vh]">
      {/* Background effects with more dramatic colors */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Red/orange danger glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ef4444 0%, #dc2626 50%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        {/* Secondary orange glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[70rem] h-[70rem] opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #f97316 0%, #ea580c 50%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        
        {/* Cracking effect particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-red-400 rounded-full opacity-0 transition-all duration-1000 ${showCrack ? 'opacity-60' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: showCrack ? `float ${2 + Math.random() * 3}s ease-in-out infinite` : 'none',
                transform: `scale(${0.5 + Math.random() * 1.5})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        
        {/* Phase indicator */}
        <div className="mb-6">
          <span className="inline-block bg-red-500/20 text-red-300 px-6 py-2 rounded-full text-sm font-semibold tracking-wider border border-red-500/30">
            PHASE 2
          </span>
        </div>

        {/* Phase Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
          BREAK
        </h1>

        {/* Cracked Cube Image with dynamic cracking animation */}
        <div className={`mb-12 transition-all duration-1000 transform ${showCrack ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <div className="relative">
            <Image
              src="/Break.png"
              alt="Break Phase - Cracked Cube"
              width={200}
              height={200}
              className="mx-auto drop-shadow-2xl"
              style={{
                filter: `drop-shadow(0 0 40px rgba(239, 68, 68, 0.4)) contrast(${1 + crackIntensity * 0.3}) brightness(${1 + crackIntensity * 0.2})`,
                transform: `rotate(${crackIntensity * 2}deg) scale(${1 + crackIntensity * 0.05})`,
              }}
            />
            
            {/* Dynamic crack overlay effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(239, 68, 68, ${crackIntensity * 0.3}) 0%, transparent 70%)`,
                borderRadius: '20px',
              }}
            />
          </div>
        </div>

        {/* Phase Description */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-100">
            Test & Destroy
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            The real challenge begins. Teams switch roles and get <strong className="text-red-300">5 hours</strong> to 
            find vulnerabilities, exploit weaknesses, and break the AI agents created by other teams. 
            Only the most robust agents will survive.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black/40 rounded-xl p-6 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Vulnerability Hunt</h3>
              <p className="text-sm text-gray-400">Find flaws before others do</p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stress Testing</h3>
              <p className="text-sm text-gray-400">Push systems beyond their limits</p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Defense Analysis</h3>
              <p className="text-sm text-gray-400">Learn what makes agents truly secure</p>
            </div>
          </div>

          {/* Dramatic call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl border border-red-500/20">
            <h3 className="text-2xl font-bold mb-4 text-red-300">The Ultimate Test</h3>
            <p className="text-gray-300 text-lg">
              Will your AI agent survive the onslaught? Or will you be the one to find the critical flaw 
              that brings down seemingly invincible systems?
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Phase2Section;