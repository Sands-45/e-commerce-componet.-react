import React from "react";
import OrderSummary from "./orderSummary";
import cartIcon from "./img/cartIcon.svg";

const Menu = ({ products, cart, setCart, items }) => {
  return (
    <div className="grid grid-cols-7 md:grid-cols-7 gap-2 w-[90%] h-[40rem] m-auto pt-24">
      <div className="col-span-6 lg:col-span-4 xl:col-span-5 grid grid-cols-4 gap-2 w-full h-full bg-gray-900 rounded-lg p-2">
        <Item products={products} cart={cart} setCart={setCart} />
      </div>
      <div
        style={{ backgroundImage: `url(${cartIcon})` }}
        className="col-span-6 lg:col-span-3 xl:col-span-2 w-full max-h-[25rem] lg:max-h-[40rem] bg-gray-900 rounded-lg bg-no-repeat bg-center grid grid-rows-5 p-2"
      >
        <OrderSummary cart={cart} setCart={setCart} items={items} />
      </div>
    </div>
  );
};

const Item = ({ products, cart, setCart }) => {
  const UpdateCart = (id) => {
    if (cart.some((e) => e.id === id)) {
      setCart(
        cart.map((item) => {
          return item.id === id ? { ...item, count: item.count + 1 } : item;
        })
      );
    } else {
      let newCart = products.filter((product) => product.id === id)[0];
      setCart([...cart, newCart]);
    }
  };

  const items = products.map((product) => {
    return (
      <div
        key={product.id}
        className="col-span-4 md:col-span-2 grid md:grid-cols-2 h-full items-center bg-[#4040412d] rounded-md"
      >
        <div className="col-span-1 p-1">
          <img
            className="h-full max-h-[10rem] transform rotate-12 p-2 m-auto"
            src={product.img}
            alt="img"
          />
        </div>
        <div className="col-span-1 overflow-hidden overflow-ellipsis flex flex-col justify-between h-full p-4 space-y-4 m-auto">
          <h3
            className="text-[12px]
          lg:text-md text-center text-[#ffc300] font-bold"
          >
            {product.item}
          </h3>
          <p className="text-center text-white">{`R ${product.price}`}</p>
          <div className="flex justify-center">
            <button
              onClick={() => UpdateCart(product.id)}
              className="bg-gray-700 text-[#ffc300] max-w-[5rem]  text-[10px] lg:text-md p-2 rounded-md hover:opacity-50 transition-opacity duration-500 font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <>{items}</>;
};

export default Menu;
