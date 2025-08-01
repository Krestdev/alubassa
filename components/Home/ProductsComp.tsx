"use client"

import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import GridProduct from './GridProduct';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProductsComp = () => {
  const t = useTranslations("home.products");

  const imagesObj = [
    {
      id: 0,
      images: ["/Images/alu_7.png", "/Images/alu_7.png", "/Images/alu_7.png", "/Images/alu_7.png"]
    },
    {
      id: 1,
      images: ["/Images/alu_8.jpg", "/Images/alu_8.jpg", "/Images/alu_8.jpg", "/Images/alu_8.jpg"]
    },
    {
      id: 2,
      images: ["/Images/alu_9.jpg", "/Images/alu_9.jpg", "/Images/alu_9.jpg", "/Images/alu_9.jpg"]
    },
  ]

  const [tab, setTab] = useState(0);
  console.log(tab);

  return (
    <div className='component flex flex-col items-center gap-12 overflow-hidden'>
      <div className='header-component'>
        <h2 className='text-center'>{t("title")}</h2>
        <p className='text-center text-[16px]'>{t("description")}</p>
      </div>
      <div className='flex flex-col items-center gap-8 max-w-[1106px]'>
        <div className='flex gap-3'>
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
    </div>
  )
}

export default ProductsComp
