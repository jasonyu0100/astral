import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpacesBoardModals } from '../../../../modal/controller/main';
import SpacesBoardRowAdd from './add/main';
import { SpacesBoardRowContainer } from './container/main';
import { SpacesBoardRowElement } from './element/main';

export function SpacesBoardNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesBoardModalController = useContext(ContextForSpacesBoardModals);

  return (
    <>
      <SpacesBoardRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesBoardRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesBoardRowAdd
          onClick={() => spacesBoardModalController.addChapterController.open()}
        />
      </SpacesBoardRowContainer>
    </>
  );
}
