import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceChatHeaderTitle } from './title/main';

export function SpaceChatChapterHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <button
      onClick={() =>
        chaptersListController.actions.stateActions.select(chapter)
      }
    >
      <GlassAreaContainer
        name={SpaceChatChapterHeader.name}
        sizeFx='w-full pt-[1rem]'
        className={`flex items-center justify-between`}
      >
        <SpaceChatHeaderTitle />
      </GlassAreaContainer>
    </button>
  );
}
