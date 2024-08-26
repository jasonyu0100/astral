import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { glassFx } from '@/(style)/data';
import { SpaceReviewAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceReviewSidebarList } from './list/main';
import { SpaceReviewSidebarSearch } from './search/main';

export function SpaceReviewSidebar() {
  const commentOpenableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceReviewAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceReviewSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceReviewSidebarSearch />
        <SpaceReviewSidebarList />
      </GlassAreaContainer>
    </>
  );
}
