import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpaceIdeaActiveContainer } from './container/active/main';
import { SpaceIdeaInactiveContainer } from './container/inactive/main';
import { SpaceIdeaChapterHeader } from './header/main';
import { SpaceIdeaSidebarChapterSceneList } from './scenes/main';
import { SpaceIdeaSidebarSceneAdd } from './scenes/scene/add/main';

export function SpaceIdeaSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceIdeaActiveContainer>
          <SpaceIdeaChapterHeader />
          <SpaceIdeaSidebarChapterSceneList />
          <SpaceIdeaSidebarSceneAdd />
        </SpaceIdeaActiveContainer>
      ) : (
        <SpaceIdeaInactiveContainer>
          <SpaceIdeaChapterHeader />
        </SpaceIdeaInactiveContainer>
      )}
    </>
  );
}
