import React from "react";
import { useProduct } from "../../context/ProductContext";
import "./navbar.css";
export const Navbar = () => {
  const { state, page, setPage } = useProduct();
  return (
    <>
      <div className="navbar flex jcsa aic">
        <h1 className="h3">Flipkart</h1>
        <div className="flex gap-2">
          <span onClick={() => setPage("products")} className="pointer">
            Products
          </span>
          <span onClick={() => setPage("saved")} className="pointer">
            Saved ({state.saveLater.length})
          </span>
          <span onClick={() => setPage("cart")} className="pointer">
            Cart({state.cart.length})
          </span>
        </div>
      </div>
    </>
  );
};
