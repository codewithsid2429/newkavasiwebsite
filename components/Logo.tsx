'use client';

interface LogoProps {
  className?: string;
  heightClass?: string;
}

export default function Logo({ className = '', heightClass = 'h-8 md:h-10' }: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <img
        src="/images/logo_darkmode.png"
        alt="KAVASI Logo"
        className={`${heightClass} object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]`}
      />
    </div>
  );
}
