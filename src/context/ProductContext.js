import { createContext, useContext, useReducer, useState } from "react";
import {
  ADD_TO_CART,
  ADD_TO_SAVED,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_SAVED
} from "../reducer/actions";
// import reducerFunction from "../reducer/reducerFunction";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [page, setPage] = useState("products");
  const initalState = {
    cart: [],
    saveLater: []
  };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id)
        };
      case ADD_TO_SAVED:
        return {
          ...state,
          saveLater: [...state.saveLater, action.payload]
        };
      case REMOVE_FROM_SAVED:
        return {
          ...state,
          saveLater: state.saveLater.filter(
            (item) => item.id !== action.payload.id
          )
        };
      case INCREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        };
      default:
        console.log("Unknown action type");
        return {
          ...state
        };
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, initalState);
  return (
    <ProductContext.Provider value={{ state, dispatch, page, setPage }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
