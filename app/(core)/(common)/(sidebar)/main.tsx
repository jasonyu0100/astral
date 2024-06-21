'use client';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { createContext } from 'react';
import { DashboardSidebarDefaultContainer } from './main/container/default/main';
import { DashboardSidebarMinimisedContainer } from './main/container/minimised/main';
import { DashboardSidebarIndicators } from './main/indicators/main';
import { ArchiveIndicator } from './main/indicators/variants/archive/main';
import { VentureIndicator } from './main/indicators/variants/horizon/main';
import { JournalIndicator } from './main/indicators/variants/journal/main';
import { NetworkIndicator } from './main/indicators/variants/network/main';
import { SpaceIndicator } from './main/indicators/variants/studio/main';
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
  return (
    <ContextForDashboardSidebar.Provider
      value={{ indicator: indicator, minimised: minimised, backUrl: backUrl }}
    >
      {minimised ? (
        <DashboardSidebarMinimisedContainer>
          <DashboardSidebarTopBack
            href={backUrl || studioMap.studio.spaces.link}
          />
          <HorizontalDivider className='my-[1rem] mb-[2rem]' />
          <DashboardSidebarIndicators>
            <SpaceIndicator />
            <JournalIndicator />
            <ArchiveIndicator />
            <VentureIndicator />
            <NetworkIndicator />
          </DashboardSidebarIndicators>
        </DashboardSidebarMinimisedContainer>
      ) : (
        <DashboardSidebarDefaultContainer>
          <DashboardSidebarTopOverview />
          <HorizontalDivider className='my-[1rem] mb-[2rem]' />
          <DashboardSidebarIndicators>
            <SpaceIndicator />
            <JournalIndicator />
            <ArchiveIndicator />
            <VentureIndicator />
            <NetworkIndicator />
          </DashboardSidebarIndicators>
        </DashboardSidebarDefaultContainer>
      )}
    </ContextForDashboardSidebar.Provider>
  );
}
