import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { FileElemVariant } from '@/(model)/elements/file/main';
import { FileAudioIdea } from './audio/main';
import { FileImageIdea } from './image/main';
import { FileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(SceneIdeaContext);

  return (
    <>
      {idea.file?.variant === FileElemVariant.AUDIO && <FileAudioIdea />}
      {idea.file?.variant === FileElemVariant.IMAGE && <FileImageIdea />}
      {idea.file?.variant === FileElemVariant.VIDEO && <FileVideoIdea />}
    </>
  );
}
