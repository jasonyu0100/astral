'use client';
import { SpaceCount } from './count/main';
import { SpaceDate } from './date/main';
import { SpaceDay } from './day/main';
import { SpaceGenre } from './genre/main';
import { SpaceInfo } from './info/main';
import { SpaceObj } from '@/(logic)/model/space/main';
import { createContext, useState } from 'react';
import { Glass } from '@/(components)/glass/main';
import { backgroundStyles } from '@/(components)/styles/data';

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
      <Glass
        displayName={SpacesSpace.name}
        sizeStyle='w-full h-[100px]'
        backgroundStyle={`${hover && backgroundStyles['glass-5']}`}
        className={`flex h-[100px] w-full max-w-[1000px] flex-row items-center justify-between px-[3rem] py-[1rem]`}
        onMouseOver={() => changeHover(true)}
        onMouseOut={() => changeHover(false)}
      >
        <SpaceCount />
        <SpaceInfo />
        <SpaceGenre />
        <SpaceDay />
        <SpaceDate />
      </Glass>
    </CreativeSpaceContext.Provider>
  );
}
