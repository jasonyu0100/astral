import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesObjectiveModals } from '../../../../modal/controller/main';
import SpacesObjectiveRowAdd from './add/main';
import { SpacesObjectiveRowContainer } from './container/main';
import { SpacesObjectiveRowElement } from './element/main';

export function SpacesObjectiveNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesObjectiveModalController = useContext(
    ContextForSpacesObjectiveModals,
  );

  return (
    <>
      <SpacesObjectiveRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesObjectiveRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesObjectiveRowAdd
          onClick={() =>
            spacesObjectiveModalController.addChapterController.open()
          }
        />
      </SpacesObjectiveRowContainer>
    </>
  );
}
