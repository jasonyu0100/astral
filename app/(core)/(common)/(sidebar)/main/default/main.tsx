import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { DashboardSidebarIndicators } from '../../indicators/main';
import { DashboardSidebarTopOverview } from '../../top/overview/main';
import { DashboardSidebarDefaultContainer } from './container/main';
import { ArchiveIndicator } from '../../indicators/variants/archive-indicator/main';
import { CreativeIndicator } from '../../indicators/variants/creative-indicator/main';
import { JournalIndicator } from '../../indicators/variants/journal-indicator/main';
import { SpaceIndicator } from '../../indicators/variants/studio-indicator/main';
import { VentureIndicator } from '../../indicators/variants/venture-indicator/main';

export function DashboardSidebarDefault() {
  return (
    <DashboardSidebarDefaultContainer>
      <DashboardSidebarTopOverview />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <DashboardSidebarIndicators>
        <SpaceIndicator />
        <JournalIndicator />
        <ArchiveIndicator />
        <CreativeIndicator />
        <VentureIndicator />
      </DashboardSidebarIndicators>
    </DashboardSidebarDefaultContainer>
  );
}
