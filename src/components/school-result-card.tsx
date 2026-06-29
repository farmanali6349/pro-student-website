import Image from "next/image";
import { type Locale } from "@/lib/data";

type Props = {
  name: string;
  institute: string;
  topCourse: string;
  country: string;
  city: string;
  price?: number;
  image: string;
  locale: Locale;
};

export default function SchoolResultCard({
  name,
  institute,
  topCourse,
  country,
  city,
  price,
  image,
  locale,
}: Props) {
  return (
    <article className="rounded-2xl border border-white/20 bg-cream shadow-xl shadow-black/5 overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={`/images/schools/${image}`}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase text-dark-orange">
            {country} · {city}
          </p>
          <h3 className="text-2xl font-bold text-gray-dark">{name}</h3>
          <p className="text-sm text-gray-dark/75">{topCourse}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-dark/50">
              {institute}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-dark/75">Price from</p>
            <p className="text-xl font-bold text-dark-orange">
              {price ? `£${price}` : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
