import Head from '@/components/Head'
import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const AproposLayout = ({ children }: Props) => {
    const t = useTranslations("Apropos")
    
    return (
        <div>
            <Head name={t("name")} title={t("title")} />
            {children}
        </div>
    )
}

export default AproposLayout

export const metadata = {
    title: "A propos", 
    description: "About page", 
}