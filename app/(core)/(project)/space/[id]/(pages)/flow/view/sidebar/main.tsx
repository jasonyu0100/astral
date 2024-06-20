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
import { SpaceFlowAddVerseModal } from '../../(modal)/add/verse/main';
import { SpaceFlowSidebarAddComment } from './add/comment/main';
import { SpaceFlowSidebarAddVerse } from './add/verse/main';
import { SpaceFlowSidebarComment } from './comment/main';

export function SpaceFlowSidebar() {
  const commentOpenableController = useControllerForOpenable();
  const verseOpenableController = useControllerForOpenable();
  const commentListController = useContext(ContextForVerseCommentList);

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceFlowAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={verseOpenableController}>
        <SpaceFlowAddVerseModal />
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
            <SpaceFlowSidebarAddVerse onClick={verseOpenableController.open} />
            <HorizontalDivider />
            {commentListController.state.objs.map((comment) => (
              <ContextForVerseCommentObj.Provider value={comment}>
                <SpaceFlowSidebarComment></SpaceFlowSidebarComment>
              </ContextForVerseCommentObj.Provider>
            ))}
            <SpaceFlowSidebarAddComment
              onClick={commentOpenableController.open}
            />
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
