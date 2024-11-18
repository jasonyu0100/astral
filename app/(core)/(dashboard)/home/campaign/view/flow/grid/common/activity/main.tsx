import {
  ContextForSpaceObj,
  SpaceVisibility,
} from '@/architecture/model/space/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function HomeCampaignRowVisibility() {
  const spaceObj = useContext(ContextForSpaceObj);
  return (
    <div className='flex flex-row items-center justify-center'>
      <div
        className={ctwn(`h-[1rem] w-[1rem] animate-pulse-slow rounded-full`, {
          'bg-green-400': spaceObj.visibility === SpaceVisibility.PUBLIC,
          'bg-orange-400': spaceObj.visibility === SpaceVisibility.PRIVATE,
        })}
      ></div>
    </div>
  );
}
