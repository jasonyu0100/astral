'use client';
import { ContextForCurrentSpaceObj } from '@/architecture/model/space/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { createContext } from 'react';
import { CommonSidebarContainer } from './common/container/main';
import { CommonSidebarIndicators } from './common/indicators/main';
import { CommonSidebarCreateIndicator } from './common/indicators/variants/create/main';
import { CommonSidebarExploreIndicator } from './common/indicators/variants/feed/main';
import { CommonSidebarNetworkIndicator } from './common/indicators/variants/network/main';
import { CommonSidebarDriveIndicator } from './common/indicators/variants/vault/main';
import { CommonSidebarModals } from './modals/controller/main';
import { CommonSidebarTopSpace } from './top/space/main';

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
            <CommonSidebarContainer minimised={minimised}>
              <CommonSidebarTopSpace />
              <HorizontalDivider className='my-[1rem] mb-[2rem]' />
              <CommonSidebarIndicators>
                <CommonSidebarCreateIndicator />
                <CommonSidebarExploreIndicator />
                <CommonSidebarDriveIndicator />
                {process.env.LIVE_MODE !== 'true' && (
                  <CommonSidebarNetworkIndicator />
                )}
                {/* <CommonSidebarExplorerIndicator /> */}
              </CommonSidebarIndicators>
            </CommonSidebarContainer>
          </CommonSidebarModals>
        </ContextForCommonSidebar.Provider>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
