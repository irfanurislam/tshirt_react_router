import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>please some product</p>
    }
    else{
        message = <div>
        <h3>boroloxx</h3>
        <p>tanx form giving money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1? 'blue': 'red'}>order page{cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3? 'yellow':'purple'}`}>something</p>
            {cart.length > 2 
            ? <span className='purple'>aro kino</span>
             : <span>fokira</span>
             }
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name} <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {cart.length === 2 && <span>Double bonanza</span>}
            {
                cart.length === 3 || <span>tinta to hoilona </span>
            }
        </div>
    );
};

export default Cart;