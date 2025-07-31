import React from 'react'

const Realisations = () => {
    return (
        <div className='flex flex-col gap-12 py-24 max-w-[1106px] w-full mx-auto'>
            <div className='flex flex-row items-center justify-between gap-[22px]'>
                <div className='flex flex-col gap-[22px]'>
                    <img src="/realisations/rea1.webp" alt="" className='max-w-[260px] w-full h-auto aspect-square object-cover' />
                    <img src="/realisations/rea2.webp" alt="" className='max-w-[260px] w-full h-auto aspect-square object-cover' />
                </div>
                <img src="/realisations/rea3.webp" alt="" className='max-w-[542px] w-full h-auto aspect-square object-cover' />
                <div className='flex flex-col gap-[22px]'>
                    <img src="/realisations/rea4.webp" alt="" className='max-w-[260px] w-full h-auto aspect-square object-cover' />
                    <img src="/realisations/rea5.webp" alt="" className='max-w-[260px] w-full h-auto aspect-square object-cover' />
                </div>
            </div>
            <div className='flex flex-row items-center gap-[22px]'>
                <div className='grid grid-cols-2 gap-[22px]'>
                    <img src="/realisations/rea6.webp" alt="" className='w-full h-auto aspect-square object-cover' />
                    <img src="/realisations/rea7.webp" alt="" className='w-full h-auto aspect-square object-cover' />
                    <img src="/realisations/rea8.webp" alt="" className='w-full h-auto aspect-square object-cover' />
                    <img src="/realisations/rea9.webp" alt="" className='w-full h-auto aspect-square object-cover' />
                </div>
                <img src="/realisations/rea10.webp" alt="" className=' max-w-[542px] w-full h-auto aspect-square object-cover' />
            </div>
        </div>
    )
}

export default Realisations
