import { Divider } from '@/(lib)/(line)/divider/main';
import { ArchiveIndicator } from '../../indicators/variants/archive-indicator/main';
import { CreativeIndicator } from '../../indicators/variants/creative-indicator/main';
import { JournalIndicator } from '../../indicators/variants/journal-indicator/main';
import { SpaceIndicator } from '../../indicators/variants/studio-indicator/main';
import { VentureIndicator } from '../../indicators/variants/venture-indicator/main';
import { DashboardSidebarIndicators } from '../../indicators/main';
import { DashboardSidebarTopOverview } from '../../top/overview/main';
import { DashboardSidebarDefaultContainer } from './container/main';

export function DashboardSidebarDefault() {
  return (
    <DashboardSidebarDefaultContainer>
      <DashboardSidebarTopOverview/>
      <Divider className='my-[1rem] mb-[2rem]' />
      <DashboardSidebarIndicators>
        <SpaceIndicator />
        <ArchiveIndicator />
        <JournalIndicator />
        <CreativeIndicator />
        <VentureIndicator />
      </DashboardSidebarIndicators>
    </DashboardSidebarDefaultContainer>
  );
}
