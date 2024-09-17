'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { AstralSendIcon } from '@/icons/send/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTabs, HorizonTabStage } from '../../(tabs)/main';
import { HorizonHorizonView } from './view/main';
import { HorizonHorizonSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonHorizonView>
        <HorizonHorizonSidebar />
        <div className='h-full flex-grow overflow-hidden'>
          <div
            style={{ height: 'calc(100% - 8rem)' }}
            className='flex flex-col overflow-hidden p-[2rem]'
          ></div>
          <div className='flex h-[8rem] w-full flex-row items-center justify-between space-x-[2rem] p-[2rem] shadow-glow'>
            <GlassWindowFrame
              className='h-[4rem] w-full'
              roundedFx={roundedFx['rounded-full']}
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents className='flex items-center justify-center'>
                <input
                  className='h-full w-full bg-transparent px-[2rem] text-slate-300 outline-none'
                  placeholder='Post...'
                />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <div className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'>
              <AstralSendIcon />
            </div>
          </div>
        </div>
      </HorizonHorizonView>
    </ViewWrapper>
  );
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised backUrl={explorerMap.explorer.projects.link} />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Horizon} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
