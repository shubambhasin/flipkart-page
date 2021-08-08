import React from "react";
import data from "../../data/product.json";
import { ProductCard } from "../ProductCard/ProductCard";
import "./productpage.css";
export const ProductPage = () => {
  console.log(data);
  return (
    <>
      <div className="product-page flex f-wrap jcc">
        {data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
