import { useContext } from 'react';
import { PolaroidContext } from '../../handler/polaroid/main';

export function PortalContainerFlip() {
  const { polaroidHandler } = useContext(PolaroidContext);
  return (
    <button onClick={() => polaroidHandler.flipPolaroid()}>
      <div className='mt-[3rem] animate-pulse cursor-pointer text-center text-xl font-bold leading-7 text-slate-400'>
        FLIP ME
      </div>
    </button>
  );
}
