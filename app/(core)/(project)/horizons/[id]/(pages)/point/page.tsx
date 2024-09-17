'use client';

import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import { AstralAttachmentIcon } from '@/icons/attachment/main';
import { AstralSendIcon } from '@/icons/send/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTabs, HorizonTabStage } from '../../(tabs)/main';
import { HorizonPointView } from './view/main';
import { HorizonPointSidebar } from './view/sidebar/main';

function Page() {
  return (
    <ViewWrapper>
      <HorizonPointView>
        <HorizonPointSidebar />
        <div className='h-full w-full overflow-hidden'>
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
          <div
            className='h-full flex-grow overflow-auto p-[2rem]'
            style={{ height: 'calc(100% - 8rem)' }}
          >
            <div className='grid grid-rows-2 gap-[2rem]'>
              <div className='grid grid-cols-2 gap-[2rem]'>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowContents className='flex w-full items-center justify-center'>
                    <GlassWindowFrame
                      className='h-[5rem] w-[5rem]'
                      roundedFx={roundedFx['rounded-full']}
                    >
                      <GlassWindowContents className='flex h-full w-full items-center justify-center'>
                        <AstralAttachmentIcon />
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-20']} />
                    </GlassWindowFrame>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowContents className='grid w-full grid-cols-2'>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowPane glassFx={glassFx['glass-10']} />
                    </GlassWindowFrame>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowContents className='flex w-full items-center justify-center'>
                        <GlassWindowFrame
                          className='h-[5rem] w-[5rem]'
                          roundedFx={roundedFx['rounded-full']}
                        >
                          <GlassWindowContents className='flex h-full w-full items-center justify-center'>
                            <AstralAttachmentIcon />
                          </GlassWindowContents>
                          <GlassWindowPane glassFx={glassFx['glass-20']} />
                        </GlassWindowFrame>
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
              </div>
              <div className='grid grid-cols-2 gap-[2rem]'>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-inverse-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-inverse-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowContents className='grid w-full grid-cols-2'>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowPane glassFx={glassFx['glass-10']} />
                    </GlassWindowFrame>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowContents className='flex w-full items-center justify-center'>
                        <GlassWindowFrame
                          className='h-[5rem] w-[5rem]'
                          roundedFx={roundedFx['rounded-full']}
                        >
                          <GlassWindowContents className='flex h-full w-full items-center justify-center'>
                            <AstralAttachmentIcon />
                          </GlassWindowContents>
                          <GlassWindowPane glassFx={glassFx['glass-20']} />
                        </GlassWindowFrame>
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
              </div>
              <div className='grid grid-cols-2 gap-[2rem]'>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
              </div>
              <div className='grid grid-cols-2 gap-[2rem]'>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-inverse-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  className='aspect-[16/9] w-full'
                  roundedFx={roundedFx['rounded-inverse-container']}
                  borderFx={borderFx['border-all']}
                >
                  <GlassWindowContents className='grid w-full grid-cols-2'>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowPane glassFx={glassFx['glass-10']} />
                    </GlassWindowFrame>
                    <GlassWindowFrame
                      className='h-full'
                      borderFx={borderFx['border-all']}
                    >
                      <GlassWindowContents className='flex w-full items-center justify-center'>
                        <GlassWindowFrame
                          className='h-[5rem] w-[5rem]'
                          roundedFx={roundedFx['rounded-full']}
                        >
                          <GlassWindowContents className='flex h-full w-full items-center justify-center'>
                            <AstralAttachmentIcon />
                          </GlassWindowContents>
                          <GlassWindowPane glassFx={glassFx['glass-20']} />
                        </GlassWindowFrame>
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
              </div>
            </div>
          </div>
        </div>
      </HorizonPointView>
    </ViewWrapper>
  );
}

{
  /* What is the point? */
}

function ViewWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised backUrl={explorerMap.explorer.projects.link} />
      <DashboardBody>
        <HorizonTabs tab={HorizonTabStage.Point} />
        <DashboardContent>{children}</DashboardContent>
      </DashboardBody>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
