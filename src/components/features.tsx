'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Users, BookOpen, Headphones, DollarSign } from 'lucide-react';

export function FeaturesSection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const features = [
    {
      icon: Users,
      titleKey: 'feature1Title',
      descKey: 'feature1Desc',
      color: 'text-blue-500',
    },
    {
      icon: BookOpen,
      titleKey: 'feature2Title',
      descKey: 'feature2Desc',
      color: 'text-green-500',
    },
    {
      icon: Headphones,
      titleKey: 'feature3Title',
      descKey: 'feature3Desc',
      color: 'text-orange-500',
    },
    {
      icon: DollarSign,
      titleKey: 'feature4Title',
      descKey: 'feature4Desc',
      color: 'text-purple-500',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className={`text-3xl lg:text-4xl font-bold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {t('featuresTitle')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-6 bg-surface rounded-xl hover:shadow-lg transition border border-transparent hover:border-primary/20">
                <Icon className={`w-10 h-10 ${feature.color} mb-4 group-hover:scale-110 transition`} />
                <h3 className={`font-semibold text-lg mb-2 ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t(feature.titleKey)}
                </h3>
                <p className={`text-sm text-muted leading-relaxed ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
