'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Loading = () => {
  const [stage, setStage] = useState<number>(0)
  const timers = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []

    // Durée estimée par étape (en ms)
    const durations = [400, 400, 500, 500, 500, 500, 1000, 1000, 1000]
    let currentTime = 0

    durations.forEach((duration, index) => {
      timers.current.push(
        setTimeout(() => {
          setStage(index + 1)
        }, currentTime)
      )
      // chevauchement de 100ms
      currentTime += duration - 100
    })

    return () => {
      timers.current.forEach(clearTimeout)
    }
  }, [])

  const waveConfig = [
    { size: 'w-12 h-12', color: 'bg-primary', static: true },
    { size: 'w-20 h-20', color: 'bg-blue-500', static: false },
    { size: 'w-28 h-28', color: 'bg-blue-400', static: false },
    { size: 'w-36 h-36', color: 'bg-blue-300', static: false },
    { size: 'w-44 h-44', color: 'bg-blue-200', static: false }
  ]

  if (stage === 0) return null

  return (
    <div className="fixed inset-0 z-50 bg-transparent overflow-hidden">
      {/* Animation initiale - Double rebond */}
      {stage >= 1 && stage <= 2 && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
          <div
            className={`w-6 h-6 rounded-full bg-primary transition-all duration-500
            ${stage === 1 ? 'animate-bounce-first opacity-100 scale-100' : 'animate-bounce-second opacity-80 scale-90'}`}
          />
        </div>
      )}

      {/* Ondulations concentriques */}
      {stage >= 3 && stage <= 6 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {waveConfig.map((wave, index) => {
            const waveNumber = index + 1
            const isActive = stage === waveNumber + 2
            const isVisible = stage >= waveNumber + 2

            return (
              <div
                key={`wave-${index}`}
                className={`absolute rounded-full ${wave.color} ${wave.size}
                  transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                  ${isActive ? 'animate-wave-pulse' : ''}`}
              />
            )
          })}
        </div>
      )}

      {/* Image avec rotation */}
      {stage === 7 && (
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out">
          <div className="w-44 h-44 animate-rotate-back origin-center">
            <Image
              src="/alubassa.png"
              alt="Alubassa Logo"
              width={176}
              height={176}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Animation finale - Scroll vertical */}
      {stage === 8 && (
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
          <div className="w-full h-full animate-scroll-up-down">
            <div className="w-full h-full bg-primary flex items-center justify-center">
              <Image
                src="/alubassa.png"
                alt="Alubassa Logo"
                width={176}
                height={176}
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animation finale - Scroll horizontal */}
      {stage === 9 && (
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
          <div className="w-full h-full animate-scroll-left-right">
            <div className="w-full h-full bg-primary flex items-center justify-center">
              <Image
                src="/alubassa.png"
                alt="Alubassa Logo"
                width={176}
                height={176}
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading
