import React from 'react'

interface GridProductProps {
    images: string[]
}

const GridProduct = ({images}: GridProductProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8'>
      {
        images.map((image, index) => (
          <img key={index} src={image} alt="" className='max-w-[250px] w-full h-auto aspect-square rounded-[12px] object-cover' />
        ))
      }
    </div>
  )
}

export default GridProduct
