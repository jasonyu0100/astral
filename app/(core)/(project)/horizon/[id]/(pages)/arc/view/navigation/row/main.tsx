import { useControllerForOpenable } from '@/logic/contexts/openable/main';
import { HorizonArcRowContainer } from './container/main';
import { HorizonArcRowElement } from './element/main';

export function HorizonArcNavigationRow() {
  const openableController = useControllerForOpenable();

  return (
    <>
      <HorizonArcRowContainer>
        <HorizonArcRowElement index={0} />
        <HorizonArcRowElement index={0} />
        <HorizonArcRowElement index={0} />
        <HorizonArcRowElement index={0} />
        {/* {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <HorizonArcRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))} */}
      </HorizonArcRowContainer>
    </>
  );
}
