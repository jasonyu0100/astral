import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesFlightModals } from '../../../../modal/controller/main';
import SpacesFlightRowAdd from './add/main';
import { SpacesFlightRowContainer } from './container/main';
import { SpacesFlightRowElement } from './element/main';

export function SpacesFlightNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpacesFlightModals);

  return (
    <>
      <SpacesFlightRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesFlightRowElement />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesFlightRowAdd
          onClick={() => {
            modalController.addChapterController.open();
          }}
        >
          Add Chapter
        </SpacesFlightRowAdd>
      </SpacesFlightRowContainer>
    </>
  );
}
