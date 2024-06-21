'use client';

import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/(controller)/user/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { ProfileUserView } from '../../view/main';

function Page() {
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const user = userController.state.obj;

  return (
    <ContextForUserMain.Provider value={userController}>
      <ContextForUserObj.Provider value={user}>
        <ProfileUserView>
          <div className='flex h-full w-full flex-row'>
            <img
              className='aspect-square h-[200px] w-[200px] rounded-full'
              src={user.dp?.src}
            />
            <h1 className='text-white'>
              {user.fname} {user.lname}
            </h1>
            <h1 className='text-white'>{user.displayName}</h1>
            <h1 className='text-white'>{user.bio}</h1>
            <h1 className='text-white'>{user.email}</h1>
            <h1 className='text-white'>{user.role}</h1>
            <div className='flex flex-row'>
              <h1 className='text-white'>100 Supporters</h1>
              <h1 className='text-white'>100 Collaborators</h1>
            </div>
          </div>
        </ProfileUserView>
      </ContextForUserObj.Provider>
    </ContextForUserMain.Provider>
  );
}

export default isVerseAuth(Page);
