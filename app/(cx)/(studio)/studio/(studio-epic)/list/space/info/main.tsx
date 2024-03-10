import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

export function SpaceInfo() {
    const user = useGlobalUser((state) => state.user);
  const { space } = useContext(CreativeSpaceContext);
  return (
    <div className='flex w-[300px] flex-row space-x-[2rem] px-[1rem]'>
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
