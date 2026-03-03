import { Menu, Church } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '교회소개', href:'' },
    { name: '예배안내', href:'' },
    { name: '말씀', href:'' },
    { name: '교회소식', href:'' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-white/80 px-6 py-4 backdrop-blur-md lg:px-20 dark:bg-[#101622]/80">
      <div className="flex items-center gap-2 text-primary">
        <Church className="h-8 w-8" />
        <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
          하늘빛힐링교회
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden flex-1 justify-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-white p-4 shadow-lg md:hidden dark:border-slate-800 dark:bg-[#101622]">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="h-10 w-full rounded-lg bg-primary px-4 text-sm font-bold text-white">
              로그인
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
