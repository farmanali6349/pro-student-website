import { notFound } from "next/navigation";
import SchoolsSearchPage from "@/components/schools-search-page";
import { routing } from "@/i18n/routing";
import { type Locale } from "@/lib/data";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

function parseNumber(value: string | string[] | undefined): number | undefined {
  if (typeof value !== "string") return undefined;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseString(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : "";
}

export default async function InstitutesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const initialFilters = {
    search: parseString(searchParams.search),
    countryId: parseNumber(searchParams.country_id),
    cityId: parseNumber(searchParams.city_id),
    durationWeeks:
      parseNumber(searchParams.duration_weeks) ??
      parseNumber(searchParams.duration_min),
    startDate: parseString(searchParams.start_date),
    accommodation: searchParams.accommodation === "1",
    airportPickup: searchParams.airport_pickup === "1",
    insurance: searchParams.insurance === "1",
  };

  return (
    <SchoolsSearchPage
      initialFilters={initialFilters}
      locale={locale as Locale}
    />
  );
}
