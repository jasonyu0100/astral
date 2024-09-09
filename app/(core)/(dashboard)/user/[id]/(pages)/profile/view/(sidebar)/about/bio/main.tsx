import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';

export function UserProfileAboutBio() {
  const profileUser = useContext(ContextForProfileUserObj);

  return (
    <>
      <div className='flex w-full flex-col space-y-[1rem]'>
        <p className='text-sm text-white'>
          <span className='font-bold'>role - </span>
          {profileUser.role}
        </p>
      </div>
      <div className='flex w-full flex-col space-y-[1rem]'>
        <p className='text-wrap max-w-[250px] text-sm font-light text-white'>
          A collaborative workflow that adapts to your creativity. For creatives
          by creatives, astral is a creative suite based out of Sydney, AU.
        </p>
      </div>
    </>
  );
}
