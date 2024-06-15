import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceDraftFileAudioIdea } from './audio/main';
import { SpaceDraftFileImageIdea } from './image/main';
import { SpaceDraftFileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {idea.fileElem?.variant === FileElemVariant.AUDIO && (
        <SpaceDraftFileAudioIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.IMAGE && (
        <SpaceDraftFileImageIdea />
      )}
      {idea.fileElem?.variant === FileElemVariant.VIDEO && (
        <SpaceDraftFileVideoIdea />
      )}
    </>
  );
}
