import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Checkout from "./components/checkout";
import imgOne from "./components/img/img-1.png";
import imgTwo from "./components/img/img-2.png";
import imgThree from "./components/img/img-3.png";
import imgFour from "./components/img/img-4.png";
import imgFive from "./components/img/img-5.png";
import imgSix from "./components/img/img-6.png";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      item: "Sands_45 Wireless Earbuds",
      price: 159.9,
      inStock: 5,
      discount: 0,
      id: 0,
      count: 1,
      img: imgOne,
    },
    {
      item: "Sands_45 V23 Wireless Earbuds",
      price: 99.9,
      inStock: 5,
      discount: 0,
      id: 1,
      count: 1,
      img: imgTwo,
    },
    {
      item: "Sands Scorpio Series True Wireless Earphones",
      price: 199.9,
      inStock: 5,
      discount: 10,
      id: 2,
      count: 1,
      img: imgThree,
    },
    {
      item: "MK Wireless Touch Control Stereo Earbuds",
      price: 259.9,
      inStock: 5,
      discount: 0,
      id: 3,
      count: 1,
      img: imgFour,
    },
    {
      item: "Riff Wireless Bluetooth Headsets",
      price: 799.9,
      inStock: 5,
      discount: 5,
      id: 4,
      count: 1,
      img: imgFive,
    },
    {
      item: "Galaxy Buds Live Charging Case & Earbud",
      price: 599.9,
      inStock: 5,
      discount: 8,
      id: 5,
      count: 1,
      img: imgSix,
    },
  ];

  //Total=============
  const items = () => {
    let total = 0;
    cart.map((item) => {
      return (total += parseFloat(item.price) * item.count);
    });
    return total.toFixed(2);
  };
  // Discount================
  const discount = () => {
    let discount = 0;
    cart.map((item) => {
      return (discount += (item.discount * item.count) / item.count);
    });
    return ((discount / 100) * items()).toFixed(2);
  };

  const discount_percentage = ()=>{
    let discount = 0;
    cart.map((item) => discount += (item.discount * item.count)/item.count);
    return discount
  } 

  return (
    <Router>
      <div className="h-[210rem] md:h-[70rem] flex justify-center text-gray-900 w-screen bg-gray-800 relative select-none">
        <Navbar cart={cart} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Menu
                products={products}
                cart={cart}
                setCart={setCart}
                items={items}
              />
            </Route>
            <Route path="/checkout">
              <Checkout
                cart={cart}
                setCart={setCart}
                items={items}
                discount={discount}
                discount_percentage={discount_percentage}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
