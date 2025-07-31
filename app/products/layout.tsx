import Head from '@/components/Head'
import { useTranslations } from 'next-intl'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const ProductsLayout = ({ children }: Props) => {
    const t = useTranslations("products")
    
    return (
        <div>
            <Head name={t("name")} title={t("title")} />
            {children}
        </div>
    )
}

export default ProductsLayout

export const metadata = {
    title: "Nos produits", 
    description: "Our products", 
}