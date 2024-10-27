import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElementVariant } from '@/server/model/elements/text/main';
import { UrlElementVariant } from '@/server/model/elements/url/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext } from 'react';
import { ElementAudioSquare } from '../common/audio/square/main';
import { ElementImage } from '../common/image/main';
import { ElementPage } from '../common/page/main';
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
                <ElementPage text={ideaObj.textElem.text} />
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
