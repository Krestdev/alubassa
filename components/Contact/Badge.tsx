import React from 'react'

interface Props {
    title: string,
    content: string | React.ReactNode
    icon: React.ReactNode
}

const Badge = ({title, content, icon}: Props) => {
  return (
    <div className='flex items-center justify-between gap-1 p-5 border border-gray-100 bg-white drop-shadow rounded-[12px]'>
        <div className='flex flex-col gap-1'>
            <p className='text-gray-700 text-[14px] max-w-[270px] w-full'>{title}</p>
            <p className='text-gray-900 text-[16px] font-semibold max-w-[270px] w-full'>{content}</p>
        </div>
        <div className='flex items-start h-full'>
            <div className='flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] text-white'>
            {icon}
        </div>
        </div>
    </div>
  )
}

export default Badge
