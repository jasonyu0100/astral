import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpacesMapUrlIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <div className='relative h-full w-full overflow-hidden'>
      {ideaObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
        <iframe
          src={ideaObj.urlElem?.url}
          title='YouTube video player'
          className='h-full w-full'
          style={{
            objectFit: 'contain',
            border: '0',
          }}
          allowFullScreen
        />
      )}
    </div>
  );
}
