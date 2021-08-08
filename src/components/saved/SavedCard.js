import React from "react";
import { useProduct } from "../../context/ProductContext";
import { REMOVE_FROM_SAVED } from "../../reducer/actions";

import {
  addToCart,
  addToSaved,
  isProductInCart
} from "../../utils/helperFunctions";

export const SavedCard = ({ item }) => {
  const { state, dispatch, setPage } = useProduct();
  return (
    <>
      <div className="product-card" key={item.id}>
        <img src={item.image} alt="cart-card" className="responsive" />
        <h1 className="h3">{item.title}</h1>
        <span>{item.price}</span>

        <div>
          <button
            className="btn btn-red"
            onClick={() => dispatch({ type: REMOVE_FROM_SAVED, payload: item })}
          >
            Remove
          </button>
          {!isProductInCart(state, item) ? (
            <button
              className="btn btn-blue"
              onClick={() => addToCart(state, dispatch, item)}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="btn btn-outline-blue"
              onClick={() => setPage("cart")}
            >
              In cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
