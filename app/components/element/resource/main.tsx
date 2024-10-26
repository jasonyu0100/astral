import { FileElemVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElemVariant } from '@/server/model/elements/text/main';
import { UrlElemVariant } from '@/server/model/elements/url/main';
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
          {resourceObj.fileElem?.variant === FileElemVariant.IMAGE && (
            <ElementImage src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElemVariant.VIDEO && (
            <ElementVideo src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElemVariant.AUDIO && (
            <ElementAudioSquare src={resourceObj.fileElem.src} />
          )}
          {resourceObj.fileElem?.variant === FileElemVariant.PDF && (
            <ElementPdf src={resourceObj.fileElem.src} />
          )}
        </>
      )}
      {resourceObj.variant === ElementVariant.TEXT && (
        <>
          {resourceObj.textElem?.variant === TextElemVariant.STICKY && (
            <ElementSticky text={resourceObj.textElem.text} />
          )}
          {resourceObj.textElem?.variant === TextElemVariant.ARTICLE && (
            <ElementPage text={resourceObj.textElem.text} />
          )}
        </>
      )}
      {resourceObj.variant === ElementVariant.URL && (
        <>
          {resourceObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
            <ElementYouTube url={resourceObj.urlElem.url} />
          )}
          {resourceObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
            <ElementSpotify url={resourceObj.urlElem.url} />
          )}
          {resourceObj.urlElem?.variant === UrlElemVariant.WEBSITE && (
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
