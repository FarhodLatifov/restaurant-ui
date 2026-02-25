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

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  img: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 13,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Indulge in our mouthwatering selection of Italian pastas, crafted with the freshest ingredients and bursting with flavor.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 14,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Savor the taste of Italy with our delectable burgers, made with love and the finest ingredients.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 15,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Refresh your palate with our vibrant and nutritious pizzas, packed with fresh ingredients and flavorful toppings.",
    img: "/temporary/m3.png",
    color: "white",
  },
];

export const pizzas: Products = [
  {
    id: 16,
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
    id: 17,
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
    id: 18,
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
  {
    id: 19,
    title: "Four Cheese Fantasy",
    desc: "Experience a cheese lover's dream with a blend of mozzarella, cheddar, Parmesan, and blue cheese on a crispy crust.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
  {
    id: 20,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin crust topped with a medley of fresh vegetables, including bell peppers, onions, mushrooms, and olives.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 4 },
      { title: "Large", additionalPrice: 6 },
    ],
  },
];

export const singleProduct: Product = {
  id: 21,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, melted mozzarella, and rich tomato sauce on a crispy golden crust.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    { title: "Small", additionalPrice: 0 },
    { title: "Medium", additionalPrice: 4 },
    { title: "Large", additionalPrice: 6 },
  ],
};