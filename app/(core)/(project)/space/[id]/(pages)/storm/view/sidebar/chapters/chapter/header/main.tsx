import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { StormChapterTitle } from './title/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function StormChapterHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <button
      onClick={() =>
        chaptersListController.actions.stateActions.select(chapter)
      }
    >
      <GlassAreaContainer
        name={StormChapterHeader.name}
        sizeFx='w-full py-[0.5rem]'
        className={`flex items-center justify-between`}
      >
        <StormChapterTitle />
      </GlassAreaContainer>
    </button>
  );
}
