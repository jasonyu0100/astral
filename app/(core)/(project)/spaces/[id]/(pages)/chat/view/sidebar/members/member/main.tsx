import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesChat } from '../../../../controller/main';

export function SpacesChatSidebarMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const userController = useControllerForUserMain(spaceMemberObj.userId);
  const user = userController.state.obj;
  const spacesConversationController = useContext(ContextForSpacesChat);
  const selected =
    spacesConversationController.state.selectedUser.id === user?.id;

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
        <UserDisplayPictureElement fileElem={user?.dp} />
        <p className='font-bold text-slate-300'>
          {user?.displayName || 'Unknown'}
        </p>
      </GlassWindowContents>
      {selected && <GlassWindowPane glassFx={glassFx['glass-20']} />}
      {!selected && <GlassWindowPane glassFx={glassFx['glass-5']} />}
    </GlassWindowFrame>
  );
}
