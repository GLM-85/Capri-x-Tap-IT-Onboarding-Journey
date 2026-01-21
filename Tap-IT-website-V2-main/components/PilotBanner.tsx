'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from './Link';

const PilotBanner: React.FC = () => {
  return (
    <section id="pilot" className="bg-white pt-20 2xl:pt-24 pb-0 scroll-mt-24 overflow-hidden">
       <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-6 text-center">
        
        {/* Animated Partner Logos Marquee */}
        <div className="mb-12 2xl:mb-16 grayscale opacity-60 w-full overflow-hidden relative">
            <div className="flex w-max animate-marquee gap-12 md:gap-24 items-center">
                {/* Original Set */}
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Microsoft</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Odido</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">NINJA-ONE</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Veeam</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">hp</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">SentinelOne</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">JUNIPER</span>
                
                {/* Duplicate Set for Loop */}
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Microsoft</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Odido</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">NINJA-ONE</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Veeam</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">hp</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">SentinelOne</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">JUNIPER</span>

                 {/* Triplicate Set for smooth safety on wide screens */}
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Microsoft</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Odido</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">NINJA-ONE</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">Veeam</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">hp</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">SentinelOne</span>
                <span className="text-xl md:text-2xl font-bold font-sans uppercase text-gray-400 shrink-0">JUNIPER</span>
            </div>
        </div>

        <div className="mb-12 2xl:mb-16">
          <h3 className="text-xs 2xl:text-sm font-bold font-sans tracking-widest text-[#3A6EFF] uppercase mb-4">Be Part of Our Pilot Team</h3>
          {/* OPTIMIZATION: Headline scaling */}
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-[#081A57] font-bold font-sans uppercase max-w-4xl mx-auto mb-6 leading-tight">
            We’re onboarding a limited group of SMEs before going fully operational in <span className="text-[#3A6EFF]">Q2 2026</span>.
          </p>
          <p className="text-gray-600 text-lg 2xl:text-xl mb-10 max-w-2xl mx-auto">
            Join the pilot to standardize your IT, reduce spend, and raise security.
          </p>

          <Link href="/contact" className="bg-[#081A57] text-white px-8 py-4 2xl:px-10 2xl:py-5 rounded-full font-bold font-sans uppercase tracking-wider hover:bg-[#3A6EFF] transition-all inline-flex items-center gap-2 shadow-xl hover:-translate-y-1 text-xs 2xl:text-sm">
            Tap into the cloud - Join pilot
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-[#3A6EFF] w-full py-12 2xl:py-16 px-8 text-left flex flex-col md:flex-row justify-between items-center rounded-t-3xl mx-auto max-w-6xl shadow-2xl relative -mb-1">
          <div>
            <h2 className="text-2xl 2xl:text-3xl font-bold font-sans uppercase text-white mb-2">Ready to Tap Into the Cloud?</h2>
            <p className="text-blue-100 text-base 2xl:text-lg">Always protected. Always connected.</p>
          </div>
          <Link href="/contact" className="mt-6 md:mt-0 bg-white text-[#3A6EFF] px-8 py-3 rounded-full font-bold font-sans uppercase tracking-wider hover:bg-[#081A57] hover:text-white transition-colors flex items-center gap-2 text-xs 2xl:text-sm">
            Talk to an Expert <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PilotBanner;