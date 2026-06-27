import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const columnLinks = t.raw("columnLinks") as string[];

  const linkColumns = [
    t("studyingEnglish"),
    t("recommendedSchools"),
    t("studyingEnglish2"),
  ];

  const socials = [
    {
      icon: "ri:twitter-x-fill",
      href: " https://x.com/prostudent_sa1?s=21&t=vBm6wMn94WQxunzIFhN6Yw",
      label: "X",
    },
    {
      icon: "mdi:instagram",
      href: "https://www.instagram.com/prostudent_sa1",
      label: "Instagram",
    },
    {
      icon: "ic:baseline-whatsapp",
      href: "https://wa.me/966580666525",
      label: "Whatsapp",
    },
    {
      icon: "mingcute:snapchat-line",
      href: "https://snapchat.com/t/UHZPEO9D",
      label: "Snapchat",
    },
  ];

  return (
    <footer className="mt-auto">
      {/* SEO link columns */}
      <div className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          {linkColumns.map((heading, ci) => (
            <div key={ci}>
              <h3 className="mb-3 text-sm font-bold text-dark-orange">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {columnLinks.map((link, li) => (
                  <li key={li}>
                    <a
                      href="#"
                      className="text-xs text-gray-light transition hover:text-dark-orange"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main dark footer */}
      <div className="bg-gray-dark text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5">
          {/* [1.6fr_1fr_1fr_1.2fr] */}
          <div>
            <Image
              src="/logo.png"
              alt="Pro Student"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/70">
              {t("about")}
            </p>
          </div>

          <FooterColumn
            title={t("services")}
            links={[
              { href: "#", name: t("links.institutes") },
              { href: "#", name: t("links.visaApplication") },
              { href: "#", name: t("links.offers") },
            ]}
          />
          <FooterColumn
            title={t("company")}
            links={[
              { href: "#", name: t("links.aboutCompany") },
              { href: "#", name: t("links.refundPolicy") },
              { href: "#", name: t("links.termsAndCondition") },
            ]}
          />
          <FooterColumn
            title={t("sources")}
            links={[
              { href: "#", name: t("links.offers") },
              { href: "#", name: t("links.getQuote") },
              { href: `/${locale}/blogs`, name: t("links.articles") },
            ]}
          />

          <div>
            <h3 className="mb-4 text-sm font-bold">{t("getInTouch")}</h3>
            <div className="flex flex-col gap-1">
              <a
                href="tel:966580666525"
                className="flex items-center gap-2 text-xs text-white/70 transition hover:text-light-orange"
              >
                <Icon icon="lucide:phone" width={14} />
                <span dir="ltr">+966 58 066 6525</span>
              </a>
              <a
                href="https://maps.app.goo.gl/oUMif88UVAuj2jqe7"
                target="_blank"
                className="mt-2 flex items-center gap-2 text-xs text-white/70 transition hover:text-light-orange"
              >
                <div className="size-14 h-fit">
                  <Icon icon="lucide:map" width={14} />
                </div>
                 Reem Commercial Center -عمارة معرض السيارات - VIP Lounge -الدور
                الاول-مكتب ١١, District, 3776 Dajla Street, AlSahafa, Riyadh
              </a>
              <div className="mt-4 flex gap-3">
                {socials.map((soc) => (
                  <a
                    target="_blank"
                    key={soc.href}
                    href={soc.href}
                    aria-label={soc.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-dark-orange"
                  >
                    <Icon icon={soc.icon} width={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6">
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-xs text-white/70 transition hover:text-light-orange"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
