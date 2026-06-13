import { getMessages } from "next-intl/server";
import myMessages from "@/../messages/en.json";
import Link from "next/link";
export async function CountryLinks() {
  const messsages = (await getMessages()) as typeof myMessages;
  return (
    <div className="w-full bg-gray-dark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6  text-white">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="py-6">
            <ul className="flex flex-col gap-1">
              {messsages.footer.countriesLinks.slice(0, 3).map((link) => (
                <li key={link.link} className="">
                  <span>{link.flagEmoji}</span>{" "}
                  <Link
                    href={link.link}
                    className="hover:underline hover:text-light-orange"
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-6">
            <ul className="flex flex-col gap-1">
              {messsages.footer.countriesLinks.slice(3, 6).map((link) => (
                <li key={link.link} className="">
                  <span>{link.flagEmoji}</span>{" "}
                  <Link
                    href={link.link}
                    className="hover:underline hover:text-light-orange"
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-6">
            <ul className="flex flex-col gap-1">
              {messsages.footer.countriesLinks.slice(6, 9).map((link) => (
                <li key={link.link} className="">
                  <span>{link.flagEmoji}</span>{" "}
                  <Link
                    href={link.link}
                    className="hover:underline hover:text-light-orange"
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
