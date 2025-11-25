import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { db } from './data/data';
import Guitar from './components/Guitar';

export default function App() {
  return (
    <>
      <header className="bg-red-500 p-11">
        <div className="flex justify-between max-w-5xl m-auto items-center">
          <h1 className="font-bold text-white text-5xl">GuitarLa</h1>
          <ShoppingCartIcon
            className="w-10 h-10 text-white hover:w-11 hover:h-11 transition-all"
          />
        </div>
      </header>

      <section>
        <div className=" max-w-5xl m-auto p-10 pt-16">
          <h2 className='text-center font-bold text-gray-800 text-4xl mb-10'>Nuestros productos</h2>
          <div className='grid grid-cols-3 gap-3'>
            {db.map(i =>
              <Guitar
                key={i.id}
                item={i}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
