type ProductOption = {
  title: string;
  additionalPrice: number;
};

type Product = {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  options: ProductOption[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 6,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, melted mozzarella, and rich tomato sauce on a crispy golden crust.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 7,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple and fresh lettuce.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 8,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight featuring linguine smothered in a creamy Parmesan sauce, finished with fresh herbs and cracked black pepper.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 9,
    title: "Margherita Magic",
    desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomato sauce, fresh mozzarella, and fragrant basil leaves.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 10,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery creation, combining penne pasta in a spicy tomato sauce infused with garlic, chili flakes, and olive oil.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 11,
    title: "Jalapeño Fiesta",
    desc: "Turn up the heat with a zesty blend of jalapeños, melted cheese, and savory beef on a crispy crust, delivering a fiesta of flavors in every bite.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 12,
    title: "Bella Napoli",
    desc: "A classic Italian pizza with a thin crust, topped with tomato sauce, mozzarella, and fresh basil leaves.",
    img: "/temporary/p3.png",
    price: 27.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];
