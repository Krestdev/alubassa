import React from 'react'

interface Props {
    name: string,
    title: string
}

const Head = ({name, title}: Props) => {
  return (
    <div className='w-full bg-gray-100'>
        <div className='max-w-[1106px] w-full mx-auto py-24'>
            <p className='text-[16px] text-primary text-center font-semibold'>{name}</p>
            <h2 className='text-gray-900 text-center'>{title}</h2>
        </div>
    </div>
  )
}

export default Head
