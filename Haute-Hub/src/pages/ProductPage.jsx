import React, { useState } from "react";
import HseImage from "../assets/House.jpg";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const [incrementQty, setIncrementQty] = useState();
  const [decrementQty, setDecrementQty] = useState();
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="imageDiv">
        <img src={HseImage} alt="product" className="img" />
      </div>
      <div className="productDetails">
        <div className="name">House</div>
        <div className="desc">
          Nature is calling. Answer with Poo-Pourri. Apple Cider is a seasonal
          blend of cinnamon, apple and ginger natural essential oils.
        </div>
        <div className="price">$9.95</div>
        <div>
          <div className="qtyCart">
            <div className="qtyDiv">
              <div
                className="decrementQty"
                onClick={() => {
                  if (quantity != 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </div>
              <div className="quantity">{quantity}</div>
              <div
                className="incrementQty"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </div>
            </div>
            <button className="addCart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
