'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Carousel } from './carousel';

interface CarouselItem {
  id: string;
  title: string;
  titleAr: string;
  image: string;
  description?: string;
  descriptionAr?: string;
}

interface SectionProps {
  id: string;
  titleKey: string;
  descriptionKey: string;
  items: CarouselItem[];
}

function CarouselCard({
  item,
  isArabic,
}: {
  item: CarouselItem;
  isArabic: boolean;
}) {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={item.image}
          alt={isArabic ? item.titleAr : item.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className={`font-semibold text-lg ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
          {isArabic ? item.titleAr : item.title}
        </h3>
        {item.description && (
          <p className={`text-sm text-muted leading-relaxed ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {isArabic ? item.descriptionAr : item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function CarouselSection({ id, titleKey, descriptionKey, items }: SectionProps) {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const carouselItems = items.map((item) => (
    <CarouselCard key={item.id} item={item} isArabic={isArabic} />
  ));

  return (
    <section id={id} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <h2 className={`text-3xl lg:text-4xl font-bold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {t(titleKey)}
          </h2>
          <p className={`text-lg text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {t(descriptionKey)}
          </p>
        </div>

        {/* Carousel */}
        <Carousel items={carouselItems} showDots showControls />
      </div>
    </section>
  );
}
