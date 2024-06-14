'use client';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForHoverable,
  useControllerForHoverable,
} from '@/(logic)/contexts/hoverable/main';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { glassFx } from '@/(style)/data';
import { StudioSpacesRowContents } from './body/main';
import { StudioSpacesRowMore } from './more/main';

export function StudioSpacesRow({ index }: { index: number }) {
  const hoverableController = useControllerForHoverable();

  return (
    <ContextForHoverable.Provider value={hoverableController}>
      <ContextForIndexable.Provider value={index}>
        <GlassAreaContainer
          name={StudioSpacesRow.name}
          sizeFx='w-full h-[100px]'
          glassFx={`${hoverableController.hovered && glassFx['glass-10']}`}
          className={`flex h-[100px] w-full flex-row items-center justify-between py-[1rem] pl-[3rem] pr-[2rem]`}
          onMouseOver={() => hoverableController.onHover()}
          onMouseOut={() => hoverableController.onUnhover()}
        >
          <StudioSpacesRowContents />
          <StudioSpacesRowMore />
        </GlassAreaContainer>
      </ContextForIndexable.Provider>
    </ContextForHoverable.Provider>
  );
}
