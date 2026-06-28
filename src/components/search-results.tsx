"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  getCityById,
  getCountryById,
  getSchoolMinimumPrice,
  getSchoolTopCourseName,
  getSchoolInstituteName,
  getSchoolCourses,
  schoolHasAccommodation,
  schoolHasInsurance,
  schoolHasTransfers,
  schoolMatchesDuration,
  type SchoolSearchFilters,
  schoolsV2,
} from "@/lib/v2-search-data";
import { tx, type Locale } from "@/lib/data";
import { Localized, type School } from "@/lib/new_data";

import SchoolResultCard from "./school-result-card";

function isMatchSearch(school: School, search: string, locale: Locale) {
  const normalizedSearch = search.trim().toLowerCase();
  if (!normalizedSearch) return true;

  return [
    tx(school.name ?? { en: "", ar: "" }, locale),
    tx(school.description ?? { en: "", ar: "" }, locale),
    getCityById(school.cityId)?.name[locale] ?? "",
  ].some((value) => value.toLowerCase().includes(normalizedSearch));
}

export function SearchResults({
  filters,
  locale,
}: {
  filters: SchoolSearchFilters;
  locale: Locale;
}) {
  const t = useTranslations("institutes");

  const filteredSchools = useMemo(() => {
    return schoolsV2.filter((school) => {
      if (filters.countryId && school.countryId !== filters.countryId) {
        return false;
      }

      if (filters.cityId && school.cityId !== filters.cityId) {
        return false;
      }

      if (getSchoolCourses(school.id).length === 0) {
        return false;
      }

      if (filters.accommodation && !schoolHasAccommodation(school.id)) {
        return false;
      }

      if (filters.airportPickup && !schoolHasTransfers(school.id)) {
        return false;
      }

      if (filters.insurance && !schoolHasInsurance(school)) {
        return false;
      }

      if (typeof filters.durationWeeks === "number") {
        if (!schoolMatchesDuration(school.id, filters.durationWeeks)) {
          return false;
        }
      }

      if (filters.startDate) {
        // TODO: if start date filtering is available in course programs, apply it here.
      }

      return isMatchSearch(school, filters.search, locale);
    });
  }, [filters, locale]);

  return (
    <div className="space-y-6">
      <div className="p-4">
        <p className="text-base text-gray-dark/75 font-bold">
          {t("resultsCount", { count: filteredSchools.length })}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredSchools.map((school) => {
          const country = getCountryById(school.countryId);
          const city = getCityById(school.cityId);
          const instituteName = getSchoolInstituteName(school.id, locale);
          const topCourseName = getSchoolTopCourseName(school.id, locale);
          const price = getSchoolMinimumPrice(school.id);

          return (
            <SchoolResultCard
              key={school.id}
              name={tx(school.name as Localized, locale)}
              //   description={`${instituteName} · ${city?.name[locale] ?? ""}`}
              image={"school-placeholder.jpg"}
              institute={instituteName}
              topCourse={topCourseName}
              country={country?.name[locale] ?? ""}
              city={city?.name[locale] ?? ""}
              price={price}
              locale={locale}
            />
          );
        })}
      </div>
    </div>
  );
}
