import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesWorkModals } from '../../../../modal/controller/main';
import SpacesWorkRowAdd from './add/main';
import { SpacesWorkRowContainer } from './container/main';
import { SpacesWorkRowElement } from './element/main';

export function SpacesWorkNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesWorkModalController = useContext(ContextForSpacesWorkModals);

  return (
    <>
      <SpacesWorkRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesWorkRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesWorkRowAdd
          onClick={() => spacesWorkModalController.addChapterController.open()}
        />
      </SpacesWorkRowContainer>
    </>
  );
}
