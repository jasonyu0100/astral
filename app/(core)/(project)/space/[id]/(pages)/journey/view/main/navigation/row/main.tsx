import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceJourneyModals } from '../../../../modal/controller/main';
import SpaceJourneyRowAdd from './add/main';
import { SpaceJourneyRowContainer } from './container/main';
import { SpaceJourneyRowElement } from './element/main';

export function SpaceJourneyNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceJourneyModals);

  return (
    <>
      <SpaceJourneyRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceJourneyRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceJourneyRowAdd
          onClick={() => modalController.addChapterController.open()}
        >
          Add Chapter
        </SpaceJourneyRowAdd>
      </SpaceJourneyRowContainer>
    </>
  );
}
