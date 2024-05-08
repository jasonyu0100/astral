'use client';
import { PortalBackground } from './(entry)/(portal)/(polaroid-epic)/background/main';
import {
  usePolaroid,
  PolaroidContext,
} from './(entry)/(portal)/(polaroid-epic)/handler/polaroid/main';
import { ReserveView } from './(entry)/(portal)/reserve/view';

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
          variant,
          polaroidHandler: _polaroidHandler,
        }}
      >
        <ReserveView />;
      </PolaroidContext.Provider>
    </PortalBackground>
  );
}
