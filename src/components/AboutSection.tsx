"use client";
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 400); // delay for hero animation
  }, []);

  return (
    <section
      className={`relative z-30 -mt-[15vh] pb-20 transition-transform duration-1000 ${slideIn ? 'translate-y-0' : 'translate-y-[40vh]'} bg-black`}
      style={{ borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}
    >
      <div className="flex justify-center items-center mx-auto w-full max-w-2xl py-8">
        <div className="flex flex-row w-full bg-black/60 rounded-t-2xl shadow-xl overflow-hidden font-exo2">
          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-pink-400 font-exo2">1 Lakh</span>
            <span className="text-base text-gray-300 mt-2 font-exo2">Prize Pool</span>
          </div>
          {/* Divider */}
          <div className="w-px bg-gradient-to-b from-gray-600 to-gray-900 my-4 mx-2"></div>
          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-blue-400 font-exo2">Up to 7 Lakh</span>
            <span className="text-base text-gray-300 mt-2 font-exo2">Incubation for Promising Ideas*</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build2Break is OSDG Club&apos;s lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovate</h3>
            <p className="text-gray-600">Build revolutionary solutions to real-world problems</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
            <p className="text-gray-600">Team up with brilliant minds from diverse backgrounds</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Achieve</h3>
            <p className="text-gray-600">Win amazing prizes and recognition for your innovations</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Attend Build2Break 2026?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Network with industry professionals
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Learn cutting-edge technologies
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Access to mentorship from experts
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Substantial cash prizes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Job and internship opportunities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All meals and swag included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;