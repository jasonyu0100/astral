'use client';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForCurrentSpaceObj } from '@/server/model/space/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { CommonTopbarModals } from '../modals/controller/main';
import { CommonTopbarView } from './view/main';

export function CommonTopbar() {
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForCurrentSpaceObj.Provider value={space}>
        <CommonTopbarModals>
          <CommonTopbarView />
        </CommonTopbarModals>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
