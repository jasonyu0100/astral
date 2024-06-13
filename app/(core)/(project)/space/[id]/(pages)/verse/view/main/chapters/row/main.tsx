import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import ScenesAdd from '@/(core)/(project)/space/[id]/(pages)/board/view/main/scenes/(common)/row/add/main';
import { ElementContainer } from '@/(core)/(project)/space/[id]/(pages)/board/view/main/scenes/(common)/row/element/main';
import { ScenesRowContainer } from '../../../../../board/view/main/scenes/(common)/row/main';
import { VerseModalContext } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function VerseChaptersRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const { addChapterModal } = useContext(VerseModalContext);

  return (
    <ScenesRowContainer>
      {chapterListController.state.objs.map((chapter, index) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <ElementContainer index={index} key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <ScenesAdd onClick={() => addChapterModal.open()} />
    </ScenesRowContainer>
  );
}
