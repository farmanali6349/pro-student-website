import { schools, tx, type Locale } from "@/lib/data";
import { getLocale, getTranslations } from "next-intl/server";
import InstituteCard from "@/components/institute-card";

export default async function InstitutesPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("ctas");
  return (
    <div className="bg-linear-to-b from-dark-orange via-light-orange to-white w-full">
      {/* Filter */}
      <div></div>
      {/* Result / Institute Cards */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-7xl px-4 md:px-6 mx-auto py-20">
        {schools.map((school) => (
          <InstituteCard
            key={school.id}
            name={tx(school.name, locale)}
            description={tx(school.description, locale)}
            image={school.image || "school-placeholder.jpg"}
            cta={t("explore")}
          />
        ))}
      </div>
    </div>
  );
}
