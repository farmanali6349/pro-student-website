'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = isArabic ? 'en' : 'ar';
    window.location.href = `/${newLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary text-2xl">🚀</span>
            <span className={`${isArabic ? 'font-tajawal' : 'font-inter'}`}>Pro Student</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href={`#destinations`} className="text-foreground hover:text-primary transition">
              {isArabic ? 'الوجهات' : 'Destinations'}
            </a>
            <a href={`#institutions`} className="text-foreground hover:text-primary transition">
              {isArabic ? 'المؤسسات' : 'Institutions'}
            </a>
            <a href={`#courses`} className="text-foreground hover:text-primary transition">
              {isArabic ? 'المقررات' : 'Courses'}
            </a>
            <a href={`#faq`} className="text-foreground hover:text-primary transition">
              {isArabic ? 'الأسئلة الشائعة' : 'FAQ'}
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="px-4 py-2 text-sm font-medium text-foreground hover:bg-surface rounded-lg transition"
            >
              {isArabic ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface rounded-lg"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border space-y-2">
            <a href={`#destinations`} className="block px-4 py-2 text-foreground hover:text-primary">
              {isArabic ? 'الوجهات' : 'Destinations'}
            </a>
            <a href={`#institutions`} className="block px-4 py-2 text-foreground hover:text-primary">
              {isArabic ? 'المؤسسات' : 'Institutions'}
            </a>
            <a href={`#courses`} className="block px-4 py-2 text-foreground hover:text-primary">
              {isArabic ? 'المقررات' : 'Courses'}
            </a>
            <a href={`#faq`} className="block px-4 py-2 text-foreground hover:text-primary">
              {isArabic ? 'الأسئلة الشائعة' : 'FAQ'}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
