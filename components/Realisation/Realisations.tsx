import { RevealGroup } from "../reveal"

const Realisations = () => {
    return (
        <RevealGroup blur={3} y={20} className='component @container flex flex-col gap-7 sm:gap-9 md:gap-10 lg:gap-12'>
            <img src="/Images/alubassa-6.webp" alt="your health our concern" className="w-full h-auto" />
            <div className="grid grid-cols-1 @min-[760px]:grid-cols-2 gap-3">
                <img src="/Images/alubassa-14.webp" alt="coquelle-canari" className="w-full h-auto" />
                <img src="/Images/alubassa-13.webp" alt="daga" className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 @min-[760px]:grid-cols-2 gap-3">
                <img src="/Images/alubassa-12.webp" alt="zero teflon" className="w-full h-auto" />
                <img src="/Images/alubassa-10.webp" alt="coquelle bombée" className="w-full h-auto" />
                <img src="/Images/alubassa-9.webp" alt="sauteuse" className="w-full h-auto" />
                <img src="/Images/alubassa-8.webp" alt="gobelet" className="w-full h-auto" />
            </div>
            <div className='first-gallery'>
                <img src="/Alubassa/toles.webp" alt="image" className='w-full h-auto aspect-square object-cover photo1' />
                <img src="/Alubassa/grid.webp" alt="image" className='w-full h-auto aspect-square object-cover photo3' />
                <img src="/Alubassa/pots2.webp" alt="image" className='w-full h-auto aspect-square object-cover photo2' />
                <img src="/Alubassa/gates.webp" alt="image" className='w-full h-auto aspect-square object-cover photo4' />
                <img src="/Alubassa/aluminum.webp" alt="image" className='w-full h-auto aspect-square object-cover photo5' />
            </div>
            {/* <div className='second-gallery'>
                <img src="/realisations/rea6.webp" alt="image" className='w-full h-auto aspect-square object-cover item1' />
                <img src="/realisations/rea7.webp" alt="image" className='w-full h-auto aspect-square object-cover item2' />
                <img src="/realisations/rea8.webp" alt="image" className='w-full h-auto aspect-square object-cover item3' />
                <img src="/realisations/rea9.webp" alt="image" className='w-full h-auto aspect-square object-cover item4' />
                <img src="/realisations/rea10.webp" alt="image" className='w-full h-auto aspect-square object-cover item5' />
            </div> */}
        </RevealGroup>
    )
}

export default Realisations
