import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import ItemInCart from './ItemInCart';
import type { ItemCart } from '../types/types';
import type { CartActions } from '../hooks/guitar-reducer';

type HeaderProps = {
    cart: ItemCart[];
    calcularTotal: (cart: ItemCart[]) => number;
    dispatch: React.ActionDispatch<[action: CartActions]>;
}

export default function Header({ cart, calcularTotal, dispatch }: HeaderProps) {
    return (
        <header className="bg-red-500 py-5 px-5 md:py-11">
            <div className="flex flex-row justify-between max-w-5xl m-auto items-center">
                <h1 className="font-bold text-white text-3xl md:text-4xl">GuitarLA</h1>

                <div className="relative group">
                    <ShoppingCartIcon
                        className="w-10 h-10 text-white hover:scale-110 transition-all cursor-pointer"
                    />

                    <div className="absolute right-0 top-10 bg-white p-4 shadow-lg rounded-lg w-96 hidden group-hover:block z-10">
                        {cart.length === 0 ? (
                            <div className='text-center font-bold'>El carrito esta vacio</div>
                        ) : (
                            <>
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="p-2 text-sm text-gray-600">Imagen</th>
                                            <th className="p-2 text-sm text-gray-600">Nombre</th>
                                            <th className="p-2 text-sm text-gray-600">Precio</th>
                                            <th className="p-2 text-sm text-gray-600">Cant.</th>
                                            <th className="p-2 text-sm text-gray-600"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(i =>
                                            <ItemInCart
                                                key={i.id}
                                                item={i}
                                                dispatch={dispatch}
                                            />
                                        )}
                                    </tbody>
                                </table>

                                <p className="text-end font-bold text-gray-800 mt-4">Total: ${calcularTotal(cart)}</p>

                                <button className="mt-4 bg-red-500 w-full p-2 text-white font-bold uppercase rounded hover:bg-red-600 transition-colors cursor-pointer"
                                    onClick={() => dispatch({type: 'empty-cart'})}
                                >
                                    Vaciar Carrito
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}