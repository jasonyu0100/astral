'use client';

import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonSidebar } from '../../../sidebar/main';
import { HorizonTabs, HorizonTabStage } from '../../../tabs/main';
import { HorizonsPointView } from './view/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsPointView />
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <HorizonSidebar />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Point} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardContainer>
  );
}

export default protectedUnderAstralAuth(Page);
