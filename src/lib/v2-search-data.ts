import countriesData from "../../public/data/v2/countries.json";
import citiesData from "../../public/data/v2/cities.json";
import institutesData from "../../public/data/v2/institutes.json";
import schoolsData from "../../public/data/v2/schools.json";
import coursesData from "../../public/data/v2/courses.json";
import accommodationsData from "../../public/data/v2/accommodities.json";
import transfersData from "../../public/data/v2/transfers.json";
import {
  type Accommodation,
  type City,
  type Country,
  type Course,
  type Institute,
  type School,
  type Transfer,
} from "./new_data";
import { tx, type Locale } from "./data";

export type SchoolSearchFilters = {
  search: string;
  countryId?: number;
  cityId?: number;
  durationWeeks?: number;
  startDate: string;
  accommodation: boolean;
  airportPickup: boolean;
  insurance: boolean;
};

export const countriesV2 = countriesData as Country[];
export const citiesV2 = citiesData as City[];
export const institutesV2 = institutesData as Institute[];
export const schoolsV2 = schoolsData as School[];
export const coursesV2 = coursesData as Course[];
export const accommodationsV2 = accommodationsData as Accommodation[];
export const transfersV2 = transfersData as Transfer[];

export function getCitiesByCountry(countryId?: number): City[] {
  return typeof countryId === "number"
    ? citiesV2.filter((city) => city.countryId === countryId)
    : citiesV2;
}

export function getSchoolCourses(schoolId: number): Course[] {
  return coursesV2.filter((course) => course.schoolId === schoolId);
}

export function getSchoolInstituteName(
  schoolId: number,
  locale: Locale,
): string {
  const course = coursesV2.find((item) => item.schoolId === schoolId);
  const institute = course
    ? institutesV2.find((item) => item.id === course.instituteId)
    : undefined;

  return institute
    ? tx(institute.name, locale)
    : tx({ en: "Unknown Institute", ar: "معهد غير معروف" }, locale);
}

export function getSchoolTopCourseName(
  schoolId: number,
  locale: Locale,
): string {
  const course = coursesV2.find((item) => item.schoolId === schoolId);
  return course
    ? tx(course.name, locale)
    : tx({ en: "No course available", ar: "لا توجد دورات" }, locale);
}

export function getSchoolMinimumPrice(schoolId: number): number | undefined {
  const prices = getSchoolCourses(schoolId).flatMap((course) =>
    course.programs.flatMap((program) =>
      program.courses.flatMap((item) =>
        item.pricingTiers.map((tier) => tier.price),
      ),
    ),
  );

  return prices.length > 0 ? Math.min(...prices) : undefined;
}

export function schoolHasAccommodation(schoolId: number): boolean {
  return accommodationsV2.some((item) => item.schoolId === schoolId);
}

export function schoolHasTransfers(schoolId: number): boolean {
  return transfersV2.some((item) => item.schoolId === schoolId);
}

export function schoolHasInsurance(school: School): boolean {
  return school.fees.some(
    (fee) =>
      fee.name.en.toLowerCase() === "insurance" ||
      fee.name.ar.toLowerCase() === "التأمين",
  );
}

export function schoolMatchesDuration(
  schoolId: number,
  weeks: number,
): boolean {
  return getSchoolCourses(schoolId).some((course) =>
    course.programs.some((program) =>
      program.courses.some((item) =>
        item.pricingTiers.some((tier) => {
          const tierMin = tier.weekRange?.min ?? 1;
          const tierMax = tier.weekRange?.max ?? tierMin;
          return tierMin <= weeks && tierMax >= weeks;
        }),
      ),
    ),
  );
}

export function getCountryById(countryId?: number): Country | undefined {
  return countriesV2.find((country) => country.id === countryId);
}

export function getCityById(cityId?: number): City | undefined {
  return citiesV2.find((city) => city.id === cityId);
}
