import { cartActionType } from "../../types/cart/cart.type";

export const toggleCartHidden = () => {
    return {type: cartActionType.TOGGLE_CART_HIDDEN}
}

export const cartAddItem = (item) => {
  return {
    type: cartActionType.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
    return{
        type: cartActionType.REMOVE_ITEM,
        payload:item
    }
}

export const removeItemFromCart = item => {
    return{
        type: cartActionType.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}