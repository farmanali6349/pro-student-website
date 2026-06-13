import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  count: string;
  rating: string;
};

export async function GoogleRating({ title, count, rating }: Props) {
  const t = await getTranslations("ctas");
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="max-w-xs font-semibold drop-shadow text-2xl">{title}</p>

      {/* First Approach */}
      <div className="flex items-center justify-between gap-5">
        {/* Link */}
        <div>
          <Link
            href={"/google-reviews"}
            className="text-xs underline cursor-pointer hover:text-dark-orange"
          >
            {t("seeReviews")}
          </Link>
        </div>
        {/* Avatars */}
        <div className="flex items-centers">
          <div className="size-10 rounded-full bg-white shadow-md -mx-2 flex items-center justify-center">
            <Image
              src={"https://i.pravatar.cc/40?img=68"}
              alt="Person"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="size-10 rounded-full bg-white shadow-md -mx-2 flex items-center justify-center">
            <Image
              src={"https://i.pravatar.cc/40?img=1"}
              alt="Person"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="size-10 rounded-full bg-white shadow-md -mx-2 flex items-center justify-center">
            <Image
              src={"https://i.pravatar.cc/40?img=3"}
              alt="Person"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="size-10 rounded-full bg-white shadow-md -mx-2 flex items-center justify-center">
            <Image
              src={"https://i.pravatar.cc/40?img=4"}
              alt="Person"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="size-10 rounded-full bg-white shadow-md -mx-2 flex items-center justify-center">
            <span className="text-xs">{count}</span>
          </div>
        </div>
        {/* Google Image */}
        <div className="size-10">
          <Icon icon="logos:google-icon" className="size-10" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold text-gray-dark">{rating}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              icon="material-symbols:star-rounded"
              width={16}
              className="text-light-orange"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
