import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function StudioPersonalNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <a href={spacesMap.spaces.id.mission.link(space.id)}>
      <AstralPlayIcon className='h-[1.5rem] w-[1.5rem]' />
    </a>
  );
}
