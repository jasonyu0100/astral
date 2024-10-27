import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { AstralPlayIcon } from '@/icons/play/main';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';

export function StudioSpacesNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <a href={spacesMap.spaces.id.board.link(space.id)}>
      <AstralPlayIcon className='h-[1.5rem] w-[1.5rem]' />
    </a>
  );
}
