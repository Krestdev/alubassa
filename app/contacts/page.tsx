import Badge from '@/components/Contact/Badge'
import ContactForm from '@/components/Contact/ContactForm'
import { LucideMail, LucidePhone, MapPinIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = () => {
    const t = useTranslations("contact")
    return (
        <div>
            <div className='max-w-[1106px] w-full mx-auto grid grid-cols-3 gap-[22px] py-[60px]'>
                <Badge title={t("localisation")} content={t("zone")} icon={<MapPinIcon />} />
                <Badge title={t("mail")} content={"contact@alubassa.com"} icon={<LucideMail />} />
                <Badge title={t("localisation")} content={
                    <>
                        +237 233 37 15 19<br />
                        +237 673 37 15 19
                    </>
                } icon={<LucidePhone />} />
            </div>
            <ContactForm />
        </div>
    )
}

export default page
