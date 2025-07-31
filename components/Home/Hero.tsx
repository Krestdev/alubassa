"use client"

import { useTranslations } from 'next-intl';
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const t = useTranslations("home.hero");
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        bottom: "0",
      }}
      className='relative flex justify-center min-h-[936px] h-full w-full'
    >
      {/* <div className='absolute w-full h-full top-0 left-0 z-10 bg-white/50'/> */}
      <div className='flex flex-col py-24 max-w-[1106px] w-full mx-auto z-10'>
        <div className='flex flex-col gap-10 max-w-[917px] w-full mx-auto'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-center max-w-[875px]'>{t("title")}</h1>
            <p className='text-center'>{t("description")}</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-3'>
            <Button onClick={() => router.push("/products")} >{t("ourProducts")}</Button>
            <Button onClick={() => router.push("/contact")} variant={"outline"}>{t("contactUs")}</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
