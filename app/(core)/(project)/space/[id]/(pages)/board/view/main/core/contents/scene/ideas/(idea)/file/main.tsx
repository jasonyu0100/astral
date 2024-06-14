import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceBoardFileAudioIdea } from './audio/main';
import { SpaceBoardFileImageIdea } from './image/main';
import { SpaceBoardFileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {idea.fileElem?.variant === FileElemVariant.AUDIO && (
        <SpaceBoardFileAudioIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.IMAGE && (
        <SpaceBoardFileImageIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.VIDEO && (
        <SpaceBoardFileVideoIdea />
      )}
    </>
  );
}
