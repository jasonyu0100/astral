import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import SpaceFlightRowAdd from './add/main';
import { SpaceFlightRowContainer } from './container/main';
import { HorizonsHorizonRowElement } from './element/main';

export function HorizonsHorizonNavigationRow() {
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

        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <HorizonsHorizonRowElement />
        <SpaceFlightRowAdd onClick={() => {}}>Add Arc</SpaceFlightRowAdd>
      </SpaceFlightRowContainer>
    </>
  );
}
