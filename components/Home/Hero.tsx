"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  const t = useTranslations("home.hero");

  return (
    <div className="relative overflow-hidden flex justify-center min-h-full h-[calc(100vh-88px)] w-full">
      <div className="absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-b from-white to-transparent" />
      <img
        src="/Images/background.webp"
        alt="background"
        className="absolute top-0 left-0 -z-20 w-full h-full object-cover object-bottom"
      />
      {/**Content */}
      <div className="flex flex-col gap-10 component max-w-[918px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-left sm:text-center max-w-[875px]">
            {t("title")}
          </h1>
          <p className="font-light text-left text-base sm:text-lg">{t("description")}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-3">
          <Link href={"/products"}>
            <Button size={"lg"}>{t("ourProducts")}</Button>
          </Link>
          <Link href={"/contact"}>
            <Button size={"lg"} variant={"outline"}>
              {t("contactUs")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
