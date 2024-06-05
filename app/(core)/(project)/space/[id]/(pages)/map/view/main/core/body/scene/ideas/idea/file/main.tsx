import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { FileVariant } from '@/(model)/concept/file/main';
import { FileAudioIdea } from './audio/main';
import { FileImageIdea } from './image/main';
import { FileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(SceneIdeaContext);

  return (
    <>
      {idea.file?.variant === FileVariant.AUDIO && <FileAudioIdea />}
      {idea.file?.variant === FileVariant.IMAGE && <FileImageIdea />}
      {idea.file?.variant === FileVariant.VIDEO && <FileVideoIdea />}
    </>
  );
}
