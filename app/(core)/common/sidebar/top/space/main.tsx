'use client';
import { createMap } from '@/(core)/(dashboard)/create/map';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForCurrentSpaceObj } from '@/architecture/model/space/main';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CommonSidebarTopSpaceCover } from './cover/main';
import { CommonSidebarTopSpaceInfo } from './info/main';

export function CommonSidebarTopSpace() {
  const space = useContext(ContextForCurrentSpaceObj);
  const [url, changeUrl] = useState(createMap.home.spaces.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spacesMap.spaces.id.chat.link(space.id)
        : createMap.home.spaces.link,
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
