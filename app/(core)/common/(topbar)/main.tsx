'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { CommonTopbarModals } from '../modals/controller/main';
import { DashboardTopbarView } from './view/main';

export function CommonTopbar() {
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForCurrentSpaceObj.Provider value={space}>
        <CommonTopbarModals>
          <DashboardTopbarView />
        </CommonTopbarModals>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
