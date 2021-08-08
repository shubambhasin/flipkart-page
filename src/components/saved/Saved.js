import React from "react";
import { useProduct } from "../../context/ProductContext";
import { SavedCard } from "./SavedCard";

export const Saved = ({ product }) => {
  const { state } = useProduct();
  return (
    <>
      <div className="saved container">
        {state.saveLater.length === 0 ? (
          <h1 className="t-center f-center h2">Nothing saved yet</h1>
        ) : (
          <>
            {state.saveLater.map((item) => {
              return <SavedCard item={item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};
