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
            target="_blank"
            href={
              "https://www.google.com/maps/place/%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8+%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%81+%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9+%D8%A8%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D8%AC%E2%80%AD/@24.7917656,46.6455765,17z/data=!4m8!3m7!1s0x3e2ee38770eb7917:0x1ca7174ebb00e878!8m2!3d24.7917656!4d46.6481568!9m1!1b1!16s%2Fg%2F11rw_rlwxc?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
            }
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
