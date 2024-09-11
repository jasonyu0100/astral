import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpacesMapTextStickyIdea } from './sticky/main';

export function SpacesMapTextIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
        <SpacesMapTextStickyIdea />
      )}
    </>
  );
}
