import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceSeaContainer } from './container/main';
import { SpaceSeaMain } from './main/main';
import { SpaceSeaSidebarEntry } from './sidebar/entry/main';
import { SpaceSeaSidebar } from './sidebar/main';

export function SpaceSeaShareView() {
  return (
    <SpaceSeaContainer>
      <SpaceSeaSidebar>
        <SpaceSeaSidebarEntry>Week 1</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 2</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 3</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 4</SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>Week 5</SpaceSeaSidebarEntry>
      </SpaceSeaSidebar>
      <SpaceSeaMain>
        <div className='flex flex-grow flex-row' style={{ height: '50%' }}>
          <GlassWindowFrame className='h-full w-[300px]'>
            <GlassWindowContents className='p-[2rem]'>
              <p className='font-bold text-white'>General progress</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']}></GlassWindowPane>
          </GlassWindowFrame>
          <GlassWindowFrame className='h-full w-[300px]'>
            <GlassWindowContents></GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']}></GlassWindowPane>
          </GlassWindowFrame>
          <GlassWindowFrame className='h-full w-[300px]'>
            <GlassWindowContents></GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']}></GlassWindowPane>
          </GlassWindowFrame>
        </div>
        {/* <MonthView /> */}
        {/* <SpaceSeaContribution />
          <SpaceSeaContribution />
          <SpaceSeaContribution />
          <SpaceSeaContribution /> */}
      </SpaceSeaMain>
    </SpaceSeaContainer>
  );
}
