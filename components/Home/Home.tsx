import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '../ui/button'
import Experience from './CarouselComp'
import Hero from './Hero'
import Partner from './Partner'
import ProductsComp from './ProductsComp'
import WhyUs from './WhyUs'

const Home = () => {
  const t = useTranslations("home.imageText");

  return (
    <div>
      <Hero />
      <section className='component flex flex-col-reverse gap-7 lg:flex-row sm:gap-10 lg:justify-between'>
        <div className='w-full lg:max-w-[542px] grid gap-7'>
          <h2>{t("title")}</h2>
          <p>{t("description1")}<br/>{t("description2")}</p>
          <Link href={"/about"}><Button variant={"outline"}>{"En savoir plus"}<ChevronRight size={16}/></Button></Link>
        </div>
        <img src="/Images/expertise.webp" alt="alubassa team" className='w-full h-auto max-w-lg lg:max-w-md aspect-[4/3] rounded-md object-cover'/>
      </section>
      <Experience />
      <Partner />
      <ProductsComp />
      <WhyUs />
    </div>
  )
}

export default Home
