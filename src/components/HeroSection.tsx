"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const HeroSection = () => {
  const [showBlue, setShowBlue] = useState(false);
  const [showPink, setShowPink] = useState(false);

  useEffect(() => {
    // Blue rises first
    setTimeout(() => setShowBlue(true), 50);
    // Pink rises after blue starts
    setTimeout(() => setShowPink(true), 650);
  }, []);

  return (
    <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black z-10">
      {/* Neon gradients rising from bottom - only inside hero section */}
      <div className="absolute bottom-0 left-0 w-full h-[28rem] pointer-events-none z-0">
        {/* Neon Pink - left */}
        <div
          className={`absolute bottom-0 left-[2%] w-[48rem] h-[16rem] opacity-60 blur-2xl transition-transform duration-1000 ${showPink ? 'translate-y-0' : 'translate-y-[80%]'}`}
          style={{
            background:
              'radial-gradient(ellipse at bottom, #ff0080 60%, #ff4da6 80%, transparent 100%)',
            borderRadius: '50% 50% 0 0',
            boxShadow: '0 0 80px 40px #ff0080',
            zIndex: 0,
          }}
        ></div>
        {/* Neon Blue - center */}
        <div
          className={`absolute bottom-0 left-1/2 w-[32rem] h-[18rem] opacity-50 blur-2xl transition-transform duration-1000 ${showBlue ? 'translate-y-0' : 'translate-y-[80%]'} delay-0`}
          style={{
            background:
              'radial-gradient(ellipse at bottom, #00d4ff 60%, #4dd9ff 80%, transparent 100%)',
            borderRadius: '50% 50% 0 0',
            boxShadow: '0 0 80px 40px #00d4ff',
            zIndex: 1,
            transform: 'translateX(-50%)'
          }}
        ></div>
        {/* Neon Pink - right */}
        <div
          className={`absolute bottom-0 right-[2%] w-[48rem] h-[16rem] opacity-60 blur-2xl transition-transform duration-1000 ${showPink ? 'translate-y-0' : 'translate-y-[80%]'}`}
          style={{
            background:
              'radial-gradient(ellipse at bottom, #ff0080 60%, #ff4da6 80%, transparent 100%)',
            borderRadius: '50% 50% 0 0',
            boxShadow: '0 0 80px 40px #ff0080',
            zIndex: 0,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

        {/* Event Title */}
        <Image
          src="/image.png"
          alt="Build2Break Logo"
          width={600}
          height={120}
          className="mx-auto mb-4"
        />

        {/* Subtitle */}
        <p className="text-base md:text-base mb-2 font-light opacity-90 text-gray-200">
          Presented by
        </p>

        {/* Logos below subtitle */}
        <div className="flex justify-center items-center gap-8 mb-0">
          <Image src="/BrandLogo.png" alt="OSDG" height={40} width={100} />
          <span className="text-base md:text-base mb-2 font-light opacity-90 text-gray-200">at</span>
          <Image src="/inff.png" alt="infinium" height={40} width={100} />
        </div>
        {/* Date */}
        <h2 className="text-4xl md:text-4xl font-light mb-4 text-gray-100 pt-6 pb-6">
          October 4-5 | IIIT Hyderabad
        </h2>

        

        {/* Description */}
        <div className="mb-12 space-y-4">
          {/* Countdown Timer */}
          <CountdownTimer targetDate={new Date('2025-10-04T00:00:00')} />
        </div>

        {/* Register Button */}
  <button className="bg-black hover:bg-blach-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center mx-auto space-x-2">
          <span>REGISTER TODAY</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

// Minimalistic Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-xl md:text-2xl text-green-400 font-mono mt-4">Hackathon is live!</div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      {[
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HRS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEC', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center bg-black/60 rounded-xl px-4 py-2 border border-gray-800 shadow-lg">
          <span className="text-3xl md:text-4xl font-mono text-blue-300 tracking-tight">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400 font-semibold mt-1 tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const total = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}

export default HeroSection;