import {
  FileContext,
  FileVariant,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useContext } from 'react';

export function UploadedFilePreview() {
  const file = useContext(FileContext);
  return (
    <>
      {file.variant === FileVariant.AUDIO && (
        <div
          className='flex aspect-square h-[100px] w-[100px] cursor-pointer items-center justify-center bg-black shadow-md'
          onClick={() => {
            const audio = document.getElementById(
              'file-upload-audio',
            ) as HTMLAudioElement;
            audio.play();
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
            src={file.src}
            className='aspect-square h-[100px] bg-black object-cover shadow-md'
          />
        </div>
      )}
      {file.variant === FileVariant.VIDEO && (
        <video
          src={file.src}
          className='aspect-square h-[100px] bg-black object-cover shadow-md'
        />
      )}
      {file.variant === FileVariant.IMAGE && (
        <img
          src={file.src}
          alt={file.title}
          className='aspect-square h-[100px] bg-black object-cover shadow-md'
        />
      )}
    </>
  );
}
