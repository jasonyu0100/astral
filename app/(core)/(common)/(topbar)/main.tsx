'use client';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForCurrentSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
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
        <DashboardTopbarContainer>
          <TopbarLogo href={studioMap.studio.personal.link} />
          <TopbarLeftGroup />
          <TopbarRightGroup />
        </DashboardTopbarContainer>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
