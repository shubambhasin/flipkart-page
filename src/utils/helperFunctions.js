import {
  ADD_TO_CART,
  ADD_TO_SAVED,
  REMOVE_FROM_CART,
  REMOVE_FROM_SAVED
} from "../reducer/actions";

export const isProductInSaved = (state, product) => {
  if (state.saveLater.filter((item) => item.id === product.id).length !== 0) {
    return true;
  } else {
    return false;
  }
};
export const isProductInCart = (state, product) => {
  if (state.cart.filter((item) => item.id === product.id).length !== 0) {
    return true;
  } else {
    return false;
  }
};

export const addToSaved = (state, dispatch, product) => {
  if (isProductInSaved(state, product)) {
    dispatch({ type: REMOVE_FROM_SAVED, payload: product });
    console.log("REMOVED");
  } else {
    dispatch({ type: ADD_TO_SAVED, payload: product });
    console.log("added");
  }
};

export const addToCart = (state, dispatch, product) => {
  if (isProductInCart(state, product)) {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
    console.log("REMOVED");
  } else {
    dispatch({ type: ADD_TO_CART, payload: product });
    console.log("added");
  }
};
