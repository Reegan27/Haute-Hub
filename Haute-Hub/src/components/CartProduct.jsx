import React from "react";

const CartProduct = () => {
  return (
    <div className="product">
      <Image src={props.img} />
      <p>
        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB
        SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
      </p>
      <h3>₹4,439.00</h3>
      <input type="number" className="qty" />
      <h3>₹4,439.00</h3>
    </div>
  );
};

export default CartProduct;
