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
      price: "159.90",
      inStock: 5,
      id: 0,
      count: 1,
      img: imgOne,
    },
    {
      item: "Sands_45 V23 Wireless Earbuds",
      price: "99.90",
      inStock: 5,
      id: 1,
      count: 1,
      img: imgTwo,
    },
    {
      item: "Sands Scorpio Series True Wireless Earphones",
      price: "199.90",
      inStock: 5,
      id: 2,
      count: 1,
      img: imgThree,
    },
    {
      item: "MK Wireless Touch Control Stereo Earbuds",
      price: "259.90",
      inStock: 5,
      id: 3,
      count: 1,
      img: imgFour,
    },
    {
      item: "Riff Wireless Bluetooth Headsets",
      price: "799.90",
      inStock: 5,
      id: 4,
      count: 1,
      img: imgFive,
    },
    {
      item: "Galaxy Buds Live Charging Case & Earbud",
      price: "599.90",
      inStock: 5,
      id: 5,
      count: 1,
      img: imgSix,
    },
  ];

  return (
    <Router>
      <div className="h-[210rem] md:h-[70rem] flex justify-center text-gray-900 w-screen bg-gray-800 relative">
        <Navbar cart={cart} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Menu products={products} cart={cart} setCart={setCart} />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
