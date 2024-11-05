import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesMissionModals } from '../../../../modal/controller/main';
import SpacesMissionRowAdd from './add/main';
import { SpacesMissionRowContainer } from './container/main';
import { SpacesMissionRowElement } from './element/main';

export function SpacesMissionNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesMissionModalController = useContext(
    ContextForSpacesMissionModals,
  );

  return (
    <>
      <SpacesMissionRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesMissionRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesMissionRowAdd
          onClick={() =>
            spacesMissionModalController.addChapterController.open()
          }
        />
      </SpacesMissionRowContainer>
    </>
  );
}
