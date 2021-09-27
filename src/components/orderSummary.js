import React from "react";
import deleteIcon from "./img/deleteIcon.svg";

const OrderSummary = ({ cart, setCart }) => {
  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    console.log(newCart);
  };

  const cartSummary = cart.map((cartItem, index) => {
    return (
      <div
        key={index}
        className="grid grid-cols-6 p-2 m-2 rounded-md bg-[#4040412d]"
      >
        <div className="flex items-center space-x-2 col-span-2">
          <button
            onClick={() =>
              setCart(
                cart.map((item) => {
                  return item.id === cartItem.id && item.count !== 1
                    ? { ...item, count: item.count - 1 }
                    : item;
                })
              )
            }
            className="bg-[#ffc300] h-8 w-8 rounded-md hover:opacity-50 transition-opacity duration-500 text-lg font-bold"
          >
            -
          </button>
          <small className="items-center flex text-sm  text-white">
            {cartItem.count}
          </small>
          <button
            onClick={() =>
              setCart(
                cart.map((item) => {
                  return item.id === cartItem.id
                    ? { ...item, count: item.count + 1 }
                    : item;
                })
              )
            }
            className="bg-[#ffc300] h-8 w-8 rounded-md hover:opacity-50 transition-opacity duration-500 text-lg font-bold"
          >
            +
          </button>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-[12px] text-[#ffc300]">{cartItem.item}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-center text-sm text-white m-auto whitespace-nowrap overflow-hidden">{`R ${(
            cartItem.price * cartItem.count
          ).toFixed(2)}`}</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img
            onClick={() => deleteItem(cartItem.id)}
            className="cursor-pointer transition-opacity duration-500 hover:opacity-70"
            src={deleteIcon}
            alt="delete"
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="row-span-4 my-4 h-[27.5rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        <h2 className="text-2xl text-[#ffc300] my-4 text-center uppercase font-bold font-mono">
          Order Summary
        </h2>
        {cartSummary}
      </div>
      <div className="row-span-1 flex justify-center items-end">
        <button className="bg-[#ffc300] w-[80%] mb-5 flex justify-center p-2 rounded-md hover:opacity-50 transition-opacity duration-500 font-bold">
          Check-Out
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
