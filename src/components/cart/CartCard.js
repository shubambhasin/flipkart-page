import React from "react";
import { useProduct } from "../../context/ProductContext";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART
} from "../../reducer/actions";
import { addToCart } from "../../utils/helperFunctions";
import { AiOutlineDelete } from "react-icons/ai";
import "./cart.css";
export const CartCard = ({ product }) => {
  const { state, dispatch, page, setPage } = useProduct();
  const finalDiscount = (product) => {
    return Math.trunc(
      ((product.price - product.discount) / product.price) * 100
    );
  };
  return (
    <div>
      <div className="cart-card flex flex-col">
        <div className="flex aic p1-rem">
          <img src={product.image} alt="cart-card" className="responsive" />
          <div>
            <h1 className="h4 bold">{product.title}</h1>

            <span>
              Price: <span className="bold">₹{product.discount} </span>
            </span>
            <span className="strike f-red">₹{product.price}</span>
            <span className="f-green">({finalDiscount(product)}%off)</span>
            <div>
              <div className="flex aic ">
                {product.quantity > 1 ? (
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch({ type: DECREASE_QUANTITY, payload: product })
                    }
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch({ type: REMOVE_FROM_CART, payload: product })
                    }
                  >
                    <AiOutlineDelete />
                  </button>
                )}
                <span>{product.quantity}</span>
                <button
                  className="btn"
                  onClick={() =>
                    dispatch({ type: INCREASE_QUANTITY, payload: product })
                  }
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-red"
                onClick={() => addToCart(state, dispatch, product)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
