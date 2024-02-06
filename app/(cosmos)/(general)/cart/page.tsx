'use client';
import { CartModalContext, useCartModalContext } from './modal/main';
import { CartModalsView } from './modal/view';

export default function Page() {
  const modalContext = useCartModalContext();

  return (
    <CartModalContext.Provider value={modalContext}>
      <div className='h-full w-full p-[4rem]'>
        <button
          className='bg-blue-500'
          onClick={() => modalContext.editCart.open()}
        >
          CLICK ME
        </button>
        <CartModalsView />
      </div>
    </CartModalContext.Provider>
  );
}
