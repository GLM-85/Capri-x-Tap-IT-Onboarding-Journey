import React from 'react';
import Link from './Link';

const SiteFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#081A57] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          <div className="max-w-md">
            <div className="flex flex-col mb-6">
               <span className="text-4xl font-bold font-sans uppercase leading-none">Tap-IT</span>
               <span className="text-sm text-blue-300 italic">tap into the cloud</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tap-IT is your trusted partner for reliable, future-ready IT solutions. We combine advanced technology, proactive monitoring, and expert support to keep your systems running smoothly.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <h4 className="text-lg font-bold font-sans uppercase mb-4 text-blue-200">PAGES</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link></li>
                <li><Link href="/health-check" className="hover:text-white transition-colors">Health Check</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold font-sans uppercase mb-4 text-blue-200">LINKS</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-sans uppercase mb-4 text-blue-200">SOCIAL</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="https://www.instagram.com/tapintothecloud?igsh=bjMzeWFnMTN0a2li&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/tapintothecloud/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 text-center text-gray-400 text-sm">
          &copy; Tap-IT 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;