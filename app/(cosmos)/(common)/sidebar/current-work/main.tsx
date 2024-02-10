'use client';
import { LinkInputProps } from '@/(common)/types/main';
import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';
import { spacesMap } from '@/(cosmos)/(voyager)/spaces/map';
import { useGlobalSpace } from '@/state/space/main';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarCurrentSpace({ children }: InputProps) {
  const space = useGlobalSpace(state => state.space);
  const [url, changeUrl] = useState(spacesMap.spaces.now.link);
  useEffect(() => {
    changeUrl(
      space.id
        ? spaceMap.space.id.storm.link(space.id)
        : spacesMap.spaces.now.link,
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
