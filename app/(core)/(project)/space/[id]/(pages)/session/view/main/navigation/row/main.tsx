import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { SpaceSessionAddChapterModal } from '../../../../modal/add/chapter/main';
import SpaceSessionRowAdd from './add/main';
import { SpaceSessionRowContainer } from './container/main';
import { SpaceSessionRowElement } from './element/main';

export function SpaceSessionNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceSessionRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSessionRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceSessionRowAdd onClick={() => openableController.open()}>
          Add Chapter
        </SpaceSessionRowAdd>
      </SpaceSessionRowContainer>
    </>
  );
}
