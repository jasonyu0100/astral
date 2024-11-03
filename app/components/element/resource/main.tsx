import { FileElementVariant } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { TextElementVariant } from '@/architecture/model/elements/text/main';
import { UrlElementVariant } from '@/architecture/model/elements/url/main';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { ElementArticle } from '../common/article/main';
import { ElementAudioSquare } from '../common/audio/square/main';
import { ElementImage } from '../common/image/main';
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
            <ElementArticle text={resourceObj.textElem.text} />
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
