import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { glassFx, roundedFx } from '@/style/data';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesConversation } from '../../../../controller/main';

export function SpacesConversationSidebarMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const userController = useControllerForUserMain(spaceMemberObj.userId);
  const user = userController.state.obj;
  const spacesConversationController = useContext(ContextForSpacesConversation);
  const selected =
    spacesConversationController.state.selectedUser.id === user.id;

  return (
    <GlassWindowFrame roundedFx={roundedFx['rounded-full']} className='w-full'>
      <GlassWindowContents
        className={ctwn(
          'flex cursor-pointer items-center space-x-[1rem] p-[1rem]',
        )}
        onClick={() => {
          spacesConversationController.actions.updateSelectedUser(user);
        }}
      >
        <UserDisplayPictureElement fileElem={user.dp} />
        <p className='font-bold text-slate-300'>
          {user.fname} {user.lname}
        </p>
      </GlassWindowContents>
      {selected && <GlassWindowPane glassFx={glassFx['glass-20']} />}
      {!selected && <GlassWindowPane glassFx={glassFx['glass-5']} />}
    </GlassWindowFrame>
  );
}
