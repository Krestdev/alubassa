"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import LocaleSwitcher from './Lang/localSwitcher'
import Link from 'next/link'

const Header = () => {
    const t = useTranslations("header")
    const router = useRouter();
    const pathname = usePathname();

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
        }
    ]

    const isActive = (url: string) => {
        return pathname === url;
    }

    return (
        <div className='flex flex-row items-center justify-between containerBloc h-[88px] px-[167px]'>
            <div className='flex flex-row items-center gap-4'>
                <Link href={"/"}><img src="/logo.png" alt="logo" className='h-6 w-auto' /></Link>
                {
                    pages.map((page) => (
                        <Button variant={"ghost"} onClick={() => router.push(page.url)} key={page.title} className={isActive(page.url) ? "text-primary" : ""}>{page.title}</Button>
                    ))
                }
            </div>
            <div className='flex flex-row items-center gap-3'>
                <LocaleSwitcher />
                <Button variant={"default"} onClick={() => router.push("/contacts")}>{t("contact")}</Button>
            </div>
        </div>
    )
}

export default Header
