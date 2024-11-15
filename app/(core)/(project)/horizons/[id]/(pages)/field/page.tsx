'use client';

import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { HorizonSidebar } from '../../../sidebar/main';
import { HorizonTabs, HorizonTabStage } from '../../../tabs/main';
import { HorizonsFieldView } from './view/main';
import { HorizonsFieldSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsFieldView>
        <HorizonsFieldSidebar />
        {/* <HorizonsFieldCore /> */}
      </HorizonsFieldView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <HorizonSidebar />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Field} />
        <DashboardContent padding>{children}</DashboardContent>
      </DashboardBody>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
