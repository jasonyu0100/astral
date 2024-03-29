'use client';
import { spaceMap } from '@/(cx)/(process)/space/[id]/map';
import { studioMap } from '@/(cx)/(studio)/studio/map';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DashboardSidebarTopOveriewCover } from './cover/main';
import { DashboardSidebarTopOverviewInfo } from './info/main';

export function DashboardSidebarTopOverview() {
  const space = useGlobalSpace((state) => state.space);
  const [url, changeUrl] = useState(studioMap.studio.spaces.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spaceMap.space.id.storm.link(space.id)
        : studioMap.studio.spaces.link,
    );
  }, [space]);

  return (
    <Link className='h-[3rem] w-full' href={url}>
      <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
        <DashboardSidebarTopOveriewCover />
        <DashboardSidebarTopOverviewInfo />
      </div>
    </Link>
  );
}
