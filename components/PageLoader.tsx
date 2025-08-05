'use client'
import { useState, useEffect } from 'react'
import Loading from './Loading'

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return isDone ? <>{children}</> : <Loading />
}

export default PageLoader
