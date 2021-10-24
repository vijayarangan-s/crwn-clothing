import { cartActionType } from "../../types/cart/cart.type";

export const toggleCartHidden = () => {
    return {type: cartActionType.TOGGLE_CART_HIDDEN}
}

export const cartAddItem = (item) => {
    return {
        type: cartActionType.ADD_ITEM, 
        payload:item
    }
}