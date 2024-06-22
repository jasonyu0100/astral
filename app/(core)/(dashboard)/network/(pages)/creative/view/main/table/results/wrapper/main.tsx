'use client';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForHoverable,
  useControllerForHoverable,
} from '@/(logic)/contexts/hoverable/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function CreativeNetworkRowWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hoverableController = useControllerForHoverable();

  return (
    <ContextForHoverable.Provider value={hoverableController}>
      <GlassAreaContainer
        name={CreativeNetworkRowWrapper.name}
        sizeFx='w-full h-[7rem]'
        glassFx={`${hoverableController.hovered && glassFx['glass-10']}`}
        roundedFx={roundedFx.rounded}
        className={`flex flex-row items-center justify-between`}
        onMouseOver={() => hoverableController.onHover()}
        onMouseOut={() => hoverableController.onUnhover()}
      >
        {children}
      </GlassAreaContainer>
    </ContextForHoverable.Provider>
  );
}
