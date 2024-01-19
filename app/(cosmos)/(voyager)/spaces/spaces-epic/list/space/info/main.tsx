import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';
import { useGlobalUser } from '@/state/main';

export function SpaceInfo() {
  const [state, actions] = useGlobalUser()
  const { space } = useContext(CreativeSpaceContext);
  return (
    <div className='flex flex-row space-x-[2rem]'>
      <img className='w-[50px] h-[50px]' src='/voyager/spaces/think.png' />
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-lg text-white'>{state.user.fname} {state.user.lname}</p>
        <p className='font-regular text-white'>{space.title}</p>
      </div>
    </div>
  );
}
