import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import { courses, tx, type Locale } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Carousel } from "./carousel";

export async function CoursesSection() {
  const t = await getTranslations("courses");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading label={t("label")} title={t("title")} />
        <Carousel
          slideClassName="basis-[80%] sm:basis-1/2 lg:basis-1/4"
          // slideGapClass="gap-10"
        >
          {courses.map((course) => (
            <article
              key={course.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-60">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={tx(course.name, locale)}
                  fill
                  sizes="(max-width: 768px) 80vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute end-3 top-3 rounded-full bg-light-orange flex items-center justify-center size-10 text-xs font-bold  shadow">
                  {course.discount}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 bg-cream">
                <h3 className="text-xl uppercase font-medium text-gray-dark">
                  {tx(course.name, locale)}
                </h3>
                <p className="mt-1 text-xs font-medium text-dark-orange">
                  {tx(course.provider, locale)}
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-light-orange py-2 text-sm font-bold text-gray-dark transition hover:bg-dark-orange hover:text-white cursor-pointer"
                >
                  {t("explore")}
                </button>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
