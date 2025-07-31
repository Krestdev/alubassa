import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from './ui/button';

const ContactFooter = () => {
    const t = useTranslations("contactFooter");

    return (
        <div
            style={{
                backgroundImage: "url('/contactFooter.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className='relative flex flex-col py-24'
        >
            <div 
                className='absolute w-full h-full top-0 left-0 z-10'
                style={{
                    backgroundColor: 'rgba(15, 46, 94, 1)', 
                    mixBlendMode: 'multiply'
                }}
            />
            
            <div className='flex flex-col gap-12 max-w-[918px] w-full mx-auto z-10'>
                <h1 className='text-white text-center'>{t("title")}</h1>
                <Button className='bg-white text-gray-900 hover:bg-white/80 w-fit mx-auto'>{t("contactUs")}</Button>
            </div>
        </div>
    );
};

export default ContactFooter;