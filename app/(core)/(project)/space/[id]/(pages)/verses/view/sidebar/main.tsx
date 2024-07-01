import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { glassFx } from '@/(style)/data';
import { SpaceVersesAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceVersesSidebarList } from './list/main';
import { SpaceVersesSidebarSearch } from './search/main';

export function SpaceVersesSidebar() {
  const commentOpenableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceVersesAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceVersesSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceVersesSidebarSearch />
        <SpaceVersesSidebarList />
      </GlassAreaContainer>
    </>
  );
}
