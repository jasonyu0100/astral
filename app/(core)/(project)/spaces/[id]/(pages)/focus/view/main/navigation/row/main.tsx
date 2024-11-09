import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesFocusModals } from '../../../../modal/controller/main';
import SpacesFocusRowAdd from './add/main';
import { SpacesFocusRowContainer } from './container/main';
import { SpacesFocusRowElement } from './element/main';

export function SpacesFocusNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesFocusModalController = useContext(ContextForSpacesFocusModals);

  return (
    <>
      <SpacesFocusRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesFocusRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesFocusRowAdd
          onClick={() => spacesFocusModalController.addChapterController.open()}
        />
      </SpacesFocusRowContainer>
    </>
  );
}
