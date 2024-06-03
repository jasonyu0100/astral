import { useContext } from 'react';
import { IdeaContext } from '@/(model)/map/part/idea/main';
import { FileVariant } from '@/(model)/resource/file/main';
import { FileAudioIdea } from './audio/main';
import { FileImageIdea } from './image/main';
import { FileVideoIdea } from './video/main';

export function FileIdea() {
  const idea = useContext(IdeaContext);

  return (
    <>
      {idea.file?.variant === FileVariant.AUDIO && <FileAudioIdea />}
      {idea.file?.variant === FileVariant.IMAGE && <FileImageIdea />}
      {idea.file?.variant === FileVariant.VIDEO && <FileVideoIdea />}
    </>
  );
}
