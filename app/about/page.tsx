import Values from '@/components/About/Values'
import ImageText from '@/components/Home/ImageText'
import Partner from '@/components/Home/Partner'
import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {
  const t = useTranslations("Apropos")
  return (
    <div>
      <ImageText title={t("who")} description1={t("description1")} description2={t("description2")} image={'/Images/expertise.webp'} className1='font-bold max-w-[542px]' />
      <Values />
      <Partner />
      <div
        style={{
          backgroundImage: "url('/Images/whyUs.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='w-full px-[167px] py-24'>
          <div className='flex items-center justify-end gap-2 p-7'>
            <div className='max-w-[448px] w-full h-auto aspect-video bg-white rounded-[12px] flex flex-col gap-7 p-7'>
              <h2>{t("equipeTitle")}</h2>
              <p>{t("equipeDescription")}</p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Page
