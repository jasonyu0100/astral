import { DraftModalContext } from '@/(modals)/(process)/draft-modal/main';
import { useContext } from 'react';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';
import ChaptersAdd from '@/(cx)/(process)/space/[id]/(process-stages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(cx)/(process)/space/[id]/(process-stages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../(common)/chapters/row/main';

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
