import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import Link from 'next/link';
import { useContext } from 'react';

export function UserProfileSpacesNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <Link href={liveMap.live.link(space.id)}>
      <AstralPlayIcon className='h-[1.5rem] w-[1.5rem]' />
    </Link>
  );
}
