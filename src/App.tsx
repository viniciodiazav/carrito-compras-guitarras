import { db } from './data/data';
import Guitar from './components/Guitar';
import Header from './components/Header';
import { useReducer } from 'react';
import { cartReducer, initialState } from './hooks/guitar-reducer';
import { useCart } from './hooks/useCart';

export default function App() {

  const [reducer, dispatch] = useReducer(cartReducer, initialState);

  const { addToCart } = useCart();

  return (
    <>
      <Header />

      <section>
        <div className=" max-w-5xl m-auto p-10 pt-16">
          <h2 className='text-center font-bold text-gray-800 text-4xl mb-10'>Nuestros productos</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {db.map(i =>
              <Guitar
                key={i.id}
                item={i}
                addToCart={addToCart}
                dispatch={dispatch}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
