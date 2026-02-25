"use client"

import Image from "next/image"
import { useCart } from "@/context/CartContext"

const CartPage = () => {
  const { items, totalItems, subtotal, removeFromCart } = useCart()
  const serviceCost = 0
  const deliveryCost: number = subtotal > 0 ? 0 : 0
  const total = subtotal + serviceCost + deliveryCost

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-start overflow-y-scroll scroll-smooth lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40">
        {items.length === 0 && <p className="mt-10 text-lg">Your cart is empty.</p>}

        {items.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.cartId}>
            <Image src={item.img} alt={item.title} width={100} height={100} />
            <div>
              <h2 className="uppercase font-bold text-xl">{item.title}</h2>
              <span>{item.optionTitle ?? "Standard"}</span>
            </div>
            <h2 className="font-bold">${(item.unitPrice * item.quantity).toFixed(2)}</h2>
            <button className="cursor-pointer" onClick={() => removeFromCart(item.cartId)}>X</button>
          </div>
        ))}
      </div>

      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>${serviceCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">{deliveryCost === 0 ? "FREE" : `$${deliveryCost.toFixed(2)}`}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL (INCL. VAT)</span>
          <span className="text-red-500 font-bold">${total.toFixed(2)}</span>
        </div>
        <hr />
        <button className="bg-red-500 p-2 text-white rounded-md w-1/2 self-end" disabled={items.length === 0}>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage
