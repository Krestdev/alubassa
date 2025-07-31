"use client"

import { useTranslations } from 'next-intl'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {

    const t = useTranslations("header")
    const router = useRouter();

    const pages = [
        {
            title: t("home"),
            url: "/"
        },
        {
            title: t("about"),
            url: "/about"
        },
        {
            title: t("products"),
            url: "/products"
        },
        {
            title: t("realisations"),
            url: "/realisations"
        },
        {
            title: t("contact"),
            url: "/contact"
        }
    ]
    return (
        <div className='flex flex-col bg-[#0C2348] pt-10'>
            <div className='flex flex-col items-center gap-7 py-7 border-b border-b-primary'>
                <img src="/logo2.png" alt="Logo" className='h-6 w-auto mx-auto' />
                <div className='flex items-center gap-2'>
                    {
                        pages.map((page) => (
                            <Button variant={"ghost"} onClick={() => router.push(page.url)} className='text-white mx-auto' key={page.title}>{page.title}</Button>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-row items-center justify-between containerBloc h-[72px]'>
                <div className='grid grid-cols-3 items-center justify-between gap-2 w-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <Link className='text-[#A9CAFF] text-[14px] underline px-4 py-2 gap-2 rounded-[6px] h-9' href={"/"}>{t("term")}</Link>
                        <Link className='text-[#A9CAFF] text-[14px] underline px-4 py-2 gap-2 rounded-[6px] h-9' href={"/"}>{t("privacy")}</Link>
                    </div>
                    <p className='text-[#A9CAFF] text-[14px]'>{t("copyright")}</p>
                    <p className='text-[#A9CAFF] text-[14px] text-end'>{t("developed") + " "}<Link target='_blank' href={"https://krestdev.com/"}>Krestdev</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
