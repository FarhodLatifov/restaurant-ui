"use client"
import Image from "next/image";
import CountDownComponent from "./CountDown";

const Offer = () => {
  return (
    <div className="relative h-screen flex flex-col md:flex-row md:justify-between bg-black md:bg-[url(/offerBg.png)] md:bg-cover md:bg-center md:h-[70vh]">
      <div className="flex flex-1 flex-col justify-center text-center gap-8 p-6">
        <h2 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h2>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-tailers and process-centric methods of empowerment
        </p>
        <CountDownComponent />
        <button className="bg-red-500 hover:bg-red-700 text-white rounded py-3">
          Order Now
        </button>
      </div>

      <div className="flex flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Offer Product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
