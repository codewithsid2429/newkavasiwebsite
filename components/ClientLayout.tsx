'use client';

import { useState } from 'react';
import { ThemeProvider } from './ThemeProvider';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div className="min-h-full flex flex-col transition-colors duration-300 bg-black text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
