'use client';

import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';
import { SpaceCount } from './count/main';
import { SpaceDate } from './date/main';
import { SpaceDay } from './day/main';
import { SpaceGenre } from './genre/main';
import { SpaceInfo } from './info/main';
import { SpaceObj } from '@/tables/space/main';

interface SpacesSpaceProps {
  space: SpaceObj;
}

export function SpacesSpace({ space }: SpacesSpaceProps) {
  return (
    <div className='flex flex-row w-full space-x-[3rem] px-[1rem] py-[1rem]'>
      <SpaceCount />
      <SpaceInfo href={spaceMap.space.id.storm.link(space.id)} />
      <SpaceGenre />
      <SpaceDay /> adsadsads
      <SpaceDate />
    </div>
  );
}
