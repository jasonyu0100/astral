import { userMap } from '@/(core)/(dashboard)/user/[id]/map';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { AstralPlayIcon } from '@/icons/play/main';
import Link from 'next/link';
import { useContext } from 'react';

export function NetworkCreativeNumberPlay() {
  const user = useContext(ContextForUserObj);

  return (
    <Link href={userMap.profile.link(user.id)}>
      <AstralPlayIcon className='h-[2rem] w-[2rem]' />
    </Link>
  );
}
