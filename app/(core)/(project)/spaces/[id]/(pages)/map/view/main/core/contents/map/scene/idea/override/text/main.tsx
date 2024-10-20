import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesMapTextStickyIdea } from './sticky/main';

export function SpacesMapTextIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
        <SpacesMapTextStickyIdea />
      )}
    </>
  );
}
