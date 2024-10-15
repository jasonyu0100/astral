import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';
import { SpacesLinkTextStickyIdea } from './sticky/main';

export function SpacesLinkTextIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
        <SpacesLinkTextStickyIdea />
      )}
    </>
  );
}
