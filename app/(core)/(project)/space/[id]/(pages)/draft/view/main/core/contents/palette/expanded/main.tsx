import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForPaletteController,
  PaletteState,
} from '../../../../../../page';

export function SpaceDraftContentsPaletteExpanded({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const paletteController = useContext(ContextForPaletteController);

  return (
    <div className='z-50 flex h-full w-full flex-col'>
      <div className='flex w-full items-center space-x-[1rem] p-[1rem]'>
        <p className='font-bold text-slate-300'>HOME</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => onToggle()}
          className='h-[2rem] w-[2rem] cursor-pointer'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3264_5815'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3264_5815)'>
            <path
              d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </div>
      <GlassWindowFrame
        className='h-full w-full overflow-auto'
        roundedFx={roundedFx['rounded-container']}
      >
        <GlassWindowContents className='space-x-[1rem flex w-full flex-row flex-wrap'>
          {paletteController.state === PaletteState.GALLERY && (
            <p className='font-bold text-slate-300'>GALLERY</p>
          )}
          {paletteController.state === PaletteState.HOME && (
            <p className='font-bold text-slate-300'>HOME</p>
          )}
          {paletteController.state === PaletteState.GALLERY && (
            <p className='font-bold text-slate-300'>GALLERY</p>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
