import Image from "next/image"

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500">
      <div className="">
        <div className="">
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h2>Sicilian</h2>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span>X</span>
        </div>
      </div>

      <div className="">
        <div>
          <span className="">Subtotal (3itemss)</span>
          <span className="">$81.80</span>
        </div>
        <hr className=""/>
        <button className="bg-red-500 p-2 text-white rounded-md w-1/2">CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage