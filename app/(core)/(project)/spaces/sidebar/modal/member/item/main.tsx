import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { ContextForUserConnectionObj } from '@/server/model/user/connection/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesSidebarAddMember } from '../main';

export function SpacesSidebarAddMemberItem() {
  const connection = useContext(ContextForUserConnectionObj);
  const addMemberController = useContext(ContextForSpacesSidebarAddMember);
  const userController = useControllerForUserMain(connection.destinationId);
  const selected = addMemberController.state.memberIds.includes(
    userController.state.objId,
  );
  const index = useContext(ContextForIndexable);

  return (
    <div
      className='space-x-[1rem flex cursor-pointer flex-row items-center'
      onClick={() => {
        if (
          addMemberController.state.memberIds.includes(
            userController.state.objId,
          )
        ) {
          addMemberController.actions.updateMemberIds(
            addMemberController.state.memberIds.filter(
              (memberId) => memberId !== userController.state.obj.id,
            ),
          );
        } else {
          addMemberController.actions.updateMemberIds([
            ...addMemberController.state.memberIds,
            userController.state.objId,
          ]);
        }
      }}
    >
      <div
        className={ctwn(
          'flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-slate-300 font-bold text-white',
          {
            'bg-blue-500': selected,
          },
        )}
      >
        {index + 1}
      </div>
      <GlassWindowFrame
        roundedFx={roundedFx['rounded-full']}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex cursor-pointer flex-row items-center space-x-[1rem]'>
          <UserDisplayPictureElement fileElem={userController.state.obj.dp} />
          <p className='font-bold'>
            {userController.state.obj.displayName || 'Unknown'}
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
