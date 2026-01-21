'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePreview } from '../context/PreviewContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  const isPreview = usePreview();

  // If in Preview Mode (AI Studio), use a standard <a> tag that dispatches a custom event
  // to our lightweight client-side router in index.tsx.
  if (isPreview) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      // Dispatch event for the custom router in index.tsx
      const event = new CustomEvent('tapit-route', { detail: href });
      window.dispatchEvent(event);
      
      // Try to push to history, but ignore errors in restricted environments (like blob/iframe previews)
      try {
        window.history.pushState({}, '', href);
      } catch (err) {
        console.warn('Navigation state update prevented by environment:', err);
      }
    };

    return (
      <a href={href} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }

  // If in Next.js (Production), use the optimized NextLink
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;