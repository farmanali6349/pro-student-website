"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function WhatsappWidget() {
  const t = useTranslations("nav");
  const tc = useTranslations("contact");

  const whatsapp = {
    icon: "ic:baseline-whatsapp",
    href: "https://wa.me/966580666525",
    label: "Whatsapp",
  };
  const call = {
    icon: "ion:call-outline",
    href: "tel:+966580666525",
    label: "Call",
  };

  return (
    <>
      <Link
        href={whatsapp.href}
        className="hidden transiton group cursor-pointer h-25 w-60 border-4 border-dark-orange rounded-t-3xl fixed left-10 bottom-0 bg-white sm:grid items-center grid-cols-[9fr_4fr] gap-2 z-10"
      >
        <div className="flex flex-col items-center justify-center p-3">
          {/* Text */}
          <h4 className="w-full font-bold text-2xl">{t("contact")}</h4>
          <p className="w-full text-base mt-1">
            <span dir="ltr">+966580666525</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Icon
            icon={"logos:whatsapp-icon"}
            width={40}
            className="group-hover:scale-[1.3] transition"
          />
        </div>
      </Link>

      <div
        className="group sm:hidden w-full fixed right-0 bottom-0 bg-linear-to-l from-dark-orange via-light-orange to-white h-15 flex gap-4 items-center justify-between p-4 z-5"
        dir="ltr"
      >
        <Link href={whatsapp.href} target="_blank" className="">
          <Icon
            icon={whatsapp.icon}
            width={30}
            className="group-hover:scale-[1.3] transition"
          />
        </Link>
        <h4 className="base-1 text-sm font-medium">{tc("contactLine")}</h4>
        <Link href={call.href} target="_blank" className="">
          <Icon
            icon={call.icon}
            width={30}
            className="group-hover:scale-[1.3] transition"
          />
        </Link>
      </div>
    </>
  );
}
