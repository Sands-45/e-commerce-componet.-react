import React from "react";

const OrderSummary = ({ cart, setCart }) => {
  const cartSummary = cart.map((cartItem, index) => {
    return (
      <div
        key={index}
        className="grid grid-cols-5 p-2 m-2 rounded-md bg-[#4040412d]"
      >
        <div className="flex items-center space-x-4 col-span-2">
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
          <p className="text-center text-sm text-white m-auto">{`R ${(
            cartItem.price * cartItem.count
          ).toFixed(2)}`}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-2xl text-[#ffc300] mt-6 text-center uppercase font-bold font-mono">
        Order Summary
      </h1>
      <div className="row-span-4 max-h-80 overflow-hidden">{cartSummary}</div>
      <div className="row-span-1 flex justify-center items-end">
        <button className="bg-[#ffc300] w-[80%] mb-5 flex justify-center p-2 rounded-md hover:opacity-50 transition-opacity duration-500 font-bold">
          Check-Out
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
