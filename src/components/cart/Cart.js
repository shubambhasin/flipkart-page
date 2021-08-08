import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import "./cart.css";
import { CartCard } from "./CartCard";
export const Cart = () => {
  const { state, dispatch, page, setPage } = useProduct();
  const [price, setPrice] = useState(0);
  const totalPrice = () => {
    const totalPriceArray = state.cart.map(
      (data) => data.price * data.quantity
    );
    const total = totalPriceArray.reduce((a, b) => a + b);

    return total;
  };
  const totalPriceDiscount = () => {
    const totalPriceArray = state.cart.map(
      (data) => data.discount * data.quantity
    );
    const total = totalPriceArray.reduce((a, b) => a + b);

    return Math.trunc(total);
  };

  const saving = () => {
    return Math.trunc(totalPrice() - totalPriceDiscount());
  };
  const savingPercentage = () => {
    return Math.trunc((saving() / totalPrice()) * 100);
  };

  return (
    <>
      <div className="cart container flex aic">
        {state.cart.length === 0 ? (
          <h1 className="h2">Cart is empty</h1>
        ) : (
          <div className="flex  gap-2 jcc">
            <div className="flex flex-col">
              <h1 className="h3">Cart({state.cart.length})</h1>
              {state.cart.map((item) => {
                return <CartCard product={item} />;
              })}
            </div>
            <div className="pricing p1-rem">
              <h1 className="h3">Price Detail</h1>

              <div>
                {state.cart.map((product) => {
                  return (
                    <li>
                      {product.title.slice(0, 20)} X {product.quantity}
                    </li>
                  );
                })}
              </div>
              <p>Total Price ₹{totalPrice()}</p>
              <p>After discount ₹{totalPriceDiscount()}</p>
              <span>
                Savings ₹{saving()}{" "}
                <span className="f-green">({savingPercentage()}%)</span>
              </span>
              <br />
              <button className="btn b-orange">Place order</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
