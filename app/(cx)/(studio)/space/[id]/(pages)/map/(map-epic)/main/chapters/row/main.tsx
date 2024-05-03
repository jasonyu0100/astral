import { MapModalContext } from '@/(cx)/(studio)/(modals)/map-modal/main';
import { useContext } from 'react';
import { ChapterContext } from '@/(lgx)/internal/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import ChaptersAdd from '@/(cx)/(studio)/space/[id]/(process-stages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(cx)/(studio)/space/[id]/(process-stages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';

export function MapChaptersRow() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(MapModalContext);

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
