'use client';

import React from 'react';
import { ArrowRight, Check, Target, Zap, Shield, Layers, Users } from 'lucide-react';
import SiteFooter from '../../components/SiteFooter';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';

const AboutPage: React.FC = () => {
  return (
    // Added scale-down-laptop to page wrapper
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#081A57] pt-[80px] scale-down-laptop">
      
      {/* Universal Navigation */}
      <Navbar variant="solid" />

      <main className="flex-grow">
        
        {/* --- SECTION 1: THE MANIFESTO HERO --- */}
        <section className="relative pt-16 md:pt-24 lg:pt-32 pb-20 lg:pb-32 px-6 overflow-hidden">
           {/* Background Grid - Engineering Feel */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none"></div>
           
           <div className="container mx-auto max-w-7xl relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
                 <div className="w-full lg:w-3/4">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-12 h-1 bg-[#3A6EFF]"></div>
                       <h1 className="text-xs font-bold font-sans uppercase tracking-[0.25em] text-[#081A57]">Our DNA</h1>
                    </div>
                    {/* Consistent font-black. Using large sizes for lg+ because zoom handles the fit */}
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-black font-sans uppercase leading-[0.9] tracking-tighter text-[#081A57] mb-8">
                       We built the <br />
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A6EFF] to-[#081A57]">IT Partner</span> <br />
                       we couldn't find.
                    </h2>
                 </div>
                 <div className="w-full lg:w-1/4 pb-2">
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 font-medium md:font-semibold leading-relaxed border-l-4 border-gray-200 pl-6">
                       Tap-IT wasn't founded to close tickets. It was founded to close the gap between enterprise ambition and operational reality.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 2: THE FOUNDER (Dark Mode) --- */}
        <section className="bg-[#081A57] text-white py-20 lg:py-24 px-6 relative overflow-hidden">
           {/* Abstract Decor */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A6EFF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-5 pointer-events-none"></div>

           <div className="container mx-auto max-w-7xl relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                 
                 {/* Image Area - Clean Portrait */}
                 <div className="w-full lg:w-5/12 relative group">
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                         <img 
                           src="https://storage.googleapis.com/tap-it-assets-eu/Raadj%20Chedalal.jpg" 
                           alt="Raadj Chedalal, Founder" 
                           className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                         />
                         
                         {/* Static Gradient Overlay for Text Readability */}
                         <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#081A57] via-[#081A57]/60 to-transparent"></div>

                         {/* Text Content */}
                         <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                             <p className="text-3xl font-bold font-sans uppercase text-white leading-none">Raadj Chedalal</p>
                             <p className="text-sm font-bold font-sans uppercase text-[#3A6EFF] tracking-widest mt-2">Founder & Architect</p>
                         </div>
                    </div>
                 </div>

                 {/* Text Area */}
                 <div className="w-full lg:w-7/12">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans uppercase mb-8 leading-tight">
                       "Complexity is the enemy of <span className="text-[#3A6EFF]">Speed</span>."
                    </h3>
                    
                    <div className="space-y-6 text-base md:text-lg lg:text-xl text-blue-50 leading-relaxed font-medium">
                       <p>
                          After two decades working with global giants like Shell, Philips, and ING, I noticed a recurring pattern. The technology available was incredible, but the complexity of managing it was stifling growth.
                       </p>
                       <p>
                          When I looked at the SME landscape, it was even worse. Ambitious companies were being held back by fragmented tools, reactive support, and "good enough" security. 
                       </p>
                       <p>
                          We started Tap-IT to bring <strong className="text-white font-bold">enterprise-grade precision</strong> to the mid-market. We don't just fix computers; we build engines that allow businesses to run faster, safer, and leaner.
                       </p>
                    </div>
                    
                    <div className="mt-12 flex flex-wrap gap-4">
                       <div className="px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#081A57] transition-all cursor-default">
                          20+ Years Enterprise Exp.
                       </div>
                       <div className="px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#081A57] transition-all cursor-default">
                          Cloud Native Philosophy
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* --- SECTION 3: THE BLUEPRINT (Values) --- */}
        <section className="py-20 lg:py-24 px-6 bg-gray-50 border-t border-gray-100">
           <div className="container mx-auto max-w-7xl">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black font-sans uppercase text-[#081A57] tracking-tight leading-none mb-4">
                       Not a Helpdesk.<br /> An Engineering Firm.
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                       Most IT providers profit when you have problems. We profit when you don't.
                    </p>
                 </div>
                 <Link href="/ecosystem" className="hidden md:flex items-center gap-2 text-[#3A6EFF] font-bold uppercase tracking-widest text-xs border-b border-[#3A6EFF] pb-1 hover:text-[#081A57] hover:border-[#081A57] transition-all">
                    Check our Ecosystem <ArrowRight size={14} />
                 </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-4 border-[#3A6EFF] hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-50 text-[#3A6EFF] rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                       <Layers size={28} />
                    </div>
                    <h3 className="text-xl font-black font-sans uppercase text-[#081A57] mb-4">Standardization First</h3>
                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                       We don't hack things together. We deploy a proven, standardized "Golden Image" for your cloud environment. This means fewer bugs, faster onboarding, and predictable performance.
                    </p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-4 border-[#081A57] hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-[#081A57] text-white rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                       <Shield size={28} />
                    </div>
                    <h3 className="text-xl font-black font-sans uppercase text-[#081A57] mb-4">Security by Design</h3>
                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                       Security isn't an add-on; it's the foundation. From Identity Management (MFA) to Endpoint Detection (EDR), we bake enterprise security into every layer before you even log in.
                    </p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-4 border-[#3A6EFF] hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-50 text-[#3A6EFF] rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                       <Users size={28} />
                    </div>
                    <h3 className="text-xl font-black font-sans uppercase text-[#081A57] mb-4">Extreme Ownership</h3>
                    <p className="text-gray-700 leading-relaxed text-sm font-medium">
                       We don't point fingers at vendors. If it connects to your network, it's our problem to solve. We act as your single point of contact for everything digital.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 4: STATS & LOGOS --- */}
        <section className="py-20 px-6 bg-white">
           <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-gray-100 py-12">
                 <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-[#081A57] mb-2">100%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Cloud Native</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-[#081A57] mb-2">24/7</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">System Monitoring</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-[#081A57] mb-2">&lt;15m</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Avg. Response Time</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-[#081A57] mb-2">Zero</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Lock-in Contracts</div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 5: CTA --- */}
        <section className="py-24 px-6 bg-[#081A57] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="container mx-auto max-w-4xl text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-black font-sans uppercase text-white mb-8 tracking-tight">
                 Ready to Upgrade?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                 Stop struggling with legacy IT. Join the high-performance companies running on the Tap-IT Engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/contact" className="bg-[#3A6EFF] text-white px-10 py-4 rounded font-bold font-sans uppercase tracking-wider hover:bg-white hover:text-[#081A57] transition-all shadow-xl hover:-translate-y-1">
                    Book Discovery Call
                 </Link>
                 <Link href="/health-check" className="px-10 py-4 rounded border border-white/30 text-white font-bold font-sans uppercase tracking-wider hover:bg-white hover:text-[#081A57] transition-all">
                    Free Health Check
                 </Link>
              </div>
           </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default AboutPage;