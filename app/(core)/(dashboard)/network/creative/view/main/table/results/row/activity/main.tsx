import {
  ContextForUserObj,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function NetworkCreativeRowActivity() {
  const userObj = useContext(ContextForUserObj);

  return (
    <div className='flex flex-row justify-center'>
      <div
        className={ctwn(`h-[1rem] w-[1rem] animate-pulse-slow rounded-full`, {
          'bg-green-500': userObj.visibility === UserProfileVisibility.PUBLIC,
          'bg-red-500': userObj.visibility === UserProfileVisibility.PRIVATE,
        })}
      ></div>
    </div>
  );
}
