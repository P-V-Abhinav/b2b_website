"use client";
import React from "react";

const phases = [
  {
    title: "Phase 1: Ideation",
    description: "Teams brainstorm and submit their innovative ideas for review.",
    color: "text-pink-400",
  },
  {
    title: "Phase 2: Development",
    description: "Selected ideas move to development, with mentoring and workshops.",
    color: "text-blue-400",
  },
  {
    title: "Phase 3: Demo & Awards",
    description: "Teams present their projects. Winners and incubations are announced.",
    color: "text-green-400",
  },
];

const PhaseSection = () => {
  return (
    <section className="relative z-35 py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Hackathon Phases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div key={phase.title} className="flex flex-col items-center justify-center p-8 rounded-xl bg-black/60 shadow-lg border border-gray-800">
              <div className={`text-2xl font-bold mb-2 ${phase.color}`}>{phase.title}</div>
              <div className="text-base text-gray-300 mb-2">{phase.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseSection;
