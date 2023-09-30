import React from "react";
import CardImage from "../assets/img.png";
import "../styles/ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../configs/CartReducer";

const ProductCard = ({ props }) => {
  const dispatch = useDispatch();
  const addCart = (product,e) => {
    dispatch(addToCart(product));
    e.preventDefault();
  };

  return (
    <div className="productcard">
      <div className="productDetails">
        <img src={props.imgUrl} className="cardImage" />
        <div className="title">{props.name}</div>
        <div className="priceStriked">${props.price}</div>
        <div className="productPrice">${props.price}</div>
      </div>
      <button onClick={(e) => addCart(props,e)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
