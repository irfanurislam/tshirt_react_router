import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  const [cart,setCart] = useState([])
  const handleAddToCart = (tshirt) =>{
   const exists = cart.find(ts => ts._id === tshirt._id)
  if(exists){
   toast('You have already added t-shirt')
  }
  else{
    // ager cart ke spread array  korlam and sathe tshirt ke add korteci eita addkorlam
    const newCart = [...cart,tshirt]
    setCart(newCart)
  }
  
    

  }

  const handleRemoveFromCart = (id) =>{
      console.log(id)
      const remaining = cart.filter((ts) => ts._id !== id)
      console.log(remaining)
       setCart(remaining)
  }






  return (
    <div className="home_container">
      <div className="tshirts_container">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart}
        handleRemoveFromCart ={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
