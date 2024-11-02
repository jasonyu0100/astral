import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesProgressModals } from '../../../../modal/controller/main';
import SpacesProgressRowAdd from './add/main';
import { SpacesProgressRowContainer } from './container/main';
import { SpacesProgressRowElement } from './element/main';

export function SpacesProgressNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesProgressModalController = useContext(
    ContextForSpacesProgressModals,
  );

  return (
    <>
      <SpacesProgressRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesProgressRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesProgressRowAdd
          onClick={() =>
            spacesProgressModalController.addChapterController.open()
          }
        />
      </SpacesProgressRowContainer>
    </>
  );
}
