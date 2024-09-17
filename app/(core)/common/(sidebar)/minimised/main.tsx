import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { CommonSidebarMinimisedContainer } from '../common/container/minimised/main';
import { ContextForCommonSidebar } from '../main';
import { CommonSidebarTopBack } from '../top/back/main';
import { CommonSidebarMinimisedFavoredList } from './favored/main';
import { CommonSidebarMinimisedMiscList } from './misc/main';

export function CommonSidebarMinimised() {
  const context = useContext(ContextForCommonSidebar);

  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack
        href={context.backUrl || studioMap.studio.personal.link}
      />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <CommonSidebarMinimisedFavoredList />
      <HorizontalDivider className='my-[2rem] mb-[2rem]' />
      <CommonSidebarMinimisedMiscList />
    </CommonSidebarMinimisedContainer>
  );
}
