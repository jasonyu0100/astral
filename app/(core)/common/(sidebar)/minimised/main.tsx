import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { CommonSidebarMinimisedContainer } from '../common/container/minimised/main';
import { ContextForCommonSidebar } from '../main';
import { CommonSidebarTopBack } from '../top/back/main';
import { CommonSidebarMinimisedFriendsWIP } from './friends/main';

export function CommonSidebarMinimised() {
  const context = useContext(ContextForCommonSidebar);

  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack
        href={context.backUrl || studioMap.studio.personal.link}
      />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <div className='h-full w-full overflow-hidden'>
        <CommonSidebarMinimisedFriendsWIP />
      </div>
    </CommonSidebarMinimisedContainer>
  );
}
