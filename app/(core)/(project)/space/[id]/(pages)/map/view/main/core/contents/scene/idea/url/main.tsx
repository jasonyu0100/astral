import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapUrlIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {ideaObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={ideaObj.urlElem?.url}
          title='YouTube video player'
        />
      )}
    </>
  );
}
