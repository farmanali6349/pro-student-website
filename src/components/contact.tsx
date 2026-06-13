'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className={`text-3xl lg:text-4xl font-bold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                {t('contactTitle')}
              </h2>
              <p className={`text-lg text-muted ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
                {t('contactDesc')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className={`font-semibold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>Email</p>
                  <a href="mailto:info@prostudent.ae" className="text-muted hover:text-primary">
                    info@prostudent.ae
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className={`font-semibold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>Phone</p>
                  <a href="tel:+971505555555" className="text-muted hover:text-primary">
                    +971 50 555 5555
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className={`font-semibold text-foreground ${isArabic ? 'font-tajawal' : 'font-inter'}`}>Address</p>
                  <p className="text-muted">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {submitted && (
              <div className="bg-success/10 border border-success text-success p-4 rounded-lg">
                {t('successMessage')}
              </div>
            )}

            <div>
              <input
                {...register('fullName')}
                placeholder={t('fullName')}
                className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 ${
                  isArabic ? 'font-tajawal text-right' : 'font-inter'
                }`}
              />
              {errors.fullName && <p className="text-error text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder={t('email')}
                className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 ${
                  isArabic ? 'font-tajawal text-right' : 'font-inter'
                }`}
              />
              {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register('phone')}
                placeholder={t('phone')}
                className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 ${
                  isArabic ? 'font-tajawal text-right' : 'font-inter'
                }`}
              />
              {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder={t('message')}
                rows={4}
                className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 resize-none ${
                  isArabic ? 'font-tajawal text-right' : 'font-inter'
                }`}
              />
              {errors.message && <p className="text-error text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : t('submit')}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
