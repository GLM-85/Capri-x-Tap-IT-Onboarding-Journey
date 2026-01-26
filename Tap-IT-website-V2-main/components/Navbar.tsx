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
    ? 'fixed top-0 left-0 w-full z-[100] bg-transparent transition-all duration-300 py-3 2xl:py-5'
    : 'fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 py-2.5 2xl:py-5';

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
          <Link href="/capri-onboarding-journey" className={linkClass('/capri-onboarding-journey')}>Onboarding Journey</Link>
          <Link href="/capri-onboarding-journey/fase-0" className={linkClass('/capri-onboarding-journey/fase-0')}>Fase 0</Link>
          <Link href="/capri-onboarding-journey/fase-1" className={linkClass('/capri-onboarding-journey/fase-1')}>Fase 1</Link>
          <Link href="/capri-onboarding-journey/fase-2" className={linkClass('/capri-onboarding-journey/fase-2')}>Fase 2</Link>
          <Link href="/capri-onboarding-journey/fase-3" className={linkClass('/capri-onboarding-journey/fase-3')}>Fase 3</Link>
          <Link href="/capri-onboarding-journey/fase-4" className={linkClass('/capri-onboarding-journey/fase-4')}>Fase 4</Link>
          <Link href="/capri-onboarding-journey/fase-5" className={linkClass('/capri-onboarding-journey/fase-5')}>Fase 5</Link>
        </div>
        
        {/* Mobile Toggle */}
        <MobileMenu color="#081A57" />
      </div>
    </nav>
  );
};

export default Navbar;
