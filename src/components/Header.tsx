import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-red-500 py-5 px-5 md:py-11">
      <div className="flex flex-row justify-between max-w-5xl m-auto items-center">
        <h1 className="font-bold text-white text-5xl md:text-4xl">GuitarLa</h1>

        <div className="relative group">
          <ShoppingCartIcon
            className="w-10 h-10 text-white hover:scale-110 transition-all cursor-pointer"
          />
          
          <div className="absolute right-0 top-10 bg-white p-4 shadow-lg rounded-lg w-52 hidden group-hover:block z-10">
            <p className="text-center font-bold text-gray-800">Tu carrito está vacío</p>
          </div>
        </div>

      </div>
    </header>
  )
}