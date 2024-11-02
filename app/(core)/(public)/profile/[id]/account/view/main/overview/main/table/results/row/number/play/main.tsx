import { liveMap } from '@/(core)/(public)/live/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function StudioSpacesNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <a href={liveMap.live.link(space.id)}>
      <AstralPlayIcon className='h-[1.5rem] w-[1.5rem]' />
    </a>
  );
}
