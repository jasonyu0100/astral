import SpaceFlowRowAdd from '@/(core)/(project)/space/[id]/(pages)/draft/view/main/navigation/row/add/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceFlowAddChapterModal } from '../../../../(modal)/add/chapter/main';
import { SpaceFlowRowContainer } from './container/main';
import { SpaceFlowRowElement } from './element/main';

export function SpaceFlowNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceFlowRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceFlowRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceFlowRowAdd onClick={() => openableController.open()}>
          Add Chapter
        </SpaceFlowRowAdd>
      </SpaceFlowRowContainer>
    </>
  );
}
