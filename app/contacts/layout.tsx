import Head from '@/components/Head'
import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const ContactsLayout = ({ children }: Props) => {
    const t = useTranslations("contact")
    
    return (
        <div>
            <Head name={t("name")} title={t("title")} />
            {children}
        </div>
    )
}

export default ContactsLayout

export const metadata = {
    title: "Contacts", 
    description:  "Contacts", 
}