import { useControllerForOpenable } from '@/logic/contexts/openable/main';
import { HorizonBoardRowContainer } from './container/main';
import { HorizonBoardRowElement } from './element/main';

export function HorizonBoardNavigationRow() {
  const openableController = useControllerForOpenable();

  return (
    <>
      <HorizonBoardRowContainer>
        <HorizonBoardRowElement index={0} />
        <HorizonBoardRowElement index={0} />
        <HorizonBoardRowElement index={0} />
        <HorizonBoardRowElement index={0} />
        {/* {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <HorizonBoardRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))} */}
      </HorizonBoardRowContainer>
    </>
  );
}
