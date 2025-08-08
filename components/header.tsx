"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSwitcher from './Lang/localSwitcher'
import Navlink from './navlink'
import MenuToggle from './menuToggle'
import { useEffect, useState } from 'react'
import { Drawer, DrawerContent, DrawerTitle } from './ui/drawer'

const Header = () => {
    const t = useTranslations("header");
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
        if (menuToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Nettoyage
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuToggle]);

    const pages = [
        {
            title: t("home"),
            url: "/",
        },
        {
            title: t("about"),
            url: "/about",
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
        <div className='w-full sticky top-0 z-50'>
            <div className='flex items-center justify-between containerBloc h-[88px]'>
                <div className='absolute w-full h-full top-0 left-0 -z-10 bg-white' />
                <div className='flex flex-row items-center gap-4'>
                    <Link href={"/"}><img src="/logo.png" alt="logo" className='h-6 w-auto' /></Link>
                    <span className='hidden lg:flex gap-2'>
                        {
                            pages.map((page, id) => (
                                <Navlink key={id} title={page.title} href={page.url} />
                            ))
                        }
                    </span>
                </div>
                <div className='hidden lg:flex flex-row items-center gap-3'>
                    <LocaleSwitcher />
                    <Link href={"/contact"}><Button variant={"default"}>{t("contact")}</Button></Link>
                </div>
                <span className='inline-block lg:hidden'>
                    <MenuToggle isOpen={menuToggle} toggle={() => { setMenuToggle(prev => !prev) }} />
                </span>

                <Drawer open={menuToggle} onOpenChange={setMenuToggle} direction='right'>
                    <DrawerContent className='flex flex-col gap-5 bg-primary max-w-[200px]'>
                        <div className="mx-auto w-full max-w-sm flex flex-col gap-4">
                            <DrawerTitle className='flex items-center justify-between'>
                                <MenuToggle color='#FFFFFF' isOpen={menuToggle} toggle={() => { setMenuToggle(prev => !prev) }} />
                                <LocaleSwitcher className='text-white' />
                            </DrawerTitle>

                            <div className='flex flex-col gap-2'>
                                {
                                    pages.map((page, id) => (
                                        <Button onClick={() => { setMenuToggle(false) }} key={id} variant={"link"} className='items-end w-fit'>
                                            <Navlink className="text-white" key={id} title={page.title} href={page.url} />
                                        </Button>
                                    ))

                                }
                                <Button onClick={() => { setMenuToggle(false) }} variant={"link"} className='items-end w-fit'>
                                    <Navlink className="text-white" title={t("contact")} href={"/contact"} />
                                </Button>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default Header
