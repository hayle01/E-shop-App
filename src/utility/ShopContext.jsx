import {createContext, useReducer } from "react";
import { ShopReducer, InitialState } from "./ShopReducer";

export const ShopContext = createContext(InitialState);

export const ShopProvider = ({children}) => {
    const [state, dispatch] = useReducer(ShopReducer, InitialState);

     const calculateTotalPrice = (products) => {
       let total = 0;
       products.forEach((product) => {
         total += product.price * product.quantity;
       });

       dispatch({
         type: "CALCULATE_TOTAL_PRICE",
         payload: {
           products: total,
         },
       });
     };

    const AddToCart = (product) => {
        const productIndex = state.products.findIndex(p => p.id === product.id);

        let updatedProducts = [...state.products];

        if(productIndex !== -1){
            updatedProducts[productIndex] = {...updatedProducts[productIndex], quantity: updatedProducts[productIndex].quantity + 1}
        }else{
            updatedProducts = [...updatedProducts, {...product, quantity: 1}]
        }

        calculateTotalPrice(updatedProducts);

        console.log( "This is the products you added cart",updatedProducts);

        dispatch({
          type: "ADD_TO_CART",
          payload: {
            products: updatedProducts,
          },
        });
    }

    
  const UpdateProductQuantity = (product, newQuantity) => {
    const productIndex = state.products.findIndex((p) => p.id === product.id);

    let updatedProducts = [...state.products];

    if (newQuantity >= 0) {
      updatedProducts = updatedProducts.filter((p) => p.id !== product.id);
    } else {
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: newQuantity,
      };
    }

    calculateTotalPrice(updatedProducts);
    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY",
      payload: updatedProducts,
    });
  };

  const removeFromCart = (product) => {
    let updatedProduct = state.products.filter(p => p.id !== product.id);

    calculateTotalPrice(updatedProduct);

    dispatch({ type: "REMOVE_FROM_CART", payload: updatedProduct});
  }

  const ClearCart = (product) => {
    dispatch({ type: "CLEAR_CART" });
  }

  const value = {
    products: state.products,
    total: state.total,
    AddToCart,
    UpdateProductQuantity,
    ClearCart,
    removeFromCart,
    calculateTotalPrice,

  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    
}