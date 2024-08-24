import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceProgressAddChapterModal } from '../../../../(modal)/add/chapter/main';
import SpaceProgressRowAdd from './add/main';
import { SpaceProgressRowContainer } from './container/main';
import { SpaceProgressRowElement } from './element/main';

export function SpaceProgressNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceProgressAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceProgressRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceProgressRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceProgressRowAdd onClick={() => openableController.open()}>
          Add Chapter
        </SpaceProgressRowAdd>
      </SpaceProgressRowContainer>
    </>
  );
}
