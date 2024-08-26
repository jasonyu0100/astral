import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceProgressModals } from '../../../../modal/controller/main';
import SpaceProgressRowAdd from './add/main';
import { SpaceProgressRowContainer } from './container/main';
import { SpaceProgressRowElement } from './element/main';

export function SpaceProgressNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceProgressModals);

  return (
    <>
      <SpaceProgressRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceProgressRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceProgressRowAdd
          onClick={() => modalController.addChapterController.open()}
        >
          Add Chapter
        </SpaceProgressRowAdd>
      </SpaceProgressRowContainer>
    </>
  );
}
