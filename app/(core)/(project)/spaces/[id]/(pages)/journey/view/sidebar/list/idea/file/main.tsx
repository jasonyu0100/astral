import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';
import { SpacesLinkFileAudioIdea } from './audio/main';
import { SpacesLinkFileImageIdea } from './image/main';
import { SpacesLinkFileVideoIdea } from './video/main';

export function SpacesLinkFileIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
        <SpacesLinkFileImageIdea />
      )}
      {ideaObj.fileElem?.variant === FileElemVariant.VIDEO && (
        <SpacesLinkFileVideoIdea />
      )}
      {ideaObj.fileElem?.variant === FileElemVariant.AUDIO && (
        <SpacesLinkFileAudioIdea />
      )}
    </>
  );
}
