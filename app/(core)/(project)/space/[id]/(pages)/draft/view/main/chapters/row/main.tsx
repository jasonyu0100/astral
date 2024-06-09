import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import ChaptersAdd from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { DraftModalContext } from '@/(core)/(project)/space/[id]/(modals)/draft-modal/main';
import { ContextForSpaceChapterList } from '@/(model)/(controller)/space/chapter/list';

export function DraftChaptersRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <ChaptersRowContainer>
      {chapterListController.state.objs.map((chapter, index) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <ChapterContainer index={index} key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <ChaptersAdd onClick={() => addChapterModal.open()} />
    </ChaptersRowContainer>
  );
}
