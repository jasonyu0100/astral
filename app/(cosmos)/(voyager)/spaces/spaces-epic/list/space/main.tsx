'use client';

import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';
import { SpaceCount } from './count/main';
import { SpaceDate } from './date/main';
import { SpaceDay } from './day/main';
import { SpaceGenre } from './genre/main';
import { SpaceInfo } from './info/main';
import { SpaceObj } from '@/tables/space/main';
import { createContext, useState } from 'react';
import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

interface CreativeSpaceProps {
  space: SpaceObj;
  index: number;
}

interface CreativeSpaceContextObj {
  space: SpaceObj;
  index: number;
  hover: boolean;
}

export const CreativeSpaceContext = createContext<CreativeSpaceContextObj>(
  {} as CreativeSpaceContextObj,
);

export function SpacesSpace({ space, index }: CreativeSpaceProps) {
  const [hover, changeHover] = useState(false);

  return (
    <CreativeSpaceContext.Provider value={{ space, index, hover }}>
      <Layer
        displayName={SpacesSpace.name}
        sizeStyle='w-full h-[100px]'
        backgroundStyle={`${hover && backgroundStyles['glass-5']}`}
        className={`flex flex-row items-center w-full px-[3rem] py-[1rem] justify-between max-w-[1000px] h-[100px]`}
        onMouseOver={() => changeHover(true)}
        onMouseOut={() => changeHover(false)}
      >
        <SpaceCount />
        <SpaceInfo />
        <SpaceGenre />
        <SpaceDay />
        <SpaceDate />
      </Layer>
    </CreativeSpaceContext.Provider>
  );
}
