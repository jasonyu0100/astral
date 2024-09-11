import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpacesSpaceActiveContainer } from './container/active/main';
import { SpacesSpaceInactiveContainer } from './container/inactive/main';
import { SpacesSpaceChapterActiveHeader } from './header/active/main';
import { SpacesSpaceChapterInactiveHeader } from './header/inactive/main';
import { SpacesSpaceSidebarChapterSceneList } from './scenes/main';
import { SpacesSpaceSidebarSceneAdd } from './scenes/scene/add/main';

export function SpacesSpaceSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpacesSpaceActiveContainer>
          <SpacesSpaceChapterActiveHeader />
          <SpacesSpaceSidebarChapterSceneList />
          <SpacesSpaceSidebarSceneAdd />
        </SpacesSpaceActiveContainer>
      ) : (
        <SpacesSpaceInactiveContainer>
          <SpacesSpaceChapterInactiveHeader />
        </SpacesSpaceInactiveContainer>
      )}
    </>
  );
}
