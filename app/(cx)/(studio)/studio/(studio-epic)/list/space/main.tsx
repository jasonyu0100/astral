'use client';
import { SpaceCount } from './count/main';
import { SpaceDate } from './date/main';
import { SpaceDay } from './day/main';
import { SpaceGenre } from './genre/main';
import { SpaceInfo } from './info/main';
import {
  SpaceContext,
  SpaceObj,
} from '@/(logic)/internal/data/infra/model/space/main';
import { createContext, useContext, useState } from 'react';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { SpaceMore } from './more/main';

interface CreativeSpaceContextObj {
  space: SpaceObj;
  index: number;
  hover: boolean;
}

export const CreativeSpaceContext = createContext<CreativeSpaceContextObj>(
  {} as CreativeSpaceContextObj,
);

export function StudioSpace({ index }: { index: number }) {
  const space = useContext(SpaceContext);
  const [hover, changeHover] = useState(false);

  return (
    <CreativeSpaceContext.Provider value={{ space, index, hover }}>
      <GlassContainer
        displayName={StudioSpace.name}
        sizeStyle='w-full h-[100px]'
        glassStyle={`${hover && backgroundStyles['glass-5']}`}
        className={`flex h-[100px] w-full flex-row items-center justify-between pl-[3rem] pr-[2rem] py-[1rem]`}
        onMouseOver={() => changeHover(true)}
        onMouseOut={() => changeHover(false)}
      >
        <div className='flex flex-row space-x-[50px]'>
          <SpaceCount />
          <SpaceInfo />
          <SpaceDay />
          <SpaceGenre />
          <SpaceDate />
        </div>
        <SpaceMore />
      </GlassContainer>
    </CreativeSpaceContext.Provider>
  );
}
