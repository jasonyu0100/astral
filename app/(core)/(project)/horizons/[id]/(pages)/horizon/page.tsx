'use client';

import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { HorizonSidebar } from '../../../sidebar/main';
import { HorizonTabs, HorizonTabStage } from '../../../tabs/main';
import { HorizonsHorizonModals } from './modals/controller/main';
import { HorizonHorizonView } from './view/main';
import { HorizonsHorizonCore } from './view/main/main';
import { HorizonHorizonSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonHorizonView>
        <HorizonHorizonSidebar />
        <HorizonsHorizonCore />
      </HorizonHorizonView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <HorizonsHorizonModals>
      <DashboardContainer fullHeight>
        <HorizonSidebar />
        <DashboardBody>
          <HorizonTabs tab={HorizonTabStage.Horizon} />
          <DashboardContent>{children}</DashboardContent>
        </DashboardBody>
      </DashboardContainer>
    </HorizonsHorizonModals>
  );
}

export default PrivateAstralPage(Page);
