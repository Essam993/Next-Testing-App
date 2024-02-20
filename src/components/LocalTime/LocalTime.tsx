import { StyledClock } from '@/styles/global'
import React, { useState, useEffect } from 'react'

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const isPm = currentTime.includes('PM')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <StyledClock>
      {isPm ? (
        <>
          {currentTime.replace('PM', '')}
          <span>PM</span>
        </>
      ) : (
        currentTime
      )}
    </StyledClock>
  )
}

export default LocalTime
