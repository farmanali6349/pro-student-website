import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";

export async function CompleteSection() {
  const t = await getTranslations("complete");

  const cards = [
    {
      icon: "ph:graduation-cap-bold",
      title: t("card1Title"),
      desc: t("card1Desc"),
    },
    {
      icon: "ph:file-text-bold",
      title: t("card2Title"),
      desc: t("card2Desc"),
    },
    {
      icon: "ph:house-line-bold",
      title: t("card3Title"),
      desc: t("card3Desc"),
    },
    {
      icon: "ph:compass-bold",
      title: t("card4Title"),
      desc: t("card4Desc"),
    },
  ];

  return (
    <section className="relative  py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-dark-orange">
          {t("label")}
        </span>
        <h2 className="mt-2 max-w-2xl text-balance text-2xl font-extrabold text-gray-dark sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-gray-light">
          {t("subtitle")}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-linear-to-t from-dark-orange/50 to-white/30 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-xs h-100 flex flex-col gap-10"
            >
              <div className="flex flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl">
                  <Icon icon={card.icon} width={30} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-dark">
                  {card.title}
                </h3>
              </div>
              <div>
                <p className="mt-2 text-base leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
