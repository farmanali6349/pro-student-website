'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ProvenSection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    success: 0,
    countries: 0,
    consultants: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const targets = {
      students: 30000,
      success: 98,
      countries: 50,
      consultants: 50,
    };

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        students: Math.floor(targets.students * progress),
        success: Math.floor(targets.success * progress),
        countries: Math.floor(targets.countries * progress),
        consultants: Math.floor(targets.consultants * progress),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-b from-surface via-white to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className={`text-3xl lg:text-4xl font-bold ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('provenTitle')}
            </h2>
            <p className={`text-lg text-muted leading-relaxed ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('provenSubtitle')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <p className={`text-3xl lg:text-4xl font-bold text-primary mb-2 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {counts.students.toLocaleString()}+
                </p>
                <p className={`text-sm text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t('studentsDesc')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <p className={`text-3xl lg:text-4xl font-bold text-primary mb-2 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {counts.success}%
                </p>
                <p className={`text-sm text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t('successDesc')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <p className={`text-3xl lg:text-4xl font-bold text-primary mb-2 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {counts.countries}+
                </p>
                <p className={`text-sm text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t('countriesDesc')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <p className={`text-3xl lg:text-4xl font-bold text-primary mb-2 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {counts.consultants}+
                </p>
                <p className={`text-sm text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t('consultantsDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team Success"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
