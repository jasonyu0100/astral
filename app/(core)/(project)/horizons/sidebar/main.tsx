import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebarMinimisedContainer } from '@/(core)/common/(sidebar)/common/container/minimised/main';
import { CommonSidebarTopBack } from '@/(core)/common/(sidebar)/top/back/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { HorizonsSidebarFavoredList } from './groups/main';
import { HorizonsSidebarMiscList } from './members/main';

export function HorizonSidebar() {
  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack href={explorerMap.explorer.projects.link} />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <HorizonsSidebarFavoredList />
      <HorizontalDivider className='my-[2rem] mb-[2rem]' />
      <HorizonsSidebarMiscList />
    </CommonSidebarMinimisedContainer>
  );
}
