import SpaceDraftRowAdd from '@/(core)/(project)/space/[id]/(pages)/draft/view/main/navigation/row/add/main';
import { SpaceDraftRowElement } from '@/(core)/(project)/space/[id]/(pages)/draft/view/main/navigation/row/element/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceDraftAddSceneModal } from '../../../../(modal)/add/scene/main';
import { SpaceDraftRowContainer } from './container/main';

export function SpaceDraftNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceDraftAddSceneModal />
      </ContextForOpenable.Provider>
      <SpaceDraftRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceDraftRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceDraftRowAdd onClick={() => openableController.open()} />
      </SpaceDraftRowContainer>
    </>
  );
}
