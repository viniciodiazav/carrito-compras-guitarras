import { useState } from 'react'; // 1. Importar useState
import type { CartActions } from "../hooks/guitar-reducer";
import type { Guitar } from "../types/types"

type GuitarProps = {
    item: Guitar;
    addToCart: (dispatch: React.ActionDispatch<[action: CartActions]>, guitar: Guitar) => void;
    dispatch: React.ActionDispatch<[action: CartActions]>;
}

export default function Guitar({ item, addToCart, dispatch }: GuitarProps) {

    const [botonHover, setBotonHover] = useState(false);

    return (
        <div className={`bg-white rounded-2xl overflow-hidden flex flex-col items-center shadow transition-all ${botonHover ? 'ring-2 ring-red-500 scale-105' : ''}`}>
            <div className="grid grid-cols-2">
                <div>
                    <img src={`/img/${item.image}.jpg`} alt={item.image}
                        className="w-32 rounded-r-2xl"
                    />
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <p className="font-black text-2xl text-center mt-6">{item.name}</p>
                    <div className="p-2 text-center">
                        <p className="text-sm">{item.description}</p>
                    </div>
                    <p className="font-black text-3xl text-red-600">${item.price}</p>
                </div>
            </div>
            <button
                className="bg-red-500 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-red-800 transition-all"
                onClick={() => addToCart(dispatch, item)}
                onMouseEnter={() => setBotonHover(true)}
                onMouseLeave={() => setBotonHover(false)}
            >agregar al carrito</button>
        </div>
    )
}