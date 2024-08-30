import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function StudioSpacesNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <a href={spaceMap.space.id.chat.link(space.id)}>
      <AstralPlayIcon className='h-[30px] w-[30px]' />
    </a>
  );
}
