import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralEditIcon } from '@/icons/edit/main';
import Link from 'next/link';
import { useContext } from 'react';

export function HomeCreateNumberPlay() {
  const space = useContext(ContextForSpaceObj);

  return (
    <Link href={spacesMap.spaces.id.focus.link(space.id)}>
      <AstralEditIcon className='h-[1.5rem] w-[1.5rem]' />
    </Link>
  );
}
