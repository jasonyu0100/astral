import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function SpaceSessionAddCollaborator({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-full']}
      borderFx={borderFx['border-around']}
      className='h-[50px] w-[50px]'
    >
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center rounded-full'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-1/2 w-1/2'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3276_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3276_7)'>
            <path
              d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
              className='fill-slate-500'
            />
          </g>
        </svg>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
