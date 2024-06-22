import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function ProfileAboutDetails() {
  const user = useContext(ContextForUserObj);

  return (
    <>
      <img
        className='aspect-square h-[250px] w-[250px] rounded-full'
        src={user.dp?.src || exampleFileElem.src}
      />
      <div className='flex w-full flex-col'>
        <p className='text-xl font-bold text-white'>
          {user.displayName || 'Display Name'}
        </p>
        <p className='font-light text-white'>
          {user.email || 'creative@verses.digital'}
        </p>
      </div>
    </>
  );
}
