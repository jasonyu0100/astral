'use client';
import { ContextForCurrentSpaceObj } from '@/architecture/model/space/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { createContext } from 'react';
import { CommonSidebarDefault } from './default/main';
import { CommonSidebarModals } from './modals/controller/main';

export interface ContextForCommonSidebar {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}

export const ContextForCommonSidebar = createContext(
  {} as ContextForCommonSidebar,
);

export function CommonSidebar({
  indicator,
  minimised,
  backUrl,
}: {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}) {
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForCurrentSpaceObj.Provider value={space}>
        <ContextForCommonSidebar.Provider
          value={{
            indicator: indicator,
            minimised: minimised,
            backUrl: backUrl,
          }}
        >
          <CommonSidebarModals>
            <CommonSidebarDefault />
          </CommonSidebarModals>
        </ContextForCommonSidebar.Provider>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
