import {
  ContextForSpaceObj,
  SpaceVisibility,
} from '@/architecture/model/space/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function StudioPersonalRowActivity() {
  const spaceObj = useContext(ContextForSpaceObj);
  return (
    <div className='flex flex-row items-center justify-center space-x-[0.25rem]'>
      <div
        className={ctwn(`h-[1rem] w-[1rem] animate-pulse-slow rounded-full`, {
          'bg-green-500': spaceObj.visibility === SpaceVisibility.PUBLIC,
          'bg-red-500': spaceObj.visibility === SpaceVisibility.PRIVATE,
        })}
      ></div>
    </div>
  );
}
