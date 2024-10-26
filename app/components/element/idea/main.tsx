import { FileElemVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElemVariant } from '@/server/model/elements/text/main';
import { UrlElemVariant } from '@/server/model/elements/url/main';
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
          {ideaObj.fileElem?.variant === FileElemVariant.IMAGE && (
            <ElementImage src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElemVariant.VIDEO && (
            <ElementVideo src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElemVariant.AUDIO && (
            <ElementAudioSquare src={ideaObj.fileElem.src} />
          )}
          {ideaObj.fileElem?.variant === FileElemVariant.PDF && (
            <ElementPdf src={ideaObj.fileElem.src} />
          )}
        </>
      )}
      {ideaObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
                <ElementSticky text={ideaObj.textElem.text} />
              )}
              {ideaObj.textElem?.variant === TextElemVariant.PAGE && (
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
          {ideaObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
            <ElementYouTube url={ideaObj.urlElem.url} />
          )}
          {ideaObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
            <ElementSpotify url={ideaObj.urlElem.url} />
          )}
          {ideaObj.urlElem?.variant === UrlElemVariant.WEBSITE && (
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
