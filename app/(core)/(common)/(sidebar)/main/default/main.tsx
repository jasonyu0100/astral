import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { DashboardSidebarTopOverview } from '../../top/overview/main';
import { DashboardSidebarIndicators } from '../indicators/main';
import { ArchiveIndicator } from '../indicators/variants/archive-indicator/main';
import { CreativeIndicator } from '../indicators/variants/creative-indicator/main';
import { JournalIndicator } from '../indicators/variants/journal-indicator/main';
import { SpaceIndicator } from '../indicators/variants/studio-indicator/main';
import { VentureIndicator } from '../indicators/variants/venture-indicator/main';
import { DashboardSidebarDefaultContainer } from './container/main';

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
