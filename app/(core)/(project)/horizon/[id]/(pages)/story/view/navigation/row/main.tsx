import HorizonStoryRowAdd from '@/(core)/(project)/space/[id]/(pages)/draft/view/main/navigation/row/add/main';
import { useControllerForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { HorizonStoryRowContainer } from './container/main';
import { HorizonStoryRowElement } from './element/main';

export function HorizonStoryNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      {/* <ContextForOpenable.Provider value={openableController}>
        <HorizonStoryAddChapterModal />
      </ContextForOpenable.Provider> */}
      <HorizonStoryRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <HorizonStoryRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <HorizonStoryRowAdd onClick={() => openableController.open()}>
          Add Chapter
        </HorizonStoryRowAdd>
      </HorizonStoryRowContainer>
    </>
  );
}
