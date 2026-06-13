'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('footerAbout')}
            </h3>
            <p className={`text-white/70 leading-relaxed text-sm ${isArabic ? 'font-tajawal text-right' : 'font-inter'}`}>
              {t('footerAboutDesc')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('footerServices')}
            </h3>
            <ul className={`space-y-2 text-sm text-white/70 ${isArabic ? 'font-tajawal text-right' : 'font-inter'}`}>
              <li>
                <a href="#destinations" className="hover:text-white transition">
                  {isArabic ? 'الوجهات' : 'Destinations'}
                </a>
              </li>
              <li>
                <a href="#institutions" className="hover:text-white transition">
                  {isArabic ? 'المؤسسات' : 'Institutions'}
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">
                  {isArabic ? 'المقررات' : 'Courses'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  {isArabic ? 'الأسئلة الشائعة' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('footerContact')}
            </h3>
            <ul className={`space-y-3 text-sm ${isArabic ? 'font-tajawal text-right' : 'font-inter'}`}>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@prostudent.ae" className="text-white/70 hover:text-white transition">
                  info@prostudent.ae
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+971505555555" className="text-white/70 hover:text-white transition">
                  +971 50 555 5555
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('footerSocial')}
            </h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-primary/20 hover:bg-primary text-white rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.229-4.425-.229-4.404 0-7.42 2.703-7.42 7.622v1.708z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-primary/20 hover:bg-primary text-white rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9 0"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-primary/20 hover:bg-primary text-white rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37z"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-primary/20 hover:bg-primary text-white rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className={`pt-8 text-center text-sm text-white/60 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
          <p>
            {t('footerRights').replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
