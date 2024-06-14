import SpaceBoardRowAdd from '@/(core)/(project)/space/[id]/(pages)/board/view/main/navigation/row/add/main';
import { SpaceBoardRowElement } from '@/(core)/(project)/space/[id]/(pages)/board/view/main/navigation/row/element/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceBoardAddSceneModal } from '../../../../(modal)/add/scene/main';
import { SpaceBoardRowContainer } from './container/main';

export function SpaceBoardNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceBoardAddSceneModal />
      </ContextForOpenable.Provider>
      <SpaceBoardRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceBoardRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceBoardRowAdd onClick={() => openableController.open()} />
      </SpaceBoardRowContainer>
    </>
  );
}
