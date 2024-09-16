import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { CommonSidebarMinimisedContainer } from '../common/container/minimised/main';
import { CommonSidebarFriends } from '../common/friends/main';
import { ContextForCommonSidebar } from '../main';
import { CommonSidebarTopBack } from '../top/back/main';

export function CommonSidebarMinimised() {
  const context = useContext(ContextForCommonSidebar);

  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack
        href={context.backUrl || studioMap.studio.personal.link}
      />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <CommonSidebarFriends>
        {exampleFileElems.map((fileElem) => (
          <UserDisplayPictureElement fileElem={fileElem} />
        ))}
      </CommonSidebarFriends>
    </CommonSidebarMinimisedContainer>
  );
}
