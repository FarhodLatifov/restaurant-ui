import { notFound } from "next/navigation"
import { burgers, pastas, pizzas } from "@/data"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: Promise<{ category: string }>
}

const productsByCategory = {
  pizzas,
  burgers,
  pastas,
}

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params
  const products = productsByCategory[category as keyof typeof productsByCategory]

  if (!products) {
    notFound()
  }

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          <div className="relative h-[80%]">
            <Image src={item.img} alt={item.title} fill className="object-contain" />
          </div>
          <div className="flex items-center justify-between font-bold">
            <h2 className="text-2xl">{item.title}</h2>
            <h3 className="group-hover:hidden text-xl">${item.price}</h3>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
