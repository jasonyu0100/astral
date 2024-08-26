'use client';

import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { ProfileUserView } from './view/main';

function Page() {
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const user = userController.state.obj;

  return (
    <ContextForUserMain.Provider value={userController}>
      <ContextForUserObj.Provider value={user}>
        <ProfileUserView></ProfileUserView>
      </ContextForUserObj.Provider>
    </ContextForUserMain.Provider>
  );
}

export default isAstralAuth(Page);
