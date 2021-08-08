import React from "react";
import "./productcard.css";
import { FcLike } from "react-icons/fc";
import { IoHeartOutline } from "react-icons/io5";
import {
  addToCart,
  addToSaved,
  isProductInCart,
  isProductInSaved
} from "../../utils/helperFunctions";
import { useProduct } from "../../context/ProductContext";
export const ProductCard = ({ product }) => {
  const { state, dispatch, page, setPage } = useProduct();

  const finalDiscount = (product) => {
    return Math.trunc(
      ((product.price - product.discount) / product.price) * 100
    );
  };
  return (
    <>
      <div className="product-card relative">
        <span
          className="absolute save-button"
          onClick={() => addToSaved(state, dispatch, product)}
        >
          {!isProductInSaved(state, product) && <IoHeartOutline size={28} />}
          {isProductInSaved(state, product) && <FcLike size={28} />}
        </span>
        {/* <button className="absolute save-button"></button> */}
        <img src={product.image} alt="product-card" className="responsive" />
        <h1 className="h4">{product.title}</h1>
        <span>
          Price: <span className="bold">₹{product.discount} </span>
        </span>
        <span className="strike f-red">₹{product.price}</span>
        <span className="f-green">{finalDiscount(product)}%off</span>
        <div>
          {!isProductInCart(state, product) ? (
            <button
              className="btn btn-blue"
              onClick={() => addToCart(state, dispatch, product)}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="btn btn-outline-blue"
              onClick={() => setPage("cart")}
            >
              Go to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
