'use client';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForHoverable,
  useControllerForHoverable,
} from '@/(logic)/contexts/hoverable/main';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { glassFx } from '@/(style)/data';
import { StudioSpaceBody } from './body/main';
import { StudioSpaceMore } from './more/main';

export function StudioSpace({ index }: { index: number }) {
  const hoverableController = useControllerForHoverable();

  return (
    <ContextForHoverable.Provider value={hoverableController}>
      <ContextForIndexable.Provider value={index}>
        <GlassAreaContainer
          name={StudioSpace.name}
          sizeFx='w-full h-[100px]'
          glassFx={`${hoverableController.hovered && glassFx['glass-10']}`}
          className={`flex h-[100px] w-full flex-row items-center justify-between py-[1rem] pl-[3rem] pr-[2rem]`}
          onMouseOver={() => hoverableController.onHover()}
          onMouseOut={() => hoverableController.onUnhover()}
        >
          <StudioSpaceBody />
          <StudioSpaceMore />
        </GlassAreaContainer>
      </ContextForIndexable.Provider>
    </ContextForHoverable.Provider>
  );
}
