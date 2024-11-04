import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesDirectionModals } from '../../../../modal/controller/main';
import SpacesDirectionRowAdd from './add/main';
import { SpacesDirectionRowContainer } from './container/main';
import { SpacesDirectionRowElement } from './element/main';

export function SpacesDirectionNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesDirectionModalController = useContext(
    ContextForSpacesDirectionModals,
  );

  return (
    <>
      <SpacesDirectionRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesDirectionRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesDirectionRowAdd
          onClick={() =>
            spacesDirectionModalController.addChapterController.open()
          }
        />
      </SpacesDirectionRowContainer>
    </>
  );
}
