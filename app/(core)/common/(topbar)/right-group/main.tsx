import { userProfileMap } from '@/(core)/(dashboard)/users/[id]/map';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext, useEffect, useState } from 'react';
import { TopbarAvatar } from './avatar/main';

export function TopbarRightGroup() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const [userId, setUserId] = useState<string>('0');

  useEffect(() => {
    if (userId === loggedInUser.id) return;
    setUserId(loggedInUser.id);
  }, [loggedInUser]);

  return (
    <>
      <div className='ml-auto flex flex-row items-center space-x-[2rem]'>
        <TopbarAvatar href={userProfileMap.profile.link(userId)} />
      </div>
    </>
  );
}
