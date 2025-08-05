'use client'
import React, { useEffect, useRef, useState } from 'react'

const Loading = () => {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0)
  const timers = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    const timer = timers.current
    timer.push(setTimeout(() => setStage(1), 2000)) // Slide down
    timer.push(setTimeout(() => setStage(2), 3000)) // Crumble
    timer.push(setTimeout(() => setStage(3), 4000)) // Done

    return () => timer.forEach(clearTimeout)
  }, [timers])

  console.log('Current stage:', stage)

  if (stage === 3) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${stage === 0 ? 'bg-white' : 'bg-transparent'}`}>
      {stage === 0 && <div className="w-6 h-6 rounded-full bg-primary animate-bounce" />}
      {stage === 1 && (
        <div key="slide" className="absolute inset-x-0 bg-primary h-full animate-slide-down" />
      )}
      {stage === 2 && (
        <div key="crumble" className="absolute inset-x-0 bg-primary h-full animate-crumble-away" />
      )}
    </div>
  )
}

export default Loading
