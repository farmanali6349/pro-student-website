'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  nameAr: string;
  countries: Country[];
}

interface Country {
  id: string;
  name: string;
  nameAr: string;
  cities: City[];
}

interface City {
  id: string;
  name: string;
  nameAr: string;
  schools: School[];
}

interface School {
  id: string;
  name: string;
  nameAr: string;
  courses: Course[];
}

interface Course {
  id: string;
  name: string;
  nameAr: string;
}

export function Hero({ regions }: { regions: Region[] }) {
  const t = useTranslations('homePage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const countries = useMemo(() => {
    const region = regions.find((r) => r.id === selectedRegion);
    return region?.countries || [];
  }, [selectedRegion, regions]);

  const cities = useMemo(() => {
    const country = countries.find((c) => c.id === selectedCountry);
    return country?.cities || [];
  }, [selectedCountry, countries]);

  const schools = useMemo(() => {
    const city = cities.find((c) => c.id === selectedCity);
    return city?.schools || [];
  }, [selectedCity, cities]);

  const courses = useMemo(() => {
    const school = schools.find((s) => s.id === selectedSchool);
    return school?.courses || [];
  }, [selectedSchool, schools]);

  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-primary/2 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-lg text-muted leading-relaxed ${isArabic ? 'font-tajawal' : 'font-inter'}`}>
              {t('heroSubtitle')}
            </p>

            {/* Quote Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Region */}
                <div className="relative">
                  <select
                    value={selectedRegion}
                    onChange={(e) => {
                      setSelectedRegion(e.target.value);
                      setSelectedCountry('');
                      setSelectedCity('');
                      setSelectedSchool('');
                      setSelectedCourse('');
                    }}
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      isArabic ? 'font-tajawal text-right' : 'font-inter'
                    }`}
                  >
                    <option value="">{t('selectRegion')}</option>
                    {regions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {isArabic ? region.nameAr : region.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted" />
                </div>

                {/* Country */}
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e.target.value);
                      setSelectedCity('');
                      setSelectedSchool('');
                      setSelectedCourse('');
                    }}
                    disabled={!selectedRegion}
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isArabic ? 'font-tajawal text-right' : 'font-inter'
                    }`}
                  >
                    <option value="">{t('selectCountry')}</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {isArabic ? country.nameAr : country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted" />
                </div>

                {/* City */}
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      setSelectedSchool('');
                      setSelectedCourse('');
                    }}
                    disabled={!selectedCountry}
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isArabic ? 'font-tajawal text-right' : 'font-inter'
                    }`}
                  >
                    <option value="">{t('selectCity')}</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {isArabic ? city.nameAr : city.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted" />
                </div>

                {/* School */}
                <div className="relative">
                  <select
                    value={selectedSchool}
                    onChange={(e) => {
                      setSelectedSchool(e.target.value);
                      setSelectedCourse('');
                    }}
                    disabled={!selectedCity}
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isArabic ? 'font-tajawal text-right' : 'font-inter'
                    }`}
                  >
                    <option value="">{t('selectSchool')}</option>
                    {schools.map((school) => (
                      <option key={school.id} value={school.id}>
                        {isArabic ? school.nameAr : school.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted" />
                </div>

                {/* Course */}
                <div className="relative">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    disabled={!selectedSchool}
                    className={`w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isArabic ? 'font-tajawal text-right' : 'font-inter'
                    }`}
                  >
                    <option value="">{t('selectCourse')}</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {isArabic ? course.nameAr : course.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted" />
                </div>

                {/* Search Button */}
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 active:scale-95">
                  {t('exploreButton')}
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1427504494785-cddc0c5c0a2f?w=800&q=80"
              alt="Student Learning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
