import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../modal/controller/main';
import SpaceMapRowAdd from './add/main';
import { SpaceMapRowContainer } from './container/main';
import { SpaceMapRowElement } from './element/main';

export function SpaceMapNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <>
      <SpaceMapRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceMapRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceMapRowAdd
          onClick={() => modalController.addChapterController.open()}
        >
          Add Chapter
        </SpaceMapRowAdd>
      </SpaceMapRowContainer>
    </>
  );
}
