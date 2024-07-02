import { ElementVariant } from '@/(server)/(model)/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapTextIdea } from '../(archive)/ideas/(idea)/note/main';
import { SpaceMapFileIdea } from './file/main';

export function SpaceMapMovableIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && <SpaceMapFileIdea />}
      {ideaObj.variant === ElementVariant.TEXT && <SpaceMapTextIdea />}
    </>
  );
}
