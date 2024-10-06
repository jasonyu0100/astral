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
import { HorizonsFieldCreateSpace } from './view/create/main';
import { HorizonsFieldKanban } from './view/kanban/main';
import { HorizonsFieldView } from './view/main';
import { HorizonsFieldSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonsFieldView>
        <HorizonsFieldSidebar />
        <div className='flex h-full w-full flex-col overflow-hidden'>
          <div
            className='relative w-full'
            style={{ height: 'calc(100% - 8rem)' }}
          >
            <ImageBackground />
            <AbsoluteHolder>
              <HorizonsFieldKanban />
            </AbsoluteHolder>
          </div>
          <HorizonsFieldCreateSpace />
        </div>
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
