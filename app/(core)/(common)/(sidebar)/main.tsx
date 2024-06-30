'use client';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForCurrentSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { createContext } from 'react';
import { DashboardSidebarDefaultContainer } from './main/container/default/main';
import { DashboardSidebarMinimisedContainer } from './main/container/minimised/main';
import { DashboardSidebarIndicators } from './main/indicators/main';
import { JournalIndicator } from './main/indicators/variants/journal/main';
import { NetworkIndicator } from './main/indicators/variants/network/main';
import { SpaceIndicator } from './main/indicators/variants/studio/main';
import { VaultIndicator } from './main/indicators/variants/vault/main';
import { DashboardSidebarTopBack } from './top/back/main';
import { DashboardSidebarTopOverview } from './top/overview/main';

export interface DashboardSidebarContextObj {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}

export const ContextForDashboardSidebar = createContext(
  {} as DashboardSidebarContextObj,
);

export function DashboardSidebarView({
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
        <ContextForDashboardSidebar.Provider
          value={{
            indicator: indicator,
            minimised: minimised,
            backUrl: backUrl,
          }}
        >
          {minimised ? (
            <DashboardSidebarMinimisedContainer>
              <DashboardSidebarTopBack
                href={backUrl || studioMap.studio.personal.link}
              />
              <HorizontalDivider className='my-[1rem] mb-[2rem]' />
              <DashboardSidebarIndicators>
                <SpaceIndicator />
                <JournalIndicator />
                {/* <ExplorerIndicator /> */}
                <NetworkIndicator />
                <VaultIndicator />
              </DashboardSidebarIndicators>
            </DashboardSidebarMinimisedContainer>
          ) : (
            <DashboardSidebarDefaultContainer>
              <DashboardSidebarTopOverview />
              <HorizontalDivider className='my-[1rem] mb-[2rem]' />
              <DashboardSidebarIndicators>
                <SpaceIndicator />
                <JournalIndicator />
                {/* <ExplorerIndicator /> */}
                <NetworkIndicator />
                <VaultIndicator />
              </DashboardSidebarIndicators>
            </DashboardSidebarDefaultContainer>
          )}
        </ContextForDashboardSidebar.Provider>
      </ContextForCurrentSpaceObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}
