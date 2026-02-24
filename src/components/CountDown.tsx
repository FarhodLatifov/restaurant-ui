"use client"
import CountDown from "react-countdown"

const endingdate = new Date("2026-07-25")

const CountDownComponent = () => {
  return (
    <CountDown date={endingdate} className="font-bold text-yellow-200 text-4xl"/>
  )
}

export default CountDownComponent