import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceIdeasAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceIdeasSidebarList } from './list/main';
import { SpaceIdeasSidebarSearch } from './search/main';

export function SpaceIdeasSidebar() {
  const commentOpenableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceIdeasAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceIdeasSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
        borderFx={borderFx['border-r']}
      >
        <SpaceIdeasSidebarSearch />
        <SpaceIdeasSidebarList />
      </GlassAreaContainer>
    </>
  );
}
