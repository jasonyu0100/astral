import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function StudioSpacesNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <a href={spaceMap.space.id.chat.link(space.id)}>
      <AstralPlayIcon className='h-[4rem] w-[4rem]' />
    </a>
  );
}
