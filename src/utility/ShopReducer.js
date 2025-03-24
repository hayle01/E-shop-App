export const InitialState = {
    products: [],
    total: 0,
}

export const ShopReducer = (state, action) => {
    
    const {type, payload} = action;

    switch(type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: payload.products
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                products: payload.products
            }
        case "UPDATE_PRODUCT_QUANTITY":
            return {
                ...state,
                products: payload.products
            }
        case "CALCULATE_TOTAL_PRICE":
            return {
                ...state,
                total: payload.total
            }
        case "CLEAR_CART":
            return InitialState
        default:
            throw new Error("Unknown reducer action")
    } 
}