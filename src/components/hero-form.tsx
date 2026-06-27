"use client";

import { useForm, Controller } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import {
  countries,
  cities,
  citiesByCountry,
  schoolsByCity,
  coursesBySchool,
  tx,
  type Locale,
} from "@/lib/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
type FormValues = {
  country: string;
  city: string;
  school: string;
  course: string;
  startDate: string;
  duration: string;
  accommodation: string;
  airportPickup: string;
};

const durations = Array.from({ length: 48 }, (_, i) => i + 1);

export function HeroForm() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;

  const { register, handleSubmit, watch, setValue, control } =
    useForm<FormValues>({
      defaultValues: {
        country: "",
        city: "",
        school: "",
        course: "",
        startDate: "",
        duration: "",
        accommodation: "no",
        airportPickup: "no",
      },
    });

  const country = watch("country");
  const city = watch("city");
  const school = watch("school");

  const availableCities = country ? citiesByCountry(Number(country)) : [];
  const availableSchools = city ? schoolsByCity(Number(city)) : [];
  const availableCourses = school ? coursesBySchool(Number(school)) : [];

  function onSubmit(data: FormValues) {
    console.log("[v0] Hero quote form submitted:", data);
  }

  const selectClass =
    "w-full appearance-none rounded-lg border border-white/40 bg-white/70 px-3 py-2.5 text-sm text-gray-dark outline-none transition focus:border-dark-orange focus:bg-white";
  const labelClass = "mb-1.5 block text-xs font-semibold drop-shadow";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="backdrop-blur-xs bg-white/20 border-1/2 border-white/40 rounded-2xl p-4 shadow-2xl sm:p-5"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* Country */}
        <div>
          <label className={labelClass}>{t("selectCountry")}</label>
          <div className="relative">
            <select
              className={selectClass}
              {...register("country")}
              onChange={(e) => {
                setValue("country", e.target.value);
                setValue("city", "");
                setValue("school", "");
                setValue("course", "");
              }}
            >
              <option value="">{t("selectCountryPlaceholder")}</option>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {tx(c.name, locale)}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        {/* City */}
        <div>
          <label className={labelClass}>{t("selectCity")}</label>
          <div className="relative">
            <select
              className={selectClass}
              disabled={!country}
              {...register("city")}
              onChange={(e) => {
                setValue("city", e.target.value);
                setValue("school", "");
                setValue("course", "");
              }}
            >
              <option value="">{t("selectCityPlaceholder")}</option>
              {availableCities.map((c) => (
                <option key={c.id} value={c.id}>
                  {tx(c.name, locale)}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        {/* School */}
        <div>
          <label className={labelClass}>{t("selectSchool")}</label>
          <div className="relative">
            <select
              className={selectClass}
              disabled={!city}
              {...register("school")}
              onChange={(e) => {
                setValue("school", e.target.value);
                setValue("course", "");
              }}
            >
              <option value="">{t("selectSchoolPlaceholder")}</option>
              {availableSchools.map((s) => (
                <option key={s.id} value={s.id}>
                  {tx(s.name, locale)}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        {/* Course */}
        <div>
          <label className={labelClass}>{t("selectCourse")}</label>
          <div className="relative">
            <select
              className={selectClass}
              disabled={!school}
              {...register("course")}
            >
              <option value="">{t("selectCourse")}</option>
              {availableCourses.map((c) => (
                <option key={c.id} value={c.id}>
                  {tx(c.name, locale)}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>

        {/* Start date */}
        <div className="w-full">
          <label className="labelClass w-full">{t("courseStartDate")}</label>
          <div className="w-full" dir="ltr">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholderText={t("courseStartDatePlaceholder")}
                  filterDate={(date) => date.getDay() === 1} // only Mondays
                  dateFormat="yyyy-MM-dd"
                  className={selectClass}
                  calendarStartDay={1} // Monday as first column
                  selected={field.value as unknown as Date} // ensures selected date shows in input
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(date: any) => field.onChange(date)} // updates form state
                />
              )}
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className={labelClass}>{t("courseDuration")}</label>
          <div className="relative">
            <select className={selectClass} {...register("duration")}>
              <option value="">{t("courseDurationPlaceholder")}</option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>
      </div>

      {/* Yes / No options */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <YesNo
          label={t("accommodation")}
          name="accommodation"
          value={watch("accommodation")}
          onChange={(v) => setValue("accommodation", v)}
          yes={t("yes")}
          no={t("no")}
        />
        <YesNo
          label={t("airportPickup")}
          name="airportPickup"
          value={watch("airportPickup")}
          onChange={(v) => setValue("airportPickup", v)}
          yes={t("yes")}
          no={t("no")}
        />
        <div className="mt-6">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-orange px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-red"
          >
            {t("search")}
          </button>
        </div>
      </div>
    </form>
  );
}

function Chevron() {
  return (
    <Icon
      icon="lucide:chevron-down"
      width={16}
      className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-gray-light"
    />
  );
}

function YesNo({
  label,
  value,
  onChange,
  yes,
  no,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  yes: string;
  no: string;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-xs font-semibold drop-shadow">{label}</legend>
      <div className="flex gap-2">
        {[
          { v: "yes", l: yes },
          { v: "no", l: no },
        ].map((opt) => (
          <label
            key={opt.v}
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-semibold transition ${
              value === opt.v
                ? "bg-dark-orange text-white border-dark-orange"
                : "bg-transparent hover:bg-white/50 border-transparent"
            }`}
          >
            <input
              type="radio"
              // name={name}
              value={opt.v}
              checked={value === opt.v}
              onChange={() => onChange(opt.v)}
              className="h-4 w-4 accent-dark-orange"
            />
            {opt.l}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
