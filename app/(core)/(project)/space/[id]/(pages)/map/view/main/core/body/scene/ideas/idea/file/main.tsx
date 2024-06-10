import { useContext } from 'react';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { FileAudioIdea } from './audio/main';
import { FileImageIdea } from './image/main';
import { FileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {idea.fileElem?.variant === FileElemVariant.AUDIO && <FileAudioIdea />}
      {idea.fileElem?.variant === FileElemVariant.IMAGE && <FileImageIdea />}
      {idea.fileElem?.variant === FileElemVariant.VIDEO && <FileVideoIdea />}
    </>
  );
}
