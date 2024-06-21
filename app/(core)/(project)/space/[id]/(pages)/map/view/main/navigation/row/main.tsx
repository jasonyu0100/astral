import SpaceMapRowAdd from '@/(core)/(project)/space/[id]/(pages)/map/view/main/navigation/row/add/main';
import { SpaceMapRowElement } from '@/(core)/(project)/space/[id]/(pages)/map/view/main/navigation/row/element/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceMapAddSceneModal } from '../../../../(modal)/add/scene/main';
import { SpaceMapRowContainer } from './container/main';

export function SpaceMapNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapAddSceneModal />
      </ContextForOpenable.Provider>
      <SpaceMapRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceMapRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceMapRowAdd onClick={() => openableController.open()}>
          Add Chapter
        </SpaceMapRowAdd>
      </SpaceMapRowContainer>
    </>
  );
}
