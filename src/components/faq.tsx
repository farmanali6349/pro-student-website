'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export function FAQSection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      questionKey: 'faq1Q',
      answerKey: 'faq1A',
    },
    {
      questionKey: 'faq2Q',
      answerKey: 'faq2A',
    },
    {
      questionKey: 'faq3Q',
      answerKey: 'faq3A',
    },
    {
      questionKey: 'faq4Q',
      answerKey: 'faq4A',
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className={`text-3xl lg:text-4xl font-bold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
            {t('faqTitle')}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface/50 transition ${
                  isArabic ? 'font-tajawal' : 'font-inter'
                }`}
              >
                <span className={`font-semibold text-foreground ${isArabic ? 'font-tajawal text-right' : 'font-inter'}`}>
                  {t(faq.questionKey)}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition ${
                    expandedIndex === index ? 'rotate-180' : ''
                  } ${isArabic ? 'mr-4' : 'ml-4'}`}
                />
              </button>

              {expandedIndex === index && (
                <div className={`px-6 py-4 border-t border-border bg-white/50 text-muted ${
                  isArabic ? 'font-tajawal text-right' : 'font-inter'
                }`}>
                  {t(faq.answerKey)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
