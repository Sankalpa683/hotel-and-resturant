import React from "react";

const Menu = () => {
  // Array of menu items
  const menuItems = [
    {
      name: "Grilled Chicken",
      description: "A perfectly grilled chicken with a side of fresh vegetables.",
      price: "Rs. 1500",
      img: "https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead.jpg",
    },
    {
      name: "Momo",
      description: "Delicious steamed dumplings filled with juicy meat or veggies.",
      price: "Rs. 200",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh0vMiW1W7bBKpLKoR6miD_xQzr52iFGaqw&s", // Add the correct image link
    },
    {
      name: "Chowmin",
      description: "Stir-fried noodles with a mix of fresh vegetables and your choice of meat.",
      price: "Rs. 250",
      img: "https://daruadda.com/wp-content/uploads/2023/01/Veg-Chowmin.png", // Add the correct image link
    },
    {
      name: "Burger",
      description: "A juicy beef or chicken burger served with crispy fries.",
      price: "Rs. 350",
      img: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg", // Add the correct image link
    },
    {
      name: "Pizza",
      description: "A cheesy pizza topped with your favorite ingredients.",
      price: "Rs. 800",
      img: "https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-8.jpg", // Add the correct image link
    },
    {
      name: "Tandoori Keema Naan",
      description: "A flavorful naan stuffed with spiced minced meat, baked to perfection in a tandoor.",
      price: "Rs. 50",
      img: "https://www.amchur.co.uk/wp-content/uploads/2023/03/6-1.jpg", // Add the correct image link
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8" id="menu">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-orange-500">Menu</span>
        </h2>
        <p className="mt-4 text-gray-600 text-md">
          Explore our selection of mouth-watering dishes that bring together the best of local and international flavors, freshly prepared just for you.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <p className="mt-2 font-bold text-orange-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
