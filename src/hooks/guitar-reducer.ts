import type { Guitar, ItemCart } from "../types/types"

export type CartActions =
    { type: 'add-to-cart', payload: { item: Guitar} }

export type ReduceState = {
    cart: ItemCart[];
}

export const initialState: ReduceState = {
    cart: [],
}

export const cartReducer = (reducer: ReduceState = initialState, action: CartActions) => {
    if (action.type === 'add-to-cart') {
        const index = reducer.cart.findIndex(i => i.id === action.payload.item.id);
        let newCart: ItemCart[];
        if (index === -1) {
            const newItem: ItemCart = {...action.payload.item, quantity: 1};
            newCart = [...reducer.cart, newItem];
        } else {
            newCart = reducer.cart.map(i => {
                if (i.id === action.payload.item.id && i.quantity < 5) {
                    i.quantity++;
                    i.quantity -= 0.5;
                }
                return i;
            })
        }
        return {
            ...reducer,
            cart: newCart,
        }
    }
    return reducer;
}