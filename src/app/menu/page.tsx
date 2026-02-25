import Link from "next/link";
import { menu } from "@/data";

const MenuPage = () => {
  return (
    <div className="py-8 px-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:h-1/2 bg-cover bg-center p-8 flex items-center"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className="w-1/2" style={{ color: category.color }}>
            <h2 className="uppercase font-bold text-3xl">
              {category.title}
            </h2>

            <p className="text-sm my-8">
              {category.desc}
            </p>

            <button
              className="hidden 2xl:block py-2 px-4 rounded"
              style={{
                backgroundColor: category.color,
                color: category.color === "black" ? "#fff" : "#ef4444",
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;