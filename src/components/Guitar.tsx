import type { Guitar } from "../types/types"

type GuitarProps = {
    item: Guitar;
}

export default function Guitar({ item }: GuitarProps) {

    console.log(item.image)

    return (
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col items-center shadow">
            <div className=" grid grid-cols-2">
                <div>
                    <img src={`../public/img/${item.image}.jpg`} alt={item.image}
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
                className="bg-red-500 w-full p-3 text-white uppercase font-bold"
            >agregar al carrito</button>
        </div>
    )
}
