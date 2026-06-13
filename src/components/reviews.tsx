'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { Carousel } from './carousel';

interface ReviewItem {
  nameKey: string;
  textKey: string;
}

export function ReviewsSection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const reviews: ReviewItem[] = [
    {
      nameKey: 'review1Name',
      textKey: 'review1Text',
    },
    {
      nameKey: 'review2Name',
      textKey: 'review2Text',
    },
    {
      nameKey: 'review3Name',
      textKey: 'review3Text',
    },
    {
      nameKey: 'review4Name',
      textKey: 'review4Text',
    },
  ];

  const reviewCards = reviews.map((review, index) => (
    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-border h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Review Text */}
      <p className={`text-foreground leading-relaxed mb-4 ${isArabic ? 'font-tajawal text-right' : 'font-inter'}`}>
        {t(review.textKey)}
      </p>

      {/* Reviewer Name */}
      <p className={`font-semibold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
        {t(review.nameKey)}
      </p>
    </div>
  ));

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <h2 className={`text-3xl lg:text-4xl font-bold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {t('reviewsTitle')}
          </h2>
        </div>

        {/* Reviews Carousel */}
        <Carousel items={reviewCards} showDots showControls />
      </div>
    </section>
  );
}
