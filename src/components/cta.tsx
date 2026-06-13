'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-primary-light to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className={`text-3xl lg:text-4xl font-bold text-white ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('ctaTitle')}
            </h2>
            <p className={`text-lg text-white/90 leading-relaxed ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('ctaDesc')}
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary hover:bg-surface font-semibold py-4 px-8 rounded-lg transition transform hover:scale-105 active:scale-95">
              {t('startNow')}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497633762265-25c00e3d6afa?w=800&q=80"
              alt="Ready to Begin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
