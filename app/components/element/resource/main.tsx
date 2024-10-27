import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElementVariant } from '@/server/model/elements/text/main';
import { UrlElementVariant } from '@/server/model/elements/url/main';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
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

export function ElementResource({
  audioOveride,
  textOveride,
  urlOveride,
}: {
  audioOveride?: any;
  textOveride?: any;
  urlOveride?: any;
}) {
  const resourceObj = useContext(ContextForCollectionResourceObj);
  console.log(resourceObj);

  return (
    <>
      {resourceObj.variant === ElementVariant.FILE && (
        <>
          {resourceObj.fileElem?.variant === FileElementVariant.IMAGE && (
            <ElementImage src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElementVariant.VIDEO && (
            <ElementVideo src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElementVariant.AUDIO && (
            <ElementAudioSquare src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElementVariant.PDF && (
            <ElementPdf src={resourceObj.fileElem.src} />
          )}
        </>
      )}
      {resourceObj.variant === ElementVariant.TEXT && (
        <>
          {resourceObj.textElem?.variant === TextElementVariant.STICKY && (
            <ElementSticky text={resourceObj.textElem.text} />
          )}
          {resourceObj.textElem?.variant === TextElementVariant.ARTICLE && (
            <ElementPage text={resourceObj.textElem.text} />
          )}
        </>
      )}
      {resourceObj.variant === ElementVariant.URL && (
        <>
          {resourceObj.urlElem?.variant === UrlElementVariant.YOUTUBE && (
            <ElementYouTube url={resourceObj.urlElem.url} />
          )}
          {resourceObj.urlElem?.variant === UrlElementVariant.SPOTIFY && (
            <ElementSpotify url={resourceObj.urlElem.url} />
          )}
          {resourceObj.urlElem?.variant === UrlElementVariant.WEBSITE && (
            <ElementWebsite
              url={resourceObj.urlElem.url}
              title={resourceObj.urlElem.title}
            />
          )}
        </>
      )}
    </>
  );
}
