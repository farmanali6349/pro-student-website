import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("homePage");
  return <h1>{t("heroTitle")}</h1>;
}
