import SpaceSeaRowAdd from '@/(core)/(project)/space/[id]/(pages)/draft/view/main/navigation/row/add/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSeaAddChapterModal } from '../../../../(modal)/add/chapter/main';
import { SpaceSeaRowContainer } from './container/main';
import { SpaceSeaRowElement } from './element/main';

export function SpaceSeaNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSeaAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceSeaRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSeaRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceSeaRowAdd onClick={() => openableController.open()} />
      </SpaceSeaRowContainer>
    </>
  );
}
