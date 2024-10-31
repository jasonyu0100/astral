import { ContextForProfileUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function UserProfileAboutBio() {
  const profileUser = useContext(ContextForProfileUserObj);

  return (
    <>
      <div className='flex w-full flex-col space-y-[1rem]'>
        <p className='text-sm text-white'>{profileUser?.role}</p>
      </div>
    </>
  );
}
