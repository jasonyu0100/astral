'use client';
import { PortalBackground } from './(portal)/common/background/main';
import {
  PolaroidContext,
  usePolaroid,
} from './(portal)/common/handler/polaroid/main';
import { ReserveView } from './(portal)/reserve/view';

export default function Page() {
  const { categories, flipped, index, transition, variant, _polaroidHandler } =
    usePolaroid();

  return (
    <PortalBackground>
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
        <ReserveView />;
      </PolaroidContext.Provider>
    </PortalBackground>
  );
}
