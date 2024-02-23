'use client';
import { LinkInputProps } from '@/(components)/types/main';
import { spaceMap } from '@/(cx)/(process)/space/[id]/map';
import { studioMap } from '@/(cx)/(studio)/studio/map';
import { useGlobalSpace } from '@/(logic)/store/space/main';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function SidebarCurrentSpace({ children }: { children: React.ReactNode}) {
  const space = useGlobalSpace(state => state.space);
  const [url, changeUrl] = useState(studioMap.studio.now.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spaceMap.space.id.storm.link(space.id)
        : studioMap.studio.now.link,
    );
  }, [space]);

  return (
    <Link className='h-[3rem] w-full' href={url}>
      <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
        {children}
      </div>
    </Link>
  );
}
