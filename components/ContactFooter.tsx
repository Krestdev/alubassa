import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import { RevealEffect } from "./reveal";

const ContactFooter = () => {
  const t = useTranslations("contactFooter");

  return (
    <div className="relative flex flex-col component max-w-full">
      <div className="absolute w-full h-full top-0 left-0 -z-10 bg-primary-800 bg-[url('/images/texture-grid.webp')] bg-blend-multiply bg-cover" />
      <div className="flex flex-col items-center gap-12 max-w-[918px] w-full mx-auto z-10">
        <RevealEffect effect="fadeInUp">
          <h1 className="text-white text-center">{t("title")}</h1>
        </RevealEffect>
        <RevealEffect effect="fadeInUp" delay={0.35}>
            <Button size={"lg"} className="w-fit" variant={"outline"}>
            {t("contactUs")}
            </Button>
        </RevealEffect>
      </div>
    </div>
  );
};

export default ContactFooter;
