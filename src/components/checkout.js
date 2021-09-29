import React from 'react'

const Checkout = ({ cart }) => {
	const cartSummary = cart.map((cartItem, index) => {
    return (
      <div
        key={index}
        className="grid grid-cols-4 p-2 m-2 rounded-md bg-[#4040412d]"
      >
        <div className="flex items-center space-x-2 col-span-1 text-white">
			{`× ${cartItem.count}`}
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-[12px] text-[#ffc300]">{cartItem.item}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-center text-sm text-white m-auto whitespace-nowrap overflow-hidden">{`R ${(
            cartItem.price * cartItem.count
          ).toFixed(2)}`}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="pt-28">
      <div className="w-[40%] h-[40rem] bg-gray-900 m-auto rounded-lg pt-5">
        {cartSummary}
      </div>
    </div>
  );
};

export default Checkout
