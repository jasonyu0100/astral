import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { DashboardSidebarTopBack } from '../../top/back/main';
import { ArchiveIndicator } from '../../indicators/variants/archive-indicator/main';
import { CreativeIndicator } from '../../indicators/variants/creative-indicator/main';
import { JournalIndicator } from '../../indicators/variants/journal-indicator/main';
import { SpaceIndicator } from '../../indicators/variants/studio-indicator/main';
import { VentureIndicator } from '../../indicators/variants/venture-indicator/main';
import { DashboardSidebarIndicators } from '../../indicators/main';
import { useContext } from 'react';
import { DashboardSidebarContext } from '../../main';
import { DashboardSidebarMinimisedContainer } from './container/main';

export function DashboardSidebarMinimised() {
  const { backUrl } = useContext(DashboardSidebarContext);
  return (
    <DashboardSidebarMinimisedContainer>
      <DashboardSidebarTopBack href={backUrl || studioMap.studio.spaces.link} />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <DashboardSidebarIndicators>
        <SpaceIndicator />
        <ArchiveIndicator />
        <JournalIndicator />
        <CreativeIndicator />
        <VentureIndicator />
      </DashboardSidebarIndicators>
    </DashboardSidebarMinimisedContainer>
  );
}
