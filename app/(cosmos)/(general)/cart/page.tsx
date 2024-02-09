'use client';
import { CartModalContext, useCartModal } from '../../(modals)/cart-modal/main';
import { CartModalView } from '../../(modals)/cart-modal/view';

export default function Page() {
  const modalContext = useCartModal();

  return (
    <CartModalContext.Provider value={modalContext}>
      <div className='h-full w-full p-[4rem]'>
        <button
          className='bg-blue-500'
          onClick={() => modalContext.editCartModal.open()}
        >
          CLICK ME
        </button>
        <CartModalView />
      </div>
    </CartModalContext.Provider>
  );
}
