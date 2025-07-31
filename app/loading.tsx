'use client'
import React, { useState, useEffect } from 'react'

const Loading = () => {
    const [stage, setStage] = useState(0) 

    useEffect(() => {
        const timer = setTimeout(() => {
            setStage(prev => (prev === 0 ? 1 : 0))
        }, 1800)

        return () => clearTimeout(timer)
    }, [stage])

    return (
        <div className='flex items-center justify-center h-screen w-full bg-white'>
            <div
                className={`w-16 h-16 rounded-full bg-primary ${stage === 0 ? 'animate-bounce' : 'animate-expand'
                    }`}
            />
        </div>
    )
}

export default Loading