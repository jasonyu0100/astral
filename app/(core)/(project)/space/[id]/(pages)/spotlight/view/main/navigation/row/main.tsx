import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceSpotlightModals } from '../../../../modal/controller/main';
import SpaceSpotlightRowAdd from './add/main';
import { SpaceSpotlightRowContainer } from './container/main';
import { SpaceSpotlightRowElement } from './element/main';

export function SpaceSpotlightNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceSpotlightModals);

  return (
    <>
      <SpaceSpotlightRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSpotlightRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceSpotlightRowAdd
          onClick={() => {
            modalController.addChapterController.open();
          }}
        >
          Add Chapter
        </SpaceSpotlightRowAdd>
      </SpaceSpotlightRowContainer>
    </>
  );
}
