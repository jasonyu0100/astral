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
import { SpaceVerseAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceVerseAddVerseModal } from '../../(modal)/add/verse/main';
import { SpaceVerseSidebarAddComment } from './add/comment/main';
import { SpaceVerseSidebarAddVerse } from './add/verse/main';
import { SpaceVerseSidebarComment } from './comment/main';

export function SpaceVerseSidebar() {
  const commentOpenableController = useControllerForOpenable();
  const verseOpenableController = useControllerForOpenable();
  const commentListController = useContext(ContextForVerseCommentList);

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceVerseAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={verseOpenableController}>
        <SpaceVerseAddVerseModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceVerseSidebar.name}
        sizeFx='w-[300px] h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem] `}
        glassFx={glassFx['glass-5']}
        borderFx={borderFx['border-l']}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <SpaceVerseSidebarAddVerse onClick={verseOpenableController.open} />
            <HorizontalDivider />
            {commentListController.state.objs.map((comment) => (
              <ContextForVerseCommentObj.Provider value={comment}>
                <SpaceVerseSidebarComment></SpaceVerseSidebarComment>
              </ContextForVerseCommentObj.Provider>
            ))}
            <SpaceVerseSidebarAddComment
              onClick={commentOpenableController.open}
            />
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
