import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';
import { SpacesLinkFileIdea } from './file/main';
import { SpacesLinkTextIdea } from './text/main';
import { SpacesLinkUrlIdea } from './url/main';

export function SpacesBoardTaskLinkIdea() {
  const ideaObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && <SpacesLinkFileIdea />}
      {ideaObj.variant === ElementVariant.TEXT && <SpacesLinkTextIdea />}
      {ideaObj.variant === ElementVariant.URL && <SpacesLinkUrlIdea />}
    </>
  );
}
