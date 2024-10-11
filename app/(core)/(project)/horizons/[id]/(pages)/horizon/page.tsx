'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
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
      <DashboardController fullHeight>
        <HorizonSidebar />
        <DashboardBody>
          <HorizonTabs tab={HorizonTabStage.Horizon} />
          <DashboardContent>{children}</DashboardContent>
        </DashboardBody>
      </DashboardController>
    </HorizonsHorizonModals>
  );
}

export default protectedUnderAstralAuth(Page);
