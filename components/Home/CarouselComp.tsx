import { useTranslations } from 'next-intl';
import ImageCarousel from './ImageCarousel';
import { RevealGroup } from '../reveal';

const Experience = () => {
  const t = useTranslations("home.expertise");
  return (
    <RevealGroup y={20} opacity={0} delay={0.25} delayGap={0.25} className='component px-0 max-w-full flex flex-col gap-7 sm:gap-10 lg:gap-12 items-center'>
      <div className='px-7 lg:px-0 header-component'>
        <h2 className='text-black'>{t("title")}</h2>
        <p className='text-center'>{t("description")}</p>
      </div>
      <ImageCarousel />
    </RevealGroup>
  )
}

export default Experience
