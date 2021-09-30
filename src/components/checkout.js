import React from "react";
import mastercard from "./img/mastercard.png";
import paypal from "./img/paypal.png";
import checkOut from "./img/check-out.svg";

const Checkout = ({ items, discount, discount_percentage }) => {
  const tax = ((13 / 100) * items()).toFixed(2);

  return (
    <div className="pt-28">
      <div className="grid grid-rows-6 w-[40%] h-[40rem] bg-gray-900 m-auto rounded-lg pt-3">
        <div className="row-span-1 flex items-center justify-center">
          <h2 className="text-[#ffc300] text-center text-2xl uppercase font-bold mr-2">
            Check-out
          </h2>
          <img src={checkOut} alt="check-out" />
        </div>
        <div className="row-span-2 mx-2 p-3 rounded-md bg-[#4040412d]">
          <table className="text-white w-full">
            <tr className="w-full">
              <td>Your total amount is (exc tax):</td>
              <td className="float-right">{`R ${items()}`}</td>
            </tr>
            <tr className="w-full">
              <td>Tax (13%):</td>
              <td className="float-right">{`+ R ${tax}`}</td>
            </tr>
            <tr className="w-full">
              <td>Discount ({`${discount_percentage()}%`}):</td>
              <td className="float-right">{`- R ${discount()}`}</td>
            </tr>
            <tr className="w-full font-bold border-t-2">
              <td>Order Total:</td>
              <td className="float-right">{`R ${(
                parseFloat(tax) +
                parseFloat(items()) -
                discount()
              ).toFixed(2)}`}</td>
            </tr>
          </table>
          <h3 className="text-[#ffc300] mt-2 font-bold uppercase">
            Payment options:
          </h3>
          <div className="flex space-x-2">
            <div className="w-12 h-10 bg-gray-800 flex items-center justify-center rounded-lg cursor-pointer hover:scale-95 transition duration-500 border border-[#ffc300]">
              <img className="h-[80%]" src={mastercard} alt="mastercard" />
            </div>
            <div className="w-12 h-10 bg-gray-800 flex items-center justify-center rounded-lg cursor-pointer hover:scale-95 transition duration-500 border border">
              <img className="h-[80%]" src={paypal} alt="paypal" />
            </div>
          </div>
        </div>
        <div className="row-span-3 p-4 m-auto">
          <form action="">
            <div>
              <label className="text-gray-400" htmlFor="name">
                Card Holder Name
              </label>
              <input
                className="block border border-gray-500 bg-transparent rounded-lg w-[100%] h-10 outline-none focus:border-blue-600 text-[#a8850f] px-2"
                placeholder="Mr S Sands"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-400" htmlFor="name">
                Card Number
              </label>
              <input
                className="block border border-gray-500 bg-transparent rounded-lg w-[100%] h-10 outline-none focus:border-blue-600 text-[#a8850f] px-2"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="mt-2 flex space-x-10">
              <div className="w-[60%]">
                <label className="text-gray-400" htmlFor="name">
                  Expiration
                </label>
                <input
                  className="block border border-gray-500 bg-transparent rounded-lg h-10 outline-none focus:border-blue-600 text-[#a8850f] px-2"
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="w-[40%]">
                <label className="text-gray-400" htmlFor="name">
                  CVV
                </label>
                <input
                  className="block border border-gray-500 bg-transparent rounded-lg h-10 outline-none w-[100%] focus:border-blue-600 text-[#a8850f] px-2"
                  placeholder="837"
                />
              </div>
            </div>
            <div className="m-auto mt-3">
              <button className="bg-[#ffc300] w-[100%] px-5 p-2 rounded-md hover:opacity-50 transition-opacity duration-500 font-bold text-center whitespace-nowrap">
                Place Your Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
