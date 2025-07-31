import Head from '@/components/Head'
import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const RealisationsLayout = ({ children }: Props) => {
    const t = useTranslations("realisations")
    
    return (
        <div>
            <Head name={t("name")} title={t("title")} />
            {children}
        </div>
    )
}

export default RealisationsLayout

export const metadata = {
    title: "Réalisations", 
    description: "Realisations", 
}