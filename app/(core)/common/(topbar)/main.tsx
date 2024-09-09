'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { UserSettingsModals } from './(modals)/controller/main';
import { DashboardTopbarContainer } from './container/main';
import { TopbarLogo } from './left-group/logo/main';
import { TopbarLeftGroup } from './left-group/main';
import { TopbarRightGroup } from './right-group/main';

export function DashboardTopbar() {
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForCurrentSpaceObj.Provider value={space}>
        <UserSettingsModals>
          <DashboardTopbarContainer>
            <TopbarLogo href={'/'} />
            <TopbarLeftGroup />
            <TopbarRightGroup />
          </DashboardTopbarContainer>
        </UserSettingsModals>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
