import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

interface Props {
    title: string,
    description1: string
    description2: string
    className?: string
    className1?: string
    className2?: string
    button?: string
    image: string
}

const ImageText = ({ title, description1, description2, image, button, className = "text-[#0F2E5E] max-w-[542px]", className1 = " text-[18px] text-gray-700", className2 = "max-w-[542px] text-[18px] text-gray-700" }: Props) => {
    return (
        <div className='max-w-[1162px] w-full mx-auto flex flex-row items-center justify-between px-7 py-24'>
            <div className='flex flex-col gap-7'>
                <h2 className={`text-4xl ${className}`}>{title}</h2>
                <div className='max-w-[542px]'>
                    <p className={`text-2xl text-[18px] ${className1}`}>{description1}</p>
                    <p className={`text-2xl text-[18px] ${className2}`}>{description2}</p>
                </div>
                {button && <Button variant={"outline"} className='w-fit'>
                    {button}
                    <ChevronRight />
                </Button>}
            </div>
            <img src={image} alt="" className='max-w-[448px] w-full h-auto aspect-[4/3] rounded-[12px]' />
        </div>
    )
}

export default ImageText
