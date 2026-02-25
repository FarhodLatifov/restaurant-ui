"use client"

import { useEffect, useState } from "react"
import CountDown from "react-countdown"

const endingDate = new Date("2026-07-25T00:00:00Z")
const countdownClass = "font-bold text-yellow-200 text-4xl"

const CountDownComponent = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className={countdownClass}>00:00:00</span>
  }

  return <CountDown date={endingDate} className={countdownClass} />
}

export default CountDownComponent
