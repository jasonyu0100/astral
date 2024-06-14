import SpaceVerseRowAdd from '@/(core)/(project)/space/[id]/(pages)/board/view/main/navigation/row/add/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceVerseAddChapterModal } from '../../../../(modal)/add/chapter/main';
import { SpaceVerseRowContainer } from './container/main';
import { SpaceVerseRowElement } from './element/main';

export function SpaceVerseNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceVerseAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceVerseRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceVerseRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceVerseRowAdd onClick={() => openableController.open()} />
      </SpaceVerseRowContainer>
    </>
  );
}
