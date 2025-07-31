import { LucideStar, LucideWrench } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

const Values = () => {
    const t = useTranslations("Apropos");
    const descEx = [t("descriptionExpertise.dex1"), t("descriptionExpertise.dex2"), t("descriptionExpertise.dex3"), t("descriptionExpertise.dex4")];
    const descEn = [t("descriptionEngagement.den1"), t("descriptionEngagement.den2"), t("descriptionEngagement.den3"), t("descriptionEngagement.den4")];
  return (
    <div className='max-w-[1106px] w-full mx-auto px-7 py-24 flex flex-col gap-12'>
        <div className='grid grid-cols-2 gap-18'>
            <div className='flex flex-col gap-7'>
                <h2 className='text-[#0F2E5E]'>{t("titleMission")}</h2>
                <p>{t("descriptionMission")}</p>
            </div>
            <div className='flex flex-col gap-7'>
                <h2 className='text-[#0F2E5E]'>{t("titleValues")}</h2>
                <p>{t("descriptionValues")}</p>
            </div>
            <div className='flex flex-col gap-7'>
                <h2 className='text-[#0F2E5E]'>{t("titleExpertise")}</h2>
                <div className='flex flex-col gap-5'>
                    {
                        descEx.map((d, index) => {
                            return(
                                <div key={index} className='flex items-center gap-[22px]'>
                                    <LucideWrench />
                                    <p className='max-w-[406px]'>{d}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-7'>
                <h2 className='text-[#0F2E5E]'>{t("titleEngagement")}</h2>
                <div className='flex flex-col gap-5'>
                    {
                        descEn.map((d, index) => {
                            return(
                                <div key={index} className='flex items-center gap-[22px]'>
                                    <LucideStar />
                                    <p className='max-w-[406px]'>{d}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Values
