import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceReviewAddChapterModal } from '../../../../(modal)/add/chapter/main';
import SpaceReviewRowAdd from './add/main';
import { SpaceReviewRowContainer } from './container/main';
import { SpaceReviewRowElement } from './element/main';

export function SpaceReviewNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceReviewAddChapterModal />
      </ContextForOpenable.Provider>
      <SpaceReviewRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceReviewRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceReviewRowAdd
          onClick={() => {
            openableController.open();
          }}
        >
          Add Chapter
        </SpaceReviewRowAdd>
      </SpaceReviewRowContainer>
    </>
  );
}
