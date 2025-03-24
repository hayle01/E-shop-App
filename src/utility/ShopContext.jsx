import { Children, useContext, useReducer } from "react";
import { ShopReducer, InitialState } from "./ShopReducer";

const ShopContext = useContext(InitialState);

const ShopProvider = ({Children}) => {
    const [state, dispatch] = useReducer(ShopReducer, InitialState);

     const calculateTotalPrice = (products) => {
       let total = 0;
       products.forEach((product) => {
         total += product.price * product.quantity;
       });

       dispatch({
         type: "CALCULATE_TOTAL_PRIC",
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

        dispatch({
          type: "ADD_TO_CART",
          payload: {
            products: updatedProducts
          }
        });
    }

    
   


    
}