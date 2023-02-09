import {
  ADD_TO_CART_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  REMOVE_FROM_CART,
} from "./actionTypes";
import axios from "axios";

//Action Functions

export const getdata = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_LOADING });
    const res = await axios.get("http://localhost:8080/allproducts");
    dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_DATA_ERROR });
  }
};

export const addToCart = (data, toast, navigate) => (dispatch) => {
  let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
  let checkduplicate = cartData.filter((ele) => ele._id === data._id);
  if (checkduplicate.length > 0) {
    toast({
      title: "Item already present in cart",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  } else {
    cartData.push(data);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartData });
    navigate("/cart");
    toast({
      title: "Item added to the cart",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  }
};

