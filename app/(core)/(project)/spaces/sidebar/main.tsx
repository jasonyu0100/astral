import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { CommonSidebarTopBack } from '@/(core)/common/(sidebar)/top/back/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { SpaceSidebarMembersList } from './members/main';

export function SpaceSidebar() {
  return (
    <GlassWindowFrame className='flex h-full w-[4.5rem] flex-shrink-0 flex-col items-center p-[1rem]'>
      <GlassWindowContents className='relative flex h-full w-full flex-col'>
        <CommonSidebarTopBack href={studioMap.studio.personal.link} />
        <HorizontalDivider className='my-[2rem] mb-[2rem]' />
        <SpaceSidebarMembersList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
