import { useContext } from 'react';
import { ChapterContext } from '@/(lgx)/internal/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import ChaptersAdd from '@/(cx)/(studio)/space/[id]/(process-stages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(cx)/(studio)/space/[id]/(process-stages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { FlowModalContext } from '@/(cx)/(studio)/(modals)/flow-modal/main';

export function FlowChaptersRow() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(FlowModalContext);

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
