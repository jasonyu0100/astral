import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { ContextForVerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceFlowAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceFlowSidebarAdd } from './add/main';
import { SpaceFlowSidebarComment } from './comment/main';

export function SpaceFlowSidebar() {
  const openableController = useControllerForOpenable();
  const commentListController = useContext(ContextForVerseCommentList);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceFlowSidebar.name}
        sizeFx='w-[300px] h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem] `}
        glassFx={glassFx['glass-5']}
        borderFx={borderFx['border-l']}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <SpaceFlowSidebarAdd onClick={openableController.open} />
            <HorizontalDivider />
            {commentListController.state.objs.map((comment) => (
              <ContextForVerseCommentObj.Provider value={comment}>
                <SpaceFlowSidebarComment>
                  <p className='text-xl font-bold text-slate-300'>Jason Yu</p>
                  <p className='font-bold text-slate-500'>{comment.message}</p>
                </SpaceFlowSidebarComment>
              </ContextForVerseCommentObj.Provider>
            ))}
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
