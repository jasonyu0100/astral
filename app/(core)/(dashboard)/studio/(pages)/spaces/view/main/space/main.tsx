'use client';
import { ContextForSpaceObj, SpaceObj } from '@/(server)/(model)/space/main';
import { createContext, useContext, useState } from 'react';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { StudioSpaceMore } from './more/main';
import { StudioSpaceBody } from './body/main';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';

export function StudioSpace({ index }: { index: number }) {
  const [hover, changeHover] = useState(false);

  return (
    <ContextForHoverable.Provider
      value={{
        hovered: hover,
        onHover: () => changeHover(true),
        onUnhover: () => changeHover(false),
      }}
    >
      <ContextForIndexable.Provider value={{ index }}>
        <GlassAreaContainer
          name={StudioSpace.name}
          sizeFx='w-full h-[100px]'
          glassFx={`${hover && glassFx['glass-10']}`}
          className={`flex h-[100px] w-full flex-row items-center justify-between py-[1rem] pl-[3rem] pr-[2rem]`}
          onMouseOver={() => changeHover(true)}
          onMouseOut={() => changeHover(false)}
        >
          <StudioSpaceBody />
          <StudioSpaceMore />
        </GlassAreaContainer>
      </ContextForIndexable.Provider>
    </ContextForHoverable.Provider>
  );
}
