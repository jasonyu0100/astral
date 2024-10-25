import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesViewTextStickyIdea } from './sticky/main';

export function SpacesViewTextIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
        <SpacesViewTextStickyIdea />
      )}
    </>
  );
}
