import React from 'react'

interface Props {
  title: string
  images: string[]
  descriptions: string[]
  direction: string
}

const GridPlusText = ({ title, images, descriptions, direction = 'row' }: Props) => {
  return (
    <div className={`flex ${direction} items-center justify-between`}>
      <div className='max-w-[540px] w-full flex flex-col gap-5 px-5'>
        <h3>{title}</h3>
        <ul className='list-disc pl-5'>
          {descriptions.map((description, index) => (
            <li key={index}>
              <span className='ml-2'>{description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='max-w-[542px] w-full grid grid-cols-2 gap-[22px]'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            className='max-w-[260px] w-full h-auto aspect-[4/3] rounded-[12px] object-cover'
          />
        ))}
      </div>
    </div>
  )
}

export default GridPlusText