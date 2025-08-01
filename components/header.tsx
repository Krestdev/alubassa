"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSwitcher from './Lang/localSwitcher'
import Navlink from './navlink'
import MenuToggle from './menuToggle'
import { useState } from 'react'

const Header = () => {
    const t = useTranslations("header");
    const [menuToggle, setMenuToggle] = useState(false);

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

    return (
        <div className='flex items-center justify-between containerBloc h-[88px]'>
            <div className='flex flex-row items-center gap-4'>
                <Link href={"/"}><img src="/logo.png" alt="logo" className='h-6 w-auto' /></Link>
                <span className='hidden lg:flex gap-2'>
                    {
                        pages.map((page, id) => (
                            <Navlink key={id} title={page.title} href={page.url}/>
                        ))
                    }
                </span>
            </div>
            <div className='hidden lg:flex flex-row items-center gap-3'>
                <LocaleSwitcher />
                <Link href={"/contact"}><Button variant={"default"}>{t("contact")}</Button></Link>
            </div>
            <span className='inline-block lg:hidden'>
                <MenuToggle isOpen={menuToggle} toggle={()=>{setMenuToggle(prev=> !prev)}} />
            </span>
        </div>
    )
}

export default Header
