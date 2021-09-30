import React from "react";
import mastercard from "./img/mastercard.png";
import paypal from "./img/paypal.png";

const Checkout = ({ items, discount, discount_percentage }) => {
  const tax = ((13 / 100) * items()).toFixed(2);

  return (
    <div className="pt-28">
      <div className="grid grid-rows-6 w-[40%] h-[40rem] bg-gray-900 m-auto rounded-lg pt-3">
        <div className="row-span-1 text-[#ffc300] text-center text-2xl uppercase font-bold">
          Check-out
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
            <div className="w-12 h-10 bg-gray-800 flex items-center justify-center rounded-lg cursor-pointer hover:scale-95 transition duration-500 border">
              <img className="h-[80%]" src={mastercard} alt="mastercard" />
            </div>
            <div className="w-12 h-10 bg-gray-800 flex items-center justify-center rounded-lg cursor-pointer hover:scale-95 transition duration-500 border">
              <img className="h-[80%]" src={paypal} alt="paypal" />
            </div>
          </div>
        </div>
        <div className="row-span-2 m-auto"></div>
        <div className="row-span-1 m-auto">
          <button className="bg-[#ffc300] w-[100%] px-5 p-2 rounded-md hover:opacity-50 transition-opacity duration-500 font-bold text-center whitespace-nowrap">
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
