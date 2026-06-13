import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { CarouselSection } from '@/components/sections';
import { ProvenSection } from '@/components/proven';
import { FeaturesSection } from '@/components/features';
import { CTASection } from '@/components/cta';
import { FAQSection } from '@/components/faq';
import { ContactSection } from '@/components/contact';
import { ReviewsSection } from '@/components/reviews';
import { Footer } from '@/components/footer';
import { sampleRegions, destinationImages, institutionImages, courseImages } from '@/lib/sample-data';

export default async function Home() {
  return (
    <>
      <Header />
      <Hero regions={sampleRegions} />
      <CarouselSection
        id="destinations"
        titleKey="destinationsTitle"
        descriptionKey="destinationsDescription"
        items={destinationImages}
      />
      <CarouselSection
        id="institutions"
        titleKey="institutionsTitle"
        descriptionKey="institutionsDescription"
        items={institutionImages}
      />
      <CarouselSection
        id="courses"
        titleKey="coursesTitle"
        descriptionKey="coursesDescription"
        items={courseImages}
      />
      <ProvenSection />
      <FeaturesSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <ReviewsSection />
      <Footer />
    </>
  );
}
