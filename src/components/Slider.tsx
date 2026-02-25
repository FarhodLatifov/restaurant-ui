"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const data = [
  { id: 5, title: "always fresh & always crispy & always hot", image: "/slide1.png" },
  { id: 6, title: "we deliver your oreder wherever you are in NY", image: "/slide2.png" },
  { id: 7, title: "the best pizza to share with your family", image: "/slide3.jpg" },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h2 className="text-5xl text-center uppercase p-4 md:p-10">{data[currentSlide].title}</h2>
        <button className="bg-red-500 text-white py-4 px-8 md:text-6xl xl:text-7xl  ">Order Now</button>
      </div>
      <div className="flex-1 w-full relative lg:h-full lg:w-1/2">
        <Image src={data[currentSlide].image} alt="slide-1" fill className="object-cover" />
      </div>
    </div>
  )
}

export default Slider