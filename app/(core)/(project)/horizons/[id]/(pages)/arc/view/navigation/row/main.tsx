import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpaceFlightModals } from '../../../../modal/controller/main';
import SpaceFlightRowAdd from './add/main';
import { SpaceFlightRowContainer } from './container/main';
import { SpaceFlightRowElement } from './element/main';

export function SpaceFlightNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceFlightModals);

  return (
    <>
      <SpaceFlightRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpaceFlightRowElement />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpaceFlightRowAdd
          onClick={() => {
            modalController.addChapterController.open();
          }}
        >
          Add Chapter
        </SpaceFlightRowAdd>
      </SpaceFlightRowContainer>
    </>
  );
}
