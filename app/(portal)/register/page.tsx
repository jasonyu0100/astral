'use client';
import { PolaroidContext, usePolaroid } from '../common/handler/polaroid/main';
import { RegisterView } from './view';

function Page() {
  const { categories, flipped, index, transition, variant, _polaroidHandler } =
    usePolaroid();

  return (
    <PolaroidContext.Provider
      value={{
        categories,
        flipped,
        index,
        transition,
        variant: variant,
        polaroidHandler: _polaroidHandler,
      }}
    >
      <RegisterView />
    </PolaroidContext.Provider>
  );
}

export default Page;
