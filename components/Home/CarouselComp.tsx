import { useTranslations } from 'next-intl'
import React from 'react'
import ImageCarousel from './ImageCarousel';

const Experience = () => {
  const t = useTranslations("home.expertise");
  return (
    <div className='component px-0 max-w-full flex flex-col gap-7 sm:gap-10 lg:gap-12 items-center'>
      <div className='px-7 lg:px-0 header-component'>
        <h2 className='text-black'>{t("title")}</h2>
        <p className='text-center'>{t("description")}</p>
      </div>
      <ImageCarousel />
    </div>
  )
}

export default Experience
