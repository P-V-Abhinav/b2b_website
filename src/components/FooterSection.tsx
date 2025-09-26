"use client";
import React, { useState } from "react";

const faqs = [
	{
		question: "Who can participate in Build2Break?",
		answer: "Build2Break is open to all students, developers, and innovators.",
	},
	{
		question: "What is the registration fee?",
		answer: "There is no registration fee for Build2Break.",
	},
	{
		question: "How do I apply for incubation?",
		answer: "Promising ideas will be selected by the jury for incubation support.",
	},
	{
		question: "Where is the event held?",
		answer: "The event will be held at IIIT Hyderabad.",
	},
];

const FooterSection = () => {

	return (
		<footer className="relative z-50 bg-black text-white py-20 px-4">
			<div className="max-w-5xl mx-auto flex flex-col gap-16">
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Contact Us</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[1,2,3].map((i) => (
							<div key={i} className="flex flex-col items-center bg-black/40 rounded-xl p-6 shadow-lg">
								<div className="w-20 h-20 mb-4 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
									<img src="/public/BrandLogo.png" alt="POC" className="w-16 h-16 rounded-full object-cover" />
								</div>
								<div className="text-lg font-bold mb-1">POC Name {i}</div>
								<div className="text-sm text-gray-300 mb-2">Role/Title</div>
								<a href="tel:+1234567890" className="text-blue-400 font-semibold">+1 (234) 567-890{i}</a>
							</div>
						))}
					</div>
				</section>

				<div className="w-full border-t border-gray-700 my-8"></div>

				<section>
					<h2 className="text-3xl font-bold mb-6">FAQ</h2>
					<div className="space-y-4">
						{faqs.map((faq, idx) => (
							<div key={faq.question} className="group">
								<div
									className="w-full text-left px-2 py-2 font-semibold border-b border-gray-800 bg-transparent text-white hover:text-pink-400 transition-colors cursor-pointer"
									tabIndex={0}
								>
									{faq.question}
								</div>
								<div
									className="px-2 py-2 text-gray-300 border-l-2 border-pink-400 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100"
								>
									{faq.answer}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-xs">
				To do :/
			</div>
		</footer>
	);
};

export default FooterSection;