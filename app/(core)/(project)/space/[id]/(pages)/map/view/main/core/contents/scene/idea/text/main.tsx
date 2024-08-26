import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapTextBlockIdea } from './block/main';
import { SpaceMapTextLineIdea } from './line/main';
import { SpaceMapTextStickyIdea } from './sticky/main';

export function SpaceMapTextIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.textElem?.variant === TextElemVariant.LINE && (
        <SpaceMapTextLineIdea />
      )}
      {ideaObj.textElem?.variant === TextElemVariant.BLOCK && (
        <SpaceMapTextBlockIdea />
      )}
      {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
        <SpaceMapTextStickyIdea />
      )}
    </>
  );
}
