import React, { useEffect } from "react";
import "../styles/Cart.css"; 
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Cart = ({ props }) => {
  const cartProducts = useSelector((state) => state.cart.cart);
  console.log("cart",cartProducts);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="heads">
        <div className="item">
          <h3>Item</h3>
        </div>
        <h3>Price</h3>
        <h3>Qty</h3>
        <h3>Subtotal</h3>
      </div>
      {cartProducts.map((item, index) => {
        return (
          <div className="products">
            <div className="items">
              <img src={item.imgUrl} className="image" />
              {item.name}
            </div>
            <div className="itemPrice">${item.price}.00</div>
            <div className="qty">
              <input type="number" className="qtyItem" />
            </div>
            <div className="subtotal">
              ${item.price}.00
              <div className="delete">
                <AiOutlineCloseCircle className="deleteIcon" />
              </div>
            </div>
          </div>
        );
      })}

      <div className="buttons">
        <button className="continue">Continue Shopping</button>
        <button className="clearCart">Clear Shopping Cart</button>
      </div>
    </div>
  );
};

export default Cart;
