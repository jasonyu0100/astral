import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceDraftsAddChapterModal } from '../../../../(modal)/add/chapter/main';
import { SpaceDraftsRowContainer } from './container/main';
import { SpaceDraftsRowElement } from './element/main';

export function SpaceDraftsNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceDraftsAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceDraftsRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceDraftsRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </SpaceDraftsRowContainer>
    </>
  );
}
