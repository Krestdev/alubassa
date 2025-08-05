import Values from '@/components/About/Values'
import Partner from '@/components/Home/Partner'
import { RevealGroup } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Page = () => {
  const t = useTranslations("Apropos")
  return (
    <div>
      <RevealGroup y={20} delay={0.125} delayGap={0.25} className='component flex flex-col-reverse gap-7 lg:flex-row sm:gap-10 lg:justify-between'>
        <div className='w-full lg:max-w-[542px] grid gap-7'>
          <h2>{t("who")}</h2>
          <p><strong>{t("description1")}</strong><br />{t("description2")}</p>
          <Link href={"/about"}><Button variant={"outline"}>{"En savoir plus"}<ChevronRight size={16} /></Button></Link>
        </div>
        <img src="/Images/expertise.webp" alt="alubassa team" className='w-full h-auto lg:max-w-md aspect-[4/3] rounded-md object-cover' />
      </RevealGroup>
      <Values />
      <Partner />
      <div className='component max-w-full relative'>
        <div className="absolute -z-10 w-full h-full top-0 left-0 bg-[url('/images/technicians-2k.webp')] bg-cover bg-center" />
        <div className='max-w-[1162px] w-full mx-auto flex justify-center md:justify-end p-0 sm:p-7'>
          <div className='max-w-[448px] w-full bg-white rounded-[12px] title-description p-7'>
            <h2>{t("equipeTitle")}</h2>
            <p>{t("equipeDescription")}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page
