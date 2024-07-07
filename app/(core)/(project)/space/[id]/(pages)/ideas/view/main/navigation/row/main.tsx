import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceIdeasAddChapterModal } from '../../../../(modal)/add/chapter/main';
import { SpaceIdeasRowContainer } from './container/main';
import { SpaceIdeasRowElement } from './element/main';

export function SpaceIdeasNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceIdeasAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceIdeasRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceIdeasRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </SpaceIdeasRowContainer>
    </>
  );
}
