import {
  ContextForSpaceObj,
  SpaceVisibility,
} from '@/architecture/model/space/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function HomePersonalRowVisibility() {
  const spaceObj = useContext(ContextForSpaceObj);
  return (
    <div className='flex flex-row items-center justify-center'>
      <div
        className={ctwn(`h-[1rem] w-[1rem] animate-pulse-slow rounded-full`, {
          'bg-green-500': spaceObj.visibility === SpaceVisibility.PUBLIC,
          'bg-red-500': spaceObj.visibility === SpaceVisibility.PRIVATE,
        })}
      ></div>
    </div>
  );
}
