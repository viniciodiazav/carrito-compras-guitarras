import type { CartActions } from "../hooks/guitar-reducer";
import type { ItemCart } from "../types/types"

type ItemInCartProps = {
    item: ItemCart;
    dispatch: React.ActionDispatch<[action: CartActions]>;
}

export default function ItemInCart({ item, dispatch }: ItemInCartProps) {
    return (
        <>
            <tr className="border-b border-gray-100">
                <td className="p-2">
                    <img
                        className="h-20 w-auto object-contain"
                        src={`/img/${item.image}.jpg`}
                        alt="imagen guitarra"
                    />
                </td>
                <td className="p-2 text-center font-bold text-gray-800">{item.name}</td>
                <td className="p-2 text-center text-gray-800">${item.price}</td>

                <td className="p-2">
                    <div className="flex justify-center items-center gap-2">
                        <button
                            type="button"
                            className="h-6 w-3 bg-gray-800 font-bold hover:bg-gray-700 flex items-center justify-center text-white cursor-pointer"
                            onClick={() => dispatch({ type: "substract-one", payload: { id: item.id } })}
                        >
                            -
                        </button>
                        <p className="text-gray-800">{item.quantity}</p>
                        <button
                            type="button"
                            className="h-6 w-3 bg-gray-800 font-bold hover:bg-gray-700 flex items-center justify-center text-white cursor-pointer"
                            onClick={() => dispatch({ type: "add-one", payload: { id: item.id } })}
                        >
                            +
                        </button>
                    </div>
                </td>

                <td className="p-2">
                    <button
                        type="button"
                        className="bg-red-500 h-6 w-6 rounded-full text-white font-bold hover:bg-red-600 flex items-center justify-center cursor-pointer"
                        onClick={() => dispatch({type: "delete-item", payload: {id: item.id}})}
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    )
}
