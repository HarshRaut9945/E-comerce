import React, { useState, useSyncExternalStore } from "react";
import DataContext from "./DataContext";
import { items } from "./Data";
import { ToastContainer, toast,Bounce } from "react-toastify";
const DataState = (props) => {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);

  const addTOcart = (id, title, price, imgSrc) => {
    const obj = { id, title, price, imgSrc };
    toast.success("Item Adeed TO Cart", {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart([...cart, obj]);
  };
  return (
    <DataContext.Provider
      value={{ products, setProducts, cart, setCart, addTOcart }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
