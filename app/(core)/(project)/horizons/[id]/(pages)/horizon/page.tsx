'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTabs, HorizonTabStage } from '../../(tabs)/main';
import { HorizonsHorizonModals } from './modals/controller/main';
import { HorizonsHorizonMain } from './view/core/main';
import { HorizonsHorizonSchedulePost } from './view/core/schedule/main';
import { HorizonHorizonView } from './view/main';
import { HorizonHorizonSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonHorizonView>
        <HorizonHorizonSidebar />
        <div className='h-full flex-grow overflow-hidden'>
          <HorizonsHorizonMain />
          <HorizonsHorizonSchedulePost />
          {/* <HorizonsHorizonNavigation /> */}
        </div>
      </HorizonHorizonView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <HorizonsHorizonModals>
      <DashboardController fullHeight>
        <CommonSidebar minimised backUrl={explorerMap.explorer.projects.link} />
        <DashboardBody>
          <HorizonTabs tab={HorizonTabStage.Horizon} />
          <DashboardContent>{children}</DashboardContent>
        </DashboardBody>
      </DashboardController>
    </HorizonsHorizonModals>
  );
}

export default protectedUnderAstralAuth(Page);
