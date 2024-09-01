import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpaceChatActiveContainer } from './container/active/main';
import { SpaceChatInactiveContainer } from './container/inactive/main';
import { SpaceChatChapterActiveHeader } from './header/active/main';
import { SpaceChatChapterInactiveHeader } from './header/inactive/main';
import { SpaceChatSidebarChapterSceneList } from './scenes/main';
import { SpaceChatSidebarSceneAdd } from './scenes/scene/add/main';

export function SpaceChatSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceChatActiveContainer>
          <SpaceChatChapterActiveHeader />
          <SpaceChatSidebarChapterSceneList />
          <SpaceChatSidebarSceneAdd />
        </SpaceChatActiveContainer>
      ) : (
        <SpaceChatInactiveContainer>
          <SpaceChatChapterInactiveHeader />
        </SpaceChatInactiveContainer>
      )}
    </>
  );
}
