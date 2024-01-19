"use client"
import { LinkInputProps } from '@/(common)/types/main';
import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';
import { spacesMap } from '@/(cosmos)/(voyager)/spaces/map';
import { useGlobalSpace } from '@/state/space/main';
import { useEffect, useState } from 'react';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarCurrentSpace({ children }: InputProps) {
  const [spaceState, __] = useGlobalSpace();
  const [url, changeUrl] = useState(spacesMap.spaces.now.link);
  useEffect(() => {
    changeUrl(
      spaceState.space.id
        ? spaceMap.space.id.storm.link(spaceState.space.id)
        : spacesMap.spaces.now.link,
    );
  }, [spaceState]);

  return (
    <a className='w-full h-[3rem]' href={url}>
      <div className='flex flex-row w-full h-full items-center space-x-[1rem]'>
        {children}
      </div>
    </a>
  );
}
