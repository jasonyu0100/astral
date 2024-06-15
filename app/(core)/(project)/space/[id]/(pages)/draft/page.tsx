'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/(controller)/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { createContext, useState } from 'react';
import { SpaceDraftView } from './view/main';

interface BoardContextObj {
  modalType: BoardModalType;
  updateModalType: (multiModalType: BoardModalType) => void;
}

export const BoardContext = createContext<BoardContextObj>(
  {} as BoardContextObj,
);

export enum BoardModalType {
  DEFAULT = 'DEFAULT',
  IDEA = 'IDEA',
  AUDIO = 'AUDIO',
  VISUAL = 'VISUAL',
  TEXT = 'TEXT',
}

function Page({ params }: { params: { id: string } }) {
  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const [modalType, changeModalType] = useState(BoardModalType.DEFAULT);

  const context: BoardContextObj = {
    modalType: modalType,
    updateModalType: (modalType) => changeModalType(modalType),
  };

  return (
    <BoardContext.Provider value={context}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneIdeaList.Provider value={ideaListController}>
              <SpaceDraftView />
            </ContextForSceneIdeaList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </BoardContext.Provider>
  );
}

export default isVerseAuth(Page);
