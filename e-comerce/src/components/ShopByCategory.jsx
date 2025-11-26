import React, { useContext, useState } from "react";

import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
  FaRupeeSign,
} from "react-icons/fa";

import DataContext from "../context/DataContext";
import { items } from "../context/Data";

const categories = [
  { name: "All Products", icon: <FaThLarge /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Tablets", icon: <FaTabletAlt /> },
  { name: "Watches", icon: <FaClock /> },
];

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopByCategory = () => {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000);

  // ------------ CATEGORY FILTER ------------
  const filterByCategory = (cat) => {
    if (cat === "All Products") {
      setProducts(items);
      return;
    }

    const filtered = items.filter(
      (pro) => pro.category.toLowerCase() === cat.toLowerCase()
    );
    setProducts(filtered);
  };

  // ------------ PRICE FILTER ------------
  const filterByPrice = (price) => {
    setSelectedPrice(price);
    const filtered = items.filter((pro) => pro.price <= price);
    setProducts(filtered);
  };

  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className="text-center mb-3">Filter Product</h3>

        {/* Category Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-secondary text-light fw-bold"
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => filterByCategory(category.name)}
            >
              {category.icon}
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Price Range Buttons */}
        <div className="text-center mt-3">
          {priceRanges.map((value) => (
            <span
              key={value}
              className={`badge p-3 fw-bold mx-2 ${
                selectedPrice === value ? "bg-primary" : "bg-secondary"
              }`}
              style={{
                cursor: "pointer",
                transition: "0.3s",
                fontSize: "1rem",
                borderRadius: "10px",
              }}
              onClick={() => filterByPrice(value)}
            >
              <FaRupeeSign /> {value}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
