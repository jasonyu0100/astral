/* eslint-disable @typescript-eslint/no-unused-vars */
import { FileElemVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElemVariant } from '@/server/model/elements/text/main';
import { UrlElemVariant } from '@/server/model/elements/url/main';
import { ContextForPostAttachmentObj } from '@/server/model/post/attachment/main';
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
          {attachmentObj.fileElem?.variant === FileElemVariant.IMAGE && (
            <ElementImage src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElemVariant.VIDEO && (
            <ElementVideo src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElemVariant.AUDIO && (
            <ElementAudioSquare src={attachmentObj.fileElem.src} />
          )}
          {attachmentObj.fileElem?.variant === FileElemVariant.PDF && (
            <ElementPdf src={attachmentObj.fileElem.src} />
          )}
        </>
      )}
      {attachmentObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {attachmentObj.textElem?.variant === TextElemVariant.STICKY && (
                <ElementSticky text={attachmentObj.textElem.text} />
              )}
              {attachmentObj.textElem?.variant === TextElemVariant.ARTICLE && (
                <ElementPage text={attachmentObj.textElem.text} />
              )}
            </>
          ) : (
            textOveride
          )}
        </>
      )}
      {attachmentObj.variant === ElementVariant.URL && (
        <>
          {attachmentObj.urlElem?.variant === UrlElemVariant.YOUTUBE && (
            <ElementYouTube url={attachmentObj.urlElem.url} />
          )}
          {attachmentObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
            <ElementSpotify url={attachmentObj.urlElem.url} />
          )}
          {attachmentObj.urlElem?.variant === UrlElemVariant.WEBSITE && (
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
