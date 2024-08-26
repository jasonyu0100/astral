import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceMapAddChapterModal } from '../../../../(modal)/add/chapter/main';
import SpaceMapRowAdd from './add/main';
import { SpaceMapRowContainer } from './container/main';
import { SpaceMapRowElement } from './element/main';

export function SpaceMapNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapAddChapterModal />
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
