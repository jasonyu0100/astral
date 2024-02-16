'use client';
import { LinkInputProps } from '@/(common)/types/main';
import { spaceMap } from '@/(verses)/(apollo)/space/[id]/map';
import { studioMap } from '@/(verses)/(voyager)/studio/map';
import { useGlobalSpace } from '@/(store)/space/main';
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
