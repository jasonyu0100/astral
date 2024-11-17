import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralPlayIcon } from '@/icons/play/main';
import Link from 'next/link';
import { useContext } from 'react';

export function HomeCreateNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <Link href={spacesMap.spaces.id.focus.link(space.id)}>
      <AstralPlayIcon className='h-[1.5rem] w-[1.5rem]' />
    </Link>
  );
}
