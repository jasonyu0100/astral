'use client';
import { homeMap } from '@/(core)/(dashboard)/home/map';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForCurrentSpaceObj } from '@/architecture/model/space/main';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CommonSidebarTopSpaceCover } from './cover/main';
import { CommonSidebarTopSpaceInfo } from './info/main';

export function CommonSidebarTopSpace() {
  const space = useContext(ContextForCurrentSpaceObj);
  const [url, changeUrl] = useState(homeMap.home.personal.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spacesMap.spaces.id.channel.link(space.id)
        : homeMap.home.personal.link,
    );
  }, [space]);

  return (
    <Link className='h-[3rem] w-full' href={url}>
      <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
        <CommonSidebarTopSpaceCover />
        <CommonSidebarTopSpaceInfo />
      </div>
    </Link>
  );
}
