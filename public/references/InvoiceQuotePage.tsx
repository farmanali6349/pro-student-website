"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { tx, type Locale } from "@/lib/data";
import {
  type Accommodation,
  type Course,
  type School,
  type Transfer,
} from "@/lib/new_data";
import { getCityById, getCountryById } from "@/lib/v2-search-data";

// This invoice uses the "Study Abroad" / Kaplan brand teal, which isn't part
// of the orange Pro Student theme in globals.css. Either add a token there:
//   --color-brand-teal: #009993;
// and swap the bg-[#009993] / text-[#009993] / border-[#009993] usages below
// for bg-brand-teal / text-brand-teal / border-brand-teal, or leave the
// arbitrary values as-is — both work with Tailwind v4.

type Props = {
  school: School;
  course?: Course;
  accommodation?: Accommodation;
  transfer?: Transfer;
  locale: Locale;
  initial: {
    weeks: number;
    residenceWeeks: number;
    startDate?: string;
    accommodationStartDate?: string;
    accommodationEndDate?: string;
    hasAccommodation: boolean;
    hasAirport: boolean;
    hasInsurance: boolean;
  };
  fees: School["fees"];
  coursePrice: number;
  accommodationPrice: number;
  transferPrice: number;
  insurancePrice: number;
  fixedFeesTotal: number;
  subtotal: number;
  offerNumber: string | number;
  /** ISO date string for the "Date:" line. Defaults to today. */
  issueDate?: string;
  currency?: string;
  bank: {
    accountNameArabic: string;
    iban: string;
    accountNumber: string;
  };
  phoneNumber: string;
  whatsappNumber?: string;
};

