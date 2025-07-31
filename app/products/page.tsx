import CarouselComp from '@/components/Home/CarouselComp';
import GridPlusText from '@/components/Products/GridPlusText';
import { useTranslations } from 'next-intl';
import React from 'react'

const Page = () => {

    const t = useTranslations("products");
    const produits = [
        {
            title: t("cuisine"),
            images: ["/products/cui1.webp", "/products/cui2.webp", "/products/cui3.webp", "/products/cui4.webp"],
            description: [t('desCuisine.d1'), t('desCuisine.d2'), t('desCuisine.d3'), t('desCuisine.d4')]
        },
        {
            title: t("industriel"),
            images: ["/products/ind1.webp", "/products/ind2.webp", "/products/ind3.webp", "/products/ind4.webp"],
            description: [t('desIndustriel.d1'), t('desIndustriel.d2'), t('desIndustriel.d3'), t('desIndustriel.d4')]
        },
        {
            title: t("construction"),
            images: ["/products/con1.webp", "/products/con2.webp", "/products/con3.webp", "/products/con4.webp"],
            description: [t('desConstruction.d1'), t('desConstruction.d2'), t('desConstruction.d3'), t('desConstruction.d4')]
        },
    ]

  return (
    <div>
        <div className='flex flex-col gap-[60px] py-24 max-w-[1106px] w-full mx-auto'>
            {
                produits.map((produit, index) => {
                    return (
                        <GridPlusText key={index} title={produit.title} images={produit.images} descriptions={produit.description} direction={index % 2 === 0 ? "flex-row" : "flex-row-reverse"} />
                    )
                })
            }
        </div> 
      <CarouselComp />
    </div>
  )
}

export default Page
