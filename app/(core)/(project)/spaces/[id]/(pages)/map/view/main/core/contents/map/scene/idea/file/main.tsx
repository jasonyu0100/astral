import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesMapFileAudioIdea } from './audio/main';
import { SpacesMapFileImageIdea } from './image/main';
import { SpacesMapFileVideoIdea } from './video/main';

export function SpacesMapFileIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
        <SpacesMapFileImageIdea />
      )}
      {ideaObj.fileElem?.variant === FileElemVariant.VIDEO && (
        <SpacesMapFileVideoIdea />
      )}
      {ideaObj.fileElem?.variant === FileElemVariant.AUDIO && (
        <SpacesMapFileAudioIdea />
      )}
    </>
  );
}
