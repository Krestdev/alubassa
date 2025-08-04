import { LucideStar, LucideWrench } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

const Values = () => {
    const t = useTranslations("Apropos");
    const descEx = [t("descriptionExpertise.dex1"), t("descriptionExpertise.dex2"), t("descriptionExpertise.dex3"), t("descriptionExpertise.dex4")];
    const descEn = [t("descriptionEngagement.den1"), t("descriptionEngagement.den2"), t("descriptionEngagement.den3"), t("descriptionEngagement.den4")];
  return (
    <div className='component grid grid-cols-1 sm:grid-cols-2 gap-y-7 sm:gap-y-10 md:gap-y-12 gap-x-10 sm:gap-x-12 md:gap-x-14 lg:gap-x-[72px]'>
            <div className='title-description'>
                <h2>{t("titleMission")}</h2>
                <p>{t("descriptionMission")}</p>
            </div>
            <div className='title-description'>
                <h2>{t("titleValues")}</h2>
                <p>{t("descriptionValues")}</p>
            </div>
            <div className='title-description'>
                <h2>{t("titleExpertise")}</h2>
                <div className='flex flex-col gap-5'>
                    {
                        descEx.map((d, index) => {
                            return(
                                <div key={index} className='flex items-center gap-[22px]'>
                                    <LucideWrench size={20} className='shrink-0'/>
                                    <p className='max-w-[406px]'>{d}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='title-description'>
                <h2>{t("titleEngagement")}</h2>
                <div className='flex flex-col gap-5'>
                    {
                        descEn.map((d, index) => {
                            return(
                                <div key={index} className='flex items-center gap-[22px]'>
                                    <LucideStar size={20} className='shrink-0'/>
                                    <p className='max-w-[406px]'>{d}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
      
    </div>
  )
}

export default Values
