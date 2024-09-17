import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpacesSpaceActiveMain } from './active/main';
import { SpacesSpaceInactiveMain } from './inactive/main';

export function SpacesSpaceSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>{active ? <SpacesSpaceActiveMain /> : <SpacesSpaceInactiveMain />}</>
  );
}
