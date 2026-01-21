'use client';

import React from 'react';
import { Activity, AlertTriangle, TrendingUp, Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Link from './Link';

const HealthCheckSection: React.FC = () => {
  return (
    <section id="health-check" className="py-16 md:py-20 2xl:py-24 bg-[#081A57] text-white scroll-mt-24 relative overflow-hidden">
      
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3A6EFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typography & Context */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-[2px] bg-[#3A6EFF]"></div>
                 <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-[#3A6EFF]">Diagnostic Tool</h3>
            </div>
            {/* OPTIMIZATION: Responsive text sizes */}
            <h2 className="text-4xl md:text-4xl 2xl:text-5xl font-black font-sans uppercase mb-6 leading-none">
              Why do you need an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A6EFF] to-blue-300">IT Health Check?</span>
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg leading-relaxed font-light border-l-2 border-[#3A6EFF] pl-6">
              Most SMEs face the same challenges: disconnected tools, rising license costs, and growing security pressure. Technology should work for you; not the other way around.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
               <Link href="/contact" className="bg-[#3A6EFF] hover:bg-white hover:text-[#081A57] text-white px-6 py-3.5 2xl:px-8 2xl:py-4 rounded-md font-bold font-sans uppercase tracking-widest transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-3 group text-xs 2xl:text-sm">
                  Schedule Discovery Call
                  <Activity size={18} className="group-hover:animate-pulse" />
               </Link>
               <div className="flex items-center gap-2 px-6 py-3.5 border border-white/10 rounded-md text-xs 2xl:text-sm font-semibold text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Free Consultation
               </div>
            </div>
          </div>

          {/* RIGHT: Dashboard Visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              
              {/* Card Stack Container */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                 
                 {/* Top Bar "Window" */}
                 <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">System Scan: Active</div>
                 </div>

                 {/* Alert Item 1 */}
                 <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-4 rounded-r-lg flex gap-4 items-start">
                    <div className="bg-red-500/20 p-2 rounded shrink-0 text-red-400">
                       <ShieldAlert size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm uppercase text-red-200 mb-1">Hidden Vulnerabilities Detected</h4>
                       <p className="text-xs text-gray-300 leading-relaxed">
                          Unpatched software and shadow IT are open doors for attackers.
                       </p>
                    </div>
                 </div>

                 {/* Alert Item 2 */}
                 <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-lg flex gap-4 items-start">
                    <div className="bg-yellow-500/20 p-2 rounded shrink-0 text-yellow-400">
                       <TrendingUp size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm uppercase text-yellow-200 mb-1">License Optimization Opportunity</h4>
                       <p className="text-xs text-gray-300 leading-relaxed">
                          Stop paying for software you don't use or duplicate features.
                       </p>
                    </div>
                 </div>

                 {/* Success/Result Box */}
                 <div className="bg-[#081A57] border border-[#3A6EFF]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#3A6EFF] transition-colors cursor-default">
                    <div className="absolute top-0 right-0 p-3 opacity-20">
                       <Search size={40} className="text-[#3A6EFF]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold font-sans uppercase text-white mb-2">Ready to Standardize?</h3>
                    <p className="text-xs md:text-sm text-blue-200 mb-4">
                       Get a comprehensive review of your current stack. We'll identify risks and opportunities for automation.
                    </p>
                    <div className="flex items-center gap-2 text-[#3A6EFF] text-xs font-bold uppercase tracking-widest">
                       <CheckCircle2 size={14} /> Scan Complete
                    </div>
                 </div>

              </div>

              {/* Decor element behind */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-[#3A6EFF] rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-20"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthCheckSection;