import { FileElementVariant } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { TextElementVariant } from '@/architecture/model/elements/text/main';
import { UrlElementVariant } from '@/architecture/model/elements/url/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { useContext } from 'react';
import { ElementArticle } from '../common/article/main';
import { ElementAudioSquare } from '../common/audio/main';
import { ElementImage } from '../common/image/main';
import { ElementPdf } from '../common/pdf/main';
import { ElementSpotify } from '../common/spotify/main';
import { ElementSticky } from '../common/sticky/main';
import { ElementVideo } from '../common/video/main';
import { ElementWebsite } from '../common/website/main';
import { ElementYouTube } from '../common/youtube/main';

export function ElementIdea({
  textOveride,
  audioOveride,
  urlOveride,
}: {
  textOveride?: any;
  audioOveride?: any;
  urlOveride?: any;
}) {
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <>
      {ideaObj.variant === ElementVariant.FILE && (
        <>
          {ideaObj.fileElem?.variant === FileElementVariant.IMAGE && (
            <ElementImage src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElementVariant.VIDEO && (
            <ElementVideo src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElementVariant.AUDIO && (
            <ElementAudioSquare src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElementVariant.PDF && (
            <ElementPdf src={ideaObj.fileElem.src} />
          )}
        </>
      )}
      {ideaObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {ideaObj.textElem?.variant === TextElementVariant.STICKY && (
                <ElementSticky text={ideaObj.textElem.text} />
              )}
              {ideaObj.textElem?.variant === TextElementVariant.ARTICLE && (
                <ElementArticle text={ideaObj.textElem.text} />
              )}
            </>
          ) : (
            textOveride
          )}
        </>
      )}
      {ideaObj.variant === ElementVariant.URL && (
        <>
          {ideaObj.urlElem?.variant === UrlElementVariant.YOUTUBE && (
            <ElementYouTube url={ideaObj.urlElem.url} />
          )}
          {ideaObj.urlElem?.variant === UrlElementVariant.SPOTIFY && (
            <ElementSpotify url={ideaObj.urlElem.url} />
          )}
          {ideaObj.urlElem?.variant === UrlElementVariant.WEBSITE && (
            <ElementWebsite
              url={ideaObj.urlElem.url}
              title={ideaObj.urlElem.title}
            />
          )}
        </>
      )}
    </>
  );
}
