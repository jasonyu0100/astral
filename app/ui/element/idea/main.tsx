import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import Link from 'next/link';
import { useContext } from 'react';

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
            <img
              src={ideaObj?.fileElem?.src}
              alt={ideaObj.title}
              className='w-full flex-shrink-0 object-contain'
            />
          )}
          {ideaObj.fileElem?.variant === FileElemVariant.VIDEO && (
            <GlassWindowFrame roundedFx={roundedFx.rounded}>
              <GlassWindowContents>
                <video
                  id={`video-${ideaObj.id}`}
                  onClick={(e) => {
                    const video = document.getElementById(
                      `video-${ideaObj.id}`,
                    ) as HTMLVideoElement;
                    if (video?.paused) {
                      video?.play();
                    } else {
                      video?.pause();
                    }
                  }}
                  src={ideaObj?.fileElem?.src}
                  className='aspect-video w-full flex-shrink-0 cursor-pointer bg-black'
                />
              </GlassWindowContents>
            </GlassWindowFrame>
          )}
          {ideaObj.fileElem?.variant === FileElemVariant.AUDIO && (
            <div
              className='flex aspect-square h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-slate-900'
              onClick={() => {
                const audio = document.getElementById(
                  'file-upload-audio',
                ) as HTMLAudioElement;
                if (audio?.paused) {
                  audio?.play();
                } else {
                  audio?.pause();
                }
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-1/2 w-1/2'
                viewBox='0 0 24 24'
                fill='none'
              >
                <mask
                  id='mask0_3134_7'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                >
                  <rect width='24' height='24' fill='#D9D9D9' />
                </mask>
                <g mask='url(#mask0_3134_7)'>
                  <path
                    d='M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7375 13.0458 11.0625 13.1375C11.3875 13.2292 11.7 13.3667 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
              <audio
                id='file-upload-audio'
                src={ideaObj.fileElem.src}
                className='aspect-square h-[100px]  bg-black object-contain'
              />
            </div>
          )}
        </>
      )}
      {ideaObj.variant === ElementVariant.TEXT && (
        <>
          {!textOveride ? (
            <>
              {ideaObj.textElem?.variant === TextElemVariant.STICKY && (
                <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
                  {ideaObj.textElem?.text}
                </div>
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
            <GlassWindowFrame roundedFx={roundedFx.rounded} className='w-full'>
              <GlassWindowContents>
                <iframe
                  onDrag={(e) => e.stopPropagation()}
                  src={ideaObj.urlElem?.url}
                  title='YouTube video player'
                  className='aspect-video'
                  style={{ objectFit: 'contain', width: '100%' }}
                />
              </GlassWindowContents>
            </GlassWindowFrame>
          )}
          {ideaObj.urlElem?.variant === UrlElemVariant.SPOTIFY && (
            <iframe
              src={ideaObj.urlElem?.url}
              style={{ objectFit: 'contain', width: '100%' }}
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            />
          )}
          {ideaObj.urlElem?.variant === UrlElemVariant.WEBSITE && (
            <GlassWindowFrame
              roundedFx={roundedFx['rounded']}
              className='w-full'
            >
              <GlassWindowContents className='w-full p-[1rem]'>
                <Link
                  className='flex w-full flex-row items-center justify-center space-x-[0.5rem] whitespace-nowrap font-bold text-slate-300'
                  href={ideaObj.urlElem.url}
                  target='_blank'
                >
                  <p>{ideaObj?.title || 'Untitled'}</p>
                  <AstralLinkIcon />
                </Link>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          )}
        </>
      )}
    </>
  );
}
