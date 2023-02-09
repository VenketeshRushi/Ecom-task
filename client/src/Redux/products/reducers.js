import {
  ADD_TO_CART_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  products: [],
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return { ...state, isLoading: true };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }

    case GET_DATA_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case ADD_TO_CART_SUCCESS: {
      console.log("inside reducer payload", payload);
      return {
        ...state,
        cartItems: [...payload],
      };
    }

    default:
      return state;
  }
};
