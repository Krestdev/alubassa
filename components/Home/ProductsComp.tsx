"use client"

import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import GridProduct from './GridProduct';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { RevealGroup } from '../reveal';

const ProductsComp = () => {
  const t = useTranslations("home.products");

  const imagesObj = [
    {
      id: 0,
      images: ["/products/cui1.webp", "/products/cui2.webp", "/products/cui3.webp", "/products/cui4.webp"]
    },
    {
      id: 1,
      images: ["/products/con1.webp", "/products/con2.webp", "/products/con3.webp", "/products/con4.webp"]
    },
    {
      id: 2,
      images: ["/products/ind1.webp", "/products/ind2.webp", "/products/ind3.webp", "/products/ind4.webp"]
    },
  ]

  const [tab, setTab] = useState(0);

  return (
    <RevealGroup y={20} delay={0.125} delayGap={0.25} blur={2} className='component flex flex-col items-center gap-12 overflow-hidden'>
      <div className='header-component'>
        <h2 className='text-center'>{t("title")}</h2>
        <p className='text-center text-[16px]'>{t("description")}</p>
      </div>
      <div className='flex flex-col items-center gap-8 max-w-[1106px]'>
        <div className='flex flex-wrap gap-3'>
          <Button onClick={() => setTab(0)} variant={"outline"} className={`${tab === 0 ? "bg-[#A9CAFF] hover:bg-[#A9CAFF]/80" : ""}`}>{t("cuisine")}</Button>
          <Button onClick={() => setTab(1)} variant={"outline"} className={`${tab === 1 ? "bg-[#A9CAFF] hover:bg-[#A9CAFF]/80" : ""}`}>{t("profile")}</Button>
          <Button onClick={() => setTab(2)} variant={"outline"} className={`${tab === 2 ? "bg-[#A9CAFF] hover:bg-[#A9CAFF]/80" : ""}`}>{t("industrie")}</Button>
        </div>
        <GridProduct images={imagesObj[tab].images.slice(0, 4)} />
        <Link href={"/products"}>
          <Button variant={"outline"}>
            {t("seeAll")}
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </RevealGroup>
  )
}

export default ProductsComp