function formatAmount(value: number) {
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function addWeeks(dateStr: string | undefined, weeks: number) {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return undefined;
  d.setDate(d.getDate() + weeks * 7);
  return d.toISOString().slice(0, 10);
}

type QuoteRow = {
  id: string;
  title: string;
  subLines: string[];
  from?: string;
  to?: string;
  duration?: string;
  amount: number | null;
};

export default function InvoiceQuotePage({
  school,
  course,
  accommodation,
  transfer,
  locale,
  initial,
  fees,
  coursePrice,
  accommodationPrice,
  transferPrice,
  insurancePrice,
  fixedFeesTotal,
  subtotal,
  offerNumber,
  issueDate,
  currency = "SAR",
  bank,
  phoneNumber,
  whatsappNumber,
}: Props) {
  const t = useTranslations("schoolBooking");
  const isRtl = locale === "ar";
  const country = getCountryById(school.countryId);
  const city = getCityById(school.cityId);

  // Optional, additive fields. If your Course / Accommodation types grow
  // lessonsPerWeek / hoursPerWeek / studyTime / single-line service names,
  // they'll be picked up automatically here without touching the markup.
  const courseExtra = course as
    | (Course & {
        lessonsPerWeek?: number;
        hoursPerWeek?: number;
        studyTime?: string;
      })
    | undefined;

  const courseEnd = useMemo(
    () => addWeeks(initial.startDate, initial.weeks),
    [initial.startDate, initial.weeks],
  );

  const formattedDate = useMemo(() => {
    const d = issueDate ? new Date(issueDate) : new Date();
    return d.toLocaleDateString(isRtl ? "ar-SA" : "en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [issueDate, isRtl]);

  const rows = useMemo<QuoteRow[]>(() => {
    const list: QuoteRow[] = [];

    if (course) {
      const subLines = [
        ...(courseExtra?.lessonsPerWeek
          ? [`${courseExtra.lessonsPerWeek} ${t("lessonsPerWeek")}`]
          : []),
        ...(courseExtra?.hoursPerWeek
          ? [`${courseExtra.hoursPerWeek} ${t("hoursPerWeek")}`]
          : []),
        ...(courseExtra?.studyTime ? [courseExtra.studyTime] : []),
      ];
      list.push({
        id: "course",
        title: tx(course.name, locale),
        subLines,
        from: initial.startDate,
        to: courseEnd,
        duration: `${initial.weeks} ${t("weekCount", { count: initial.weeks })}`,
        amount: coursePrice,
      });
    }

    if (initial.hasAirport && transfer) {
      list.push({
        id: "transfer",
        title: tx(transfer.serviceName, locale),
        subLines: [],
        amount: transferPrice,
      });
    }

    if (initial.hasAccommodation && accommodation) {
      list.push({
        id: "accommodation",
        title: tx(accommodation.accommodationName, locale),
        subLines: [],
        from: initial.accommodationStartDate,
        to: initial.accommodationEndDate,
        duration: `${initial.residenceWeeks} ${t("weekCount", { count: initial.residenceWeeks })}`,
        amount: accommodationPrice,
      });
    }

    fees
      .filter((fee) => fee.frequency === "fixed")
      .forEach((fee, i) => {
        list.push({
          id: `fixed-fee-${i}`,
          title: fee.name?.[locale] ?? fee.name?.en ?? "",
          subLines: [],
          amount: fee.amount ?? null,
        });
      });

    fees
      .filter((fee) => fee.frequency === "week")
      .forEach((fee, i) => {
        list.push({
          id: `weekly-fee-${i}`,
          title: fee.name?.[locale] ?? fee.name?.en ?? "",
          subLines: [],
          duration: t("week"),
          amount: fee.amount ?? null,
        });
      });

    if (initial.hasInsurance) {
      list.push({
        id: "insurance",
        title: t("addInsurance"),
        subLines: [],
        amount: insurancePrice,
      });
    }

    return list;
  }, [
    accommodation,
    accommodationPrice,
    course,
    courseEnd,
    courseExtra,
    coursePrice,
    fees,
    initial.accommodationEndDate,
    initial.accommodationStartDate,
    initial.hasAccommodation,
    initial.hasAirport,
    initial.hasInsurance,
    initial.residenceWeeks,
    initial.startDate,
    initial.weeks,
    insurancePrice,
    locale,
    t,
    transfer,
    transferPrice,
  ]);

  void fixedFeesTotal;

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-white font-sans text-gray-dark"
    >
      <div className="h-[3px] bg-gray-dark" />

      <header className="bg-[#f1f1f1] px-6 py-6 sm:px-10 sm:py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-between gap-6">
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-bold">{t("date")}:</span> {formattedDate}
            </p>
            <p className="leading-6">
              {tx(school.name ?? { en: "School", ar: "مدرسة" }, locale)} ,
              <br />
              {country ? tx(country.name, locale) : ""},{" "}
              {city ? tx(city.name, locale) : ""}
            </p>
            <p>
              <span className="font-bold">{t("offerNumber")}:</span>{" "}
              {offerNumber}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <img
              src="/logos/study-abroad-logo.svg"
              alt={t("studyAbroadLogoAlt")}
              className="h-10 w-auto"
            />
            <img
              src="/logos/kaplan-logo.svg"
              alt="Kaplan International Languages"
              className="h-7 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 sm:px-10">
        <p className="text-center text-sm text-gray-dark">
          {t("confirmBookingIntro")}
        </p>

        <div className="mt-4 flex items-center gap-3 rounded-full bg-[#009993] px-5 py-3 text-white sm:px-6">
          <span className="flex h-6 w-9 flex-none items-center justify-center rounded-sm border border-white/70 text-[8px] font-bold leading-none">
            {t("bestPriceBadge")}
          </span>
          <p className="text-xs font-medium sm:text-sm">
            {t("bestPriceMessage")}
          </p>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-md border border-gray-200">
          <img
            src="/logos/study-abroad-watermark.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 opacity-10"
          />

          <table className="relative w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#009993] text-white">
                <th className="px-4 py-3 text-start font-semibold">
                  {t("bookingDetails")}
                </th>
                <th className="px-3 py-3 text-start font-semibold">
                  {t("from")}
                </th>
                <th className="px-3 py-3 text-start font-semibold">
                  {t("to")}
                </th>
                <th className="px-3 py-3 text-start font-semibold">
                  {t("duration")}
                </th>
                <th className="px-4 py-3 text-end font-semibold">
                  {t("amount")} | {t("sarShort")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-gray-200 bg-white">
                  <td className="px-4 py-3 align-top">
                    <p className="font-medium text-gray-dark">{row.title}</p>
                    {row.subLines.map((line) => (
                      <p key={line} className="text-gray-light">
                        {line}
                      </p>
                    ))}
                  </td>
                  <td className="px-3 py-3 align-top text-gray-dark">
                    {row.from ?? ""}
                  </td>
                  <td className="px-3 py-3 align-top text-gray-dark">
                    {row.to ?? ""}
                  </td>
                  <td className="px-3 py-3 align-top text-gray-dark">
                    {row.duration ?? ""}
                  </td>
                  <td className="px-4 py-3 text-end align-top font-medium text-gray-dark">
                    {row.amount != null ? formatAmount(row.amount) : ""}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-[#009993] text-white">
                <td colSpan={3} className="px-4 py-3 font-semibold">
                  {t("total")}
                </td>
                <td className="px-3 py-3" />
                <td className="px-4 py-3 text-end font-semibold">
                  {formatAmount(subtotal)} {currency}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <ul className="mt-4 space-y-2 text-xs sm:text-sm">
          <li className="flex gap-2 text-red">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-red" />
            <span>{t("noticeExchangeRate")}</span>
          </li>
          <li className="flex gap-2 text-red">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-red" />
            <span>{t("noticeInstitutePrices")}</span>
          </li>
          <li className="flex gap-2 font-bold text-gray-dark">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gray-dark" />
            <span>{t("noticeQuoteValidity")}</span>
          </li>
          <li className="flex gap-2 text-red">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-red" />
            <span>{t("noticeBookingNotConfirmed")}</span>
          </li>
        </ul>

        <div className="mt-6 border-t border-gray-200" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 text-xs sm:text-sm">
            <p>
              <span className="font-bold">{t("accountName")}:</span>{" "}
              <span dir="rtl">{bank.accountNameArabic}</span>
            </p>
            <p>
              <span className="font-bold">{t("iban")}:</span> {bank.iban}
            </p>
            <p>
              <span className="font-bold">{t("accountNumber")}:</span>{" "}
              {bank.accountNumber}
            </p>
          </div>
          <img
            src="/logos/al-rajhi-bank-logo.svg"
            alt="Al Rajhi Bank"
            className="h-12 w-auto"
          />
        </div>

        <div className="mt-6 border-t border-gray-200" />

        <div className="mt-6 flex items-center justify-center gap-3 text-sm font-medium text-[#009993]">
          <span dir="ltr" className="flex items-center gap-2">
            {phoneNumber}
            <CallIcon />
          </span>
          <span className="text-gray-200">|</span>
          <span dir="ltr" className="flex items-center gap-2">
            {whatsappNumber ?? phoneNumber}
            <WhatsAppIcon />
          </span>
        </div>
      </main>
    </div>
  );
}

function CallIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none rounded-full bg-[#009993] p-1 text-white"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none rounded-full bg-[#009993] p-1 text-white"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 7.2 3.8Zm4.5-6.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
