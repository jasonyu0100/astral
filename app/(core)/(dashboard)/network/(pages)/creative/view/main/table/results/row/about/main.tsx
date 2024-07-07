import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function CreativeNetworkRowAbout() {
  const user = useContext(ContextForUserObj);

  return (
    <div className='flex justify-center'>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <img
          src={user?.dp?.src}
          className='h-[3rem] w-[3rem] rounded-full object-cover'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-bold text-slate-800'>
            {user?.displayName}
          </p>
          <p className='font-light text-slate-900'>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
