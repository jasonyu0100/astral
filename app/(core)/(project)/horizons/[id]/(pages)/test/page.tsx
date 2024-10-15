'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonSidebar } from '../../../sidebar/main';
import { HorizonTabs, HorizonTabStage } from '../../../tabs/main';
import { HorizonsBoardView } from '../board/view/main';
import { HorizonsBoardCore } from '../board/view/main/main';
import { HorizonsBoardSidebar } from '../board/view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsBoardView>
        <HorizonsBoardSidebar />
        <HorizonsBoardCore />
      </HorizonsBoardView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <HorizonSidebar />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Board} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
