import { useContext } from 'react';
import { ChapterContext } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
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
        <ChapterContext.Provider value={chapter} key={chapter.id}>
          <ChapterContainer index={index} key={chapter.id} />
        </ChapterContext.Provider>
      ))}
      <ChaptersAdd onClick={() => addChapterModal.open()} />
    </ChaptersRowContainer>
  );
}
