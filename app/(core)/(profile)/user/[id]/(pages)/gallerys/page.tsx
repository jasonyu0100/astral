'use client';

import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/(controller)/user/main';
import { ContextForUserObj, UserObj } from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { ProfileUserView } from './view/main';

function Page() {
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const user = userController.state.obj || ({} as UserObj);

  return (
    <ContextForUserMain.Provider value={userController}>
      <ContextForUserObj.Provider value={user}>
        <ProfileUserView></ProfileUserView>
      </ContextForUserObj.Provider>
    </ContextForUserMain.Provider>
  );
}

export default isVerseAuth(Page);
