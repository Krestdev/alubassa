import React from 'react'
import Hero from './Hero'
import ImageText from './ImageText'
import { useTranslations } from 'next-intl'
import CarouselComp from './CarouselComp'
import Partner from './Partner'
import ProductsComp from './ProductsComp'
import WhyUs from './WhyUs'

const Home = () => {
  const t = useTranslations("home.imageText");

  return (
    <div>
      <Hero />
      <ImageText
        title={t("title")}
        description1={t("description1")}
        description2={t("description2")}
        button={t("button")}
        image={"/Images/expertise.webp"}
      />
      <CarouselComp />
      <Partner />
      <ProductsComp />
      <WhyUs />
    </div>
  )
}

export default Home
