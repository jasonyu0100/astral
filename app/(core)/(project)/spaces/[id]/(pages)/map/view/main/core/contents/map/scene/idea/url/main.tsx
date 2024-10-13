import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function SpacesMapUrlIdea() {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <div className='relative h-full w-full'>
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
      {ideaObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
        <iframe
          src={ideaObj.urlElem?.url}
          style={{
            objectFit: 'contain',
            border: '0',
            width: '100%',
          }}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      )}
    </div>
  );
}
