import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceStormHeaderTitle } from './title/main';

export function SpaceStormChapterHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <button
      onClick={() =>
        chaptersListController.actions.stateActions.select(chapter)
      }
    >
      <GlassAreaContainer
        name={SpaceStormChapterHeader.name}
        sizeFx='w-full pt-[1rem]'
        className={`flex items-center justify-between`}
      >
        <SpaceStormHeaderTitle />
      </GlassAreaContainer>
    </button>
  );
}
