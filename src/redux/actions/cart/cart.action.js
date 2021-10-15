import { cartActionType } from "../../types/cart/cart.type";

export const toggleCartHidden = () => {
    return {type: cartActionType.TOGGLE_CART_HIDDEN}
}