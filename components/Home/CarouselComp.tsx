import { useTranslations } from 'next-intl'
import React from 'react'
import ImageCarousel from './ImageCarousel';

const CarouselComp = () => {
  const t = useTranslations("home.expertise");
  return (
    <div className='flex flex-col gap-12 py-24 containerBloc'>
      <div className='flex flex-col items-center max-w-[918px] gap-7 mx-auto'>
        <h2 className='text-black'>{t("title")}</h2>
        <p className='text-center text-[16px]'>{t("description")}</p>
      </div>
      <ImageCarousel />
    </div>
  )
}

export default CarouselComp
