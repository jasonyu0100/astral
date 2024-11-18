import { homeMap } from '@/(core)/(dashboard)/home/map';
import { CommonSidebarTopBack } from '@/(core)/common/sidebar/top/back/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { glassFx } from '@/style/data';
import { SpaceSidebarMembersList } from './members/main';

export function SpacesSidebar() {
  return (
    <GlassWindowFrame className='flex h-full w-[4.5rem] flex-shrink-0 flex-col items-center p-[1rem]'>
      <GlassWindowContents className='relative flex h-full w-full flex-col'>
        <CommonSidebarTopBack href={homeMap.home.projects.link} />
        <HorizontalDivider className='my-[2rem] mb-[2rem]' />
        <SpaceSidebarMembersList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
