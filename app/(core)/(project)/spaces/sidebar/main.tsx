import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { CommonSidebarMinimisedContainer } from '@/(core)/common/(sidebar)/common/container/minimised/main';
import { CommonSidebarTopBack } from '@/(core)/common/(sidebar)/top/back/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { SpaceSidebarAgentsList } from './agents/main';
import { SpaceSidebarMembersList } from './members/main';

export function SpaceSidebar() {
  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack href={studioMap.studio.personal.link} />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <SpaceSidebarAgentsList />
      <HorizontalDivider className='my-[2rem] mb-[2rem]' />
      <SpaceSidebarMembersList />
    </CommonSidebarMinimisedContainer>
  );
}
