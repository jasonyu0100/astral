import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';
import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';

export function SpaceInfo() {
  const { space } = useContext(CreativeSpaceContext)
  return (
    <a href={spaceMap.space.id.storm.link(space.id)}>
      <div className='flex flex-row space-x-[2rem]'>
        <img className='w-[50px] h-[50px]' src='/voyager/spaces/think.png' />
        <div className='flex flex-col justify-center'>
          <p className='font-bold text-lg text-white'>Jason</p>
          <p className='font-regular text-white'>Hello World</p>
        </div>
      </div>
    </a>
  );
}
