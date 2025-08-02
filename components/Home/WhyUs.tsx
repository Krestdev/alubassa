
import { LucideShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { RevealGroup } from '../reveal';

const WhyUs = () => {
    const t = useTranslations("home.whyUs");
    const answers = [t("r1"), t("r2"), t("r3"), t("r4"), t("r5")];
  return (
    <RevealGroup y={20} opacity={0} blur={2} className='component grid grid-cols-1 gap-7 lg:grid-cols-2 md:gap-12 lg:gap-18 place-items-center'>
        <img src="/images/technicians.webp" alt="technicians" className='w-full h-auto aspect-video rounded-lg object-cover' />
        <div className='flex flex-col gap-7 px-7'>
            <h2>{t("title")}</h2>
            <div className='flex flex-col gap-5'>
                {
                    answers.map((item, index) => {
                        return(
                            <div key={index} className='flex items-center gap-[22px]'>
                                <LucideShieldCheck />
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </RevealGroup>
  )
}

export default WhyUs
