
import { LucideShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

const WhyUs = () => {
    const t = useTranslations("home.whyUs");
    const reponses = [t("r1"), t("r2"), t("r3"), t("r4"), t("r5")];
  return (
    <div className='grid grid-cols-2 gap-18 py-24 max-w-[1106px] w-full mx-auto'>
        <img src="/Images/whyus.webp" alt="Wy Us" className='w-full h-full rounded-[12px] object-center' />
        <div className='flex flex-col gap-7 px-7'>
            <h2 className='text-[#0F2E5E]'>{t("title")}</h2>
            <div className='flex flex-col gap-5'>
                {
                    reponses.map((r, index) => {
                        return(
                            <div key={index} className='flex items-center gap-[22px]'>
                                <LucideShieldCheck />
                                <p>{r}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default WhyUs
