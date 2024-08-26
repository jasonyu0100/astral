import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForProfileUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function ProfileAboutDetails() {
  const profileUser = useContext(ContextForProfileUserObj);

  return (
    <>
      <img
        className='aspect-square h-[250px] w-[250px] rounded-full'
        src={profileUser.dp?.src || exampleFileElem.src}
      />
      <div className='flex w-full flex-col'>
        <p className='text-xl font-bold text-white'>
          {profileUser?.displayName || 'Display Name'}
        </p>
        <p className='font-light text-white'>
          {profileUser?.email || 'creative@astrals.com.au'}
        </p>
      </div>
    </>
  );
}
