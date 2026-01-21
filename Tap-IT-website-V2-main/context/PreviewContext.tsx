'use client';

import React, { createContext, useContext } from 'react';

// This context is true when running in AI Studio Preview (index.tsx),
// and false (undefined) when running in Next.js (Vercel).
const PreviewContext = createContext<boolean>(false);

export const usePreview = () => useContext(PreviewContext);

export const PreviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PreviewContext.Provider value={true}>{children}</PreviewContext.Provider>;
};