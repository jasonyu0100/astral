/* eslint-disable @typescript-eslint/no-unused-vars */
import { FileElementVariant } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { TextElementVariant } from '@/architecture/model/elements/text/main';
import { UrlElementVariant } from '@/architecture/model/elements/url/main';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
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

export function ElementAttachment({
  textOveride,
  audioOveride,
  urlOveride,
}: {
  textOveride?: unknown;
  audioOveride?: unknown;
  urlOveride?: unknown;
}) {
  const attachmentObj = useContext(ContextForPostAttachmentObj);

  return (
    <>
      {attachmentObj.variant === ElementVariant.FILE && (
        <>
          {attachmentObj.fileElem?.variant === FileElementVariant.IMAGE && (
            <ElementImage src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElementVariant.VIDEO && (
            <ElementVideo src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElementVariant.AUDIO && (
            <ElementAudioSquare src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElementVariant.PDF && (
            <ElementPdf src={attachmentObj.fileElem.src} />
          )}
        </>
      )}
      {attachmentObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {attachmentObj.textElem?.variant ===
                TextElementVariant.STICKY && (
                <ElementSticky text={attachmentObj.textElem.text} />
              )}
              {attachmentObj.textElem?.variant ===
                TextElementVariant.ARTICLE && (
                <ElementArticle text={attachmentObj.textElem.text} />
              )}
            </>
          ) : (
            textOveride
          )}
        </>
      )}
      {attachmentObj.variant === ElementVariant.URL && (
        <>
          {attachmentObj.urlElem?.variant === UrlElementVariant.YOUTUBE && (
            <ElementYouTube url={attachmentObj.urlElem.url} />
          )}
          {attachmentObj.urlElem?.variant === UrlElementVariant.SPOTIFY && (
            <ElementSpotify url={attachmentObj.urlElem.url} />
          )}
          {attachmentObj.urlElem?.variant === UrlElementVariant.WEBSITE && (
            <ElementWebsite
              url={attachmentObj.urlElem.url}
              title={attachmentObj.urlElem.title}
            />
          )}
        </>
      )}
    </>
  );
}
