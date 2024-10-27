import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElementVariant } from '@/server/model/elements/text/main';
import { UrlElementVariant } from '@/server/model/elements/url/main';
import { ContextForTaskLinkObj } from '@/server/model/task/link/main';
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
          {linkObj.fileElem?.variant === FileElementVariant.IMAGE && (
            <ElementImage src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElementVariant.VIDEO && (
            <ElementVideo src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElementVariant.AUDIO && (
            <ElementAudioSquare src={linkObj.fileElem.src} />
          )}
          {linkObj.fileElem?.variant === FileElementVariant.PDF && (
            <ElementPdf src={linkObj.fileElem.src} />
          )}
        </>
      )}
      {linkObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {linkObj.textElem?.variant === TextElementVariant.STICKY && (
                <ElementSticky text={linkObj.textElem.text} />
              )}
              {linkObj.textElem?.variant === TextElementVariant.ARTICLE && (
                <ElementPage text={linkObj.textElem.text} />
              )}
            </>
          ) : (
            textOveride
          )}
        </>
      )}
      {linkObj.variant === ElementVariant.URL && (
        <>
          {linkObj.urlElem?.variant === UrlElementVariant.YOUTUBE && (
            <ElementYouTube url={linkObj.urlElem.url} />
          )}
          {linkObj.urlElem?.variant === UrlElementVariant.SPOTIFY && (
            <ElementSpotify url={linkObj.urlElem.url} />
          )}
          {linkObj.urlElem?.variant === UrlElementVariant.WEBSITE && (
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
