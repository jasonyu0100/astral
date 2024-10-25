import { FileElemVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElemVariant } from '@/server/model/elements/text/main';
import { UrlElemVariant } from '@/server/model/elements/url/main';
import { ContextForTaskLinkObj } from '@/server/model/task/link/main';
import { useContext } from 'react';
import { ElementAudioSquare } from '../common/audio/square/main';
import { ElementImage } from '../common/image/main';
import { ElementPdf } from '../common/pdf/main';
import { ElementSpotify } from '../common/spotify/main';
import { ElementSticky } from '../common/sticky/main';
import { ElementVideo } from '../common/video/main';
import { ElementWebsite } from '../common/website/main';
import { ElementYouTube } from '../common/youtube/main';

export function ElementLink({
  textOveride,
  audioOveride,
  urlOveride,
}: {
  textOveride?: any;
  audioOveride?: any;
  urlOveride?: any;
}) {
  const linkObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      {linkObj.variant === ElementVariant.FILE && (
        <>
          {linkObj.fileElem?.variant === FileElemVariant.IMAGE && (
            <ElementImage src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElemVariant.VIDEO && (
            <ElementVideo src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElemVariant.AUDIO && (
            <ElementAudioSquare src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElemVariant.PDF && (
            <ElementPdf src={linkObj.fileElem.src} />
          )}
        </>
      )}
      {linkObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {linkObj.textElem?.variant === TextElemVariant.STICKY && (
                <ElementSticky text={linkObj.textElem.text} />
              )}
            </>
          ) : (
            textOveride
          )}
        </>
      )}
      {linkObj.variant === ElementVariant.URL && (
        <>
          {linkObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
            <ElementYouTube url={linkObj.urlElem.url} />
          )}
          {linkObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
            <ElementSpotify url={linkObj.urlElem.url} />
          )}
          {linkObj.urlElem?.variant === UrlElemVariant.WEBSITE && (
            <ElementWebsite
              url={linkObj.urlElem.url}
              title={linkObj.urlElem.title}
            />
          )}
        </>
      )}
    </>
  );
}
