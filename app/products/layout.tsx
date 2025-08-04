import Head from '@/components/Head'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
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

export async function generateMetadata():Promise<Metadata> {
    const locale = await getLocale();
   const messages = (await import(`@/messages/${locale}.json`)).default
   return {
       title: messages.products.metatitle, 
       description:  messages.products.metadescription, 
   }
}