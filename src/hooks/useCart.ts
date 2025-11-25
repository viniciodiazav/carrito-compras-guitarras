import type { Guitar, ItemCart } from "../types/types"
import type { CartActions } from "./guitar-reducer"

export const useCart = () => {

    const addToCart = (dispatch: React.ActionDispatch<[action: CartActions]>, guitar: Guitar) => {
        dispatch({type: "add-to-cart", payload: {item: guitar}});
    }

    const calcularTotal = (cart: ItemCart[]) => {
        let total = 0;
        cart.forEach(i => total += (i.quantity * i.price))
        return total;
    }

    return {
        addToCart,
        calcularTotal,
    }
}