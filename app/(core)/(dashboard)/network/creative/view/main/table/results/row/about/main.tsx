import { exampleFileElem } from '@/server/model/elements/file/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowAbout() {
  const user = useContext(ContextForUserObj);

  return (
    <div className='flex flex-row items-center space-x-[2rem]'>
      <img
        src={user?.dp?.src || exampleFileElem.src}
        className='h-[3rem] w-[3rem] rounded-full object-cover'
      />
      <div className='flex flex-col justify-center'>
        <p className='text-lg font-bold text-white'>{user?.displayName}</p>
        <p className='font-light text-white'>{user?.email}</p>
      </div>
    </div>
  );
}
