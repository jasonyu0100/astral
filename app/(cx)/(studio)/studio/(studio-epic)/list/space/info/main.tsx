import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';
import { useGlobalUser } from '@/(logic)/store/user/main';

export function SpaceInfo() {
    const user = useGlobalUser((state) => state.user);
  const { space } = useContext(CreativeSpaceContext);
  return (
    <div className='flex w-[250px] flex-row space-x-[2rem]'>
      <img
        className='h-[50px] w-[50px] rounded-full'
        src={space?.thumbnail?.src}
      />
      <div className='flex flex-col justify-center'>
        <p className='text-lg font-bold text-white'>
          {user.fname} {user.lname}
        </p>
        <p className='font-regular text-white'>{space.title}</p>
      </div>
    </div>
  );
}
