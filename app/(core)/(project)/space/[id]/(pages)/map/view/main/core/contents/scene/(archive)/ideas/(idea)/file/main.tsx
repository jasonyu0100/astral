import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapFileAudioIdea } from './audio/main';
import { SpaceMapFileImageIdea } from './image/main';
import { SpaceMapFileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {idea.fileElem?.variant === FileElemVariant.AUDIO && (
        <SpaceMapFileAudioIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.IMAGE && (
        <SpaceMapFileImageIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.VIDEO && (
        <SpaceMapFileVideoIdea />
      )}
    </>
  );
}
