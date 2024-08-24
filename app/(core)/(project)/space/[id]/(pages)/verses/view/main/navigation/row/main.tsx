import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceVersesAddChapterModal } from '../../../../(modal)/add/chapter/main';
import SpaceVersesRowAdd from './add/main';
import { SpaceVersesRowContainer } from './container/main';
import { SpaceVersesRowElement } from './element/main';

export function SpaceVersesNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceVersesAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceVersesRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceVersesRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceVersesRowAdd
          onClick={() => {
            openableController.open();
          }}
        >
          Add Chapter
        </SpaceVersesRowAdd>
      </SpaceVersesRowContainer>
    </>
  );
}
