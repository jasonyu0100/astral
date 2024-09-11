import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';
import SpaceFlightRowAdd from './add/main';
import { SpaceFlightRowContainer } from './container/main';
import { HorizonsArcRowElement } from './element/main';

export function HorizonsArcNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpaceFlightRowContainer>
        {/* {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpaceFlightRowElement />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))} */}

        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <HorizonsArcRowElement />
        <SpaceFlightRowAdd onClick={() => {}}>Add Arc</SpaceFlightRowAdd>
      </SpaceFlightRowContainer>
    </>
  );
}
