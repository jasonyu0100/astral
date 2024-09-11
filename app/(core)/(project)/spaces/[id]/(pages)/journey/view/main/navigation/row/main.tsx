import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesJourneyModals } from '../../../../modal/controller/main';
import SpacesJourneyRowAdd from './add/main';
import { SpacesJourneyRowContainer } from './container/main';
import { SpacesJourneyRowElement } from './element/main';

export function SpacesJourneyNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpacesJourneyModals);

  return (
    <>
      <SpacesJourneyRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesJourneyRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesJourneyRowAdd
          onClick={() => modalController.addChapterController.open()}
        >
          Add Chapter
        </SpacesJourneyRowAdd>
      </SpacesJourneyRowContainer>
    </>
  );
}
