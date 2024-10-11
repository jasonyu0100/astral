'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonSidebar } from '../../../sidebar/main';
import { HorizonTabs, HorizonTabStage } from '../../../tabs/main';
import {
  ContextForHorizonsArc,
  useControllerForHorizonsArc,
} from './controller/main';
import { HorizonArcView } from './view/main';

function Page() {
  return (
    <HorizonsArcWrapper>
      <HorizonArcView />
    </HorizonsArcWrapper>
  );
}

function HorizonsArcWrapper({ children }: { children: React.ReactNode }) {
  const horizonArcsController = useControllerForHorizonsArc();

  return (
    <ContextForHorizonsArc.Provider value={horizonArcsController}>
      <ViewWrapper>{children}</ViewWrapper>
    </ContextForHorizonsArc.Provider>
  );
}
function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <HorizonSidebar />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Arc} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
