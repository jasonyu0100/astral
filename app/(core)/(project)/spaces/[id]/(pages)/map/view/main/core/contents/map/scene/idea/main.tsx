import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesMapFileIdea } from './file/main';
import { SpacesMapTextIdea } from './text/main';
import { SpacesMapUrlIdea } from './url/main';

export function SpacesMapMovableIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && <SpacesMapFileIdea />}
      {ideaObj.variant === ElementVariant.TEXT && <SpacesMapTextIdea />}
      {ideaObj.variant === ElementVariant.URL && <SpacesMapUrlIdea />}
    </>
  );
}
