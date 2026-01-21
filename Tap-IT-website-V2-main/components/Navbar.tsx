'use client';

import React, { useEffect, useState } from 'react';
import Link from './Link';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'solid' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Handle scroll for transparent-to-solid transition
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Handle active state
    const updatePath = () => setCurrentPath(window.location.pathname);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', updatePath);
    // Custom event listener from our Link component
    window.addEventListener('tapit-route', (e: any) => setCurrentPath(e.detail));
    
    updatePath();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('tapit-route', (e: any) => setCurrentPath(e.detail));
    };
  }, []);

  // Determine styles based on variant and scroll state
  // If variant is transparent, it stays transparent until scrolled.
  // If variant is solid, it is always white.
  const isTransparent = variant === 'transparent' && !scrolled;
  
  // OPTIMIZATION: Tighter padding for standard laptops (py-2.5), larger for 2xl (py-5)
  const navContainerClass = isTransparent
    ? 'fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 py-3 2xl:py-5'
    : 'fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 py-2.5 2xl:py-5';

  const linkClass = (path: string) => {
    const isActive = currentPath === path;
    return `
      relative font-bold text-xs md:text-[12px] 2xl:text-sm tracking-widest uppercase transition-colors duration-300
      ${isActive ? 'text-[#3A6EFF]' : 'text-[#081A57] hover:text-[#3A6EFF]'}
      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
      after:bg-[#3A6EFF] after:transition-all after:duration-300 hover:after:w-full
      ${isActive ? 'after:w-full' : ''}
    `;
  };

  return (
    <nav className={navContainerClass}>
      
      <div className="container mx-auto px-6 flex justify-between items-center relative z-20">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 relative">
           <Link href="/" className="block cursor-pointer group relative z-10">
             {/* OPTIMIZATION: Logo height strictly controlled. h-10 on laptop, h-16 on 2xl */}
             <img 
               src="https://storage.googleapis.com/tap-it-assets-eu/blue-logo-with-subtext.png" 
               alt="Tap-IT" 
               className="h-9 md:h-10 2xl:h-16 w-auto object-contain"
             />
           </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 2xl:gap-8 items-center">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/ecosystem" className={linkClass('/ecosystem')}>Ecosystem</Link>
          <Link href="/health-check" className={linkClass('/health-check')}>Health Check</Link>
          <Link href="/about" className={linkClass('/about')}>Our Story</Link>
          <Link href="/pitch/capri-partners" className={linkClass('/pitch/capri-partners')}>Capri Deck</Link>
          <Link href="/pitch/capri-partners-styled" className={linkClass('/pitch/capri-partners-styled')}>Capri Brand</Link>
          <Link href="/capri-pva" className={linkClass('/capri-pva')}>Capri PvA</Link>
          <Link href="/capri-onboarding-journey" className={linkClass('/capri-onboarding-journey')}>Capri Onboarding Journey</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          
          {/* OPTIMIZATION: Button sizes adjusted for 1280px viewport */}
          <Link href="/contact" className="ml-2 2xl:ml-4 px-5 py-2 2xl:px-6 2xl:py-3 bg-[#3A6EFF] text-white text-[10px] 2xl:text-xs font-bold uppercase tracking-widest rounded hover:bg-[#081A57] transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
            Join Pilot
          </Link>
        </div>
        
        {/* Mobile Toggle */}
        <MobileMenu color="#081A57" />
      </div>
    </nav>
  );
};

export default Navbar;
