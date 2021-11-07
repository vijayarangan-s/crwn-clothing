import SHOP_DATA from "../../../components/Pages/Shop/Shop.Data";
import { ShopActionType } from "../../types/shop/shop.types";

const INITIAL_STATE = {
    collections: null
}

export const shopReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ShopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

// export default shopReducer