import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import ChaptersAdd from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { DraftModalContext } from '@/(core)/(project)/space/[id]/(modals)/draft-modal/main';

export function DraftChaptersRow() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <ChaptersRowContainer>
      {chaptersHandler.chapters.map((chapter, index) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <ChapterContainer index={index} key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <ChaptersAdd onClick={() => addChapterModal.open()} />
    </ChaptersRowContainer>
  );
}
