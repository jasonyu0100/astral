'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForCurrentSpaceObj } from '@/(server)/(model)/space/main';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { DashboardSidebarTopOveriewCover } from './cover/main';
import { DashboardSidebarTopOverviewInfo } from './info/main';

export function DashboardSidebarTopOverview() {
  const space = useContext(ContextForCurrentSpaceObj);
  const [url, changeUrl] = useState(studioMap.studio.personal.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spaceMap.space.id.idea.link(space.id)
        : studioMap.studio.personal.link,
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
