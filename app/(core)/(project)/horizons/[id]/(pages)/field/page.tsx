'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTabs, HorizonTabStage } from '../../(tabs)/main';
import { HorizonsFieldView } from './view/main';
import { HorizonsFieldCore } from './view/main/main';
import { HorizonsFieldSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsFieldView>
        <HorizonsFieldSidebar />
        <HorizonsFieldCore />
      </HorizonsFieldView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised backUrl={explorerMap.explorer.projects.link} />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Field} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
