import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapFileIdea } from './file/main';
import { SpaceMapTextIdea } from './text/main';
import { SpaceMapUrlIdea } from './url/main';

export function SpaceMapMovableIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && <SpaceMapFileIdea />}
      {ideaObj.variant === ElementVariant.TEXT && <SpaceMapTextIdea />}
      {ideaObj.variant === ElementVariant.URL && <SpaceMapUrlIdea />}
    </>
  );
}
