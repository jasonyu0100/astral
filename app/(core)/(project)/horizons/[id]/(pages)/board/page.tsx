'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTabs, HorizonTabStage } from '../../(tabs)/main';
import { HorizonsBoardCreateSpace } from './view/create/main';
import { HorizonsBoardKanban } from './view/kanban/main';
import { HorizonsBoardView } from './view/main';
import { HorizonsBoardSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsBoardView>
        <div className='flex h-full w-full flex-col overflow-hidden'>
          <div
            className='relative w-full'
            style={{ height: 'calc(100% - 8rem)' }}
          >
            <ImageBackground />
            <AbsoluteHolder>
              <HorizonsBoardKanban />
            </AbsoluteHolder>
          </div>
          <HorizonsBoardCreateSpace />
        </div>
        <HorizonsBoardSidebar />
      </HorizonsBoardView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised backUrl={explorerMap.explorer.projects.link} />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Board} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
