import { RevealGroup } from "../reveal"

const Realisations = () => {
    return (
        <RevealGroup blur={3} y={20} className='component flex flex-col gap-7 sm:gap-9 md:gap-10 lg:gap-12'>
            <div className='first-gallery'>
                <img src="/Alubassa/toles.webp" alt="image" className='w-full h-auto aspect-square object-cover photo1' />
                <img src="/Alubassa/grid.webp" alt="image" className='w-full h-auto aspect-square object-cover photo3' />
                <img src="/Alubassa/pots2.webp" alt="image" className='w-full h-auto aspect-square object-cover photo2' />
                <img src="/Alubassa/gates.webp" alt="image" className='w-full h-auto aspect-square object-cover photo4' />
                <img src="/Alubassa/aluminum.webp" alt="image" className='w-full h-auto aspect-square object-cover photo5' />
            </div>
            <div className='second-gallery'>
                <img src="/realisations/rea6.webp" alt="image" className='w-full h-auto aspect-square object-cover item1' />
                <img src="/realisations/rea7.webp" alt="image" className='w-full h-auto aspect-square object-cover item2' />
                <img src="/realisations/rea8.webp" alt="image" className='w-full h-auto aspect-square object-cover item3' />
                <img src="/realisations/rea9.webp" alt="image" className='w-full h-auto aspect-square object-cover item4' />
                <img src="/realisations/rea10.webp" alt="image" className='w-full h-auto aspect-square object-cover item5' />
            </div>
        </RevealGroup>
    )
}

export default Realisations
