import Head from '@/components/Head'
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
    const t = useTranslations("terms");
  return (
    <div>
        <Head name={t("title")} title={t("title")}/>
    </div>
  )
}

export default Page