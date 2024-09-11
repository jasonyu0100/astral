import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpacesMapFileIdea } from './file/main';
import { SpacesMapTextIdea } from './text/main';
import { SpacesMapUrlIdea } from './url/main';

export function SpacesMapMovableIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && <SpacesMapFileIdea />}
      {ideaObj.variant === ElementVariant.TEXT && <SpacesMapTextIdea />}
      {ideaObj.variant === ElementVariant.URL && <SpacesMapUrlIdea />}
    </>
  );
}
