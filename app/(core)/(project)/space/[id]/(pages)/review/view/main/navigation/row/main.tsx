import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceReviewModals } from '../../../../modal/controller/main';
import SpaceReviewRowAdd from './add/main';
import { SpaceReviewRowContainer } from './container/main';
import { SpaceReviewRowElement } from './element/main';

export function SpaceReviewNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceReviewModals);

  return (
    <>
      <SpaceReviewRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceReviewRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceReviewRowAdd
          onClick={() => {
            modalController.addChapterController.open();
          }}
        >
          Add Chapter
        </SpaceReviewRowAdd>
      </SpaceReviewRowContainer>
    </>
  );
}
