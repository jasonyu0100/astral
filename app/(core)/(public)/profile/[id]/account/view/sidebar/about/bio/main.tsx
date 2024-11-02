import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function UserProfileAboutBio() {
  const profileUser = useContext(ContextForProfileUserObj);

  return (
    <>
      <div className='flex w-full flex-col space-y-[1rem]'>
        <p className='text-md text-slate-300'>
          <span className='font-bold'>Role: </span> {profileUser?.role}
        </p>
        <p className='text-md text-slate-300'>
          <span className='font-bold'>Visibility: </span>{' '}
          {profileUser?.visibility}
        </p>
      </div>
    </>
  );
}
