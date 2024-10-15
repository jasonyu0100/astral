import { ContextForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { FileElem } from '@/graphql/API';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useState } from 'react';
import { ContextForSpacesSidebarModals } from '../modal/controller/main';
import { SpaceSidebarMembersListMember } from './member/main';

export function SpaceSidebarMembersList() {
  const spacesSidebarModals = useContext(ContextForSpacesSidebarModals);
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  const [other, setOther] = useState<FileElem[]>([exampleFileElem]);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[2rem] overflow-auto rounded-full'>
      <GlassWindowFrame
        className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={() => {
            spacesSidebarModals.addMemberController.open();
          }}
        >
          <AstralAddIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      {other.map((fileElem) => (
        <div>
          <UserDisplayPictureElement fileElem={fileElem} />
        </div>
      ))}
      {spaceMemberListController.state.objs.map((obj) => (
        <ContextForSpaceMemberObj.Provider value={obj}>
          <SpaceSidebarMembersListMember />
        </ContextForSpaceMemberObj.Provider>
      ))}
    </div>
  );
}
