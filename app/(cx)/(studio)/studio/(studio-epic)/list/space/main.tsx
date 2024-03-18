'use client';
import {
  SpaceContext,
  SpaceObj,
} from '@/(logic)/internal/data/infra/model/space/main';
import { createContext, useContext, useState } from 'react';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { StudioSpaceMore } from './more/main';
import { StudioSpaceBody } from './body/main';

interface ExtendedSpaceContextObj {
  space: SpaceObj;
  index: number;
  hover: boolean;
}

export const ExtendedSpaceContext = createContext<ExtendedSpaceContextObj>(
  {} as ExtendedSpaceContextObj,
);

export function StudioSpace({ index }: { index: number }) {
  const space = useContext(SpaceContext);
  const [hover, changeHover] = useState(false);

  return (
    <ExtendedSpaceContext.Provider value={{ space, index, hover }}>
      <GlassContainer
        displayName={StudioSpace.name}
        sizeStyle='w-full h-[100px]'
        glassStyle={`${hover && backgroundStyles['glass-5']}`}
        className={`flex h-[100px] w-full flex-row items-center justify-between pl-[3rem] pr-[2rem] py-[1rem]`}
        onMouseOver={() => changeHover(true)}
        onMouseOut={() => changeHover(false)}
      >
        <StudioSpaceBody/>
        <StudioSpaceMore />
      </GlassContainer>
    </ExtendedSpaceContext.Provider>
  );
}
