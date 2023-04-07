import {CartItem} from "../redux/cart/cartSlice";


export const culcTotalPrice = (items: CartItem[]) => {
    return   items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
}