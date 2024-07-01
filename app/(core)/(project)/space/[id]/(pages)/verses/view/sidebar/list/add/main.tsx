import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';

export function SpaceVersesSidebarAddVerse({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      className='flex h-[70px] w-full cursor-pointer flex-row items-center space-x-[2rem]'
      onClick={onClick}
    >
      <GlassWindowFrame className='aspect-square h-full'>
        <GlassWindowContents className='flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3290_2252'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3290_2252)'>
              <path
                d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <div className='flex flex-col'>
        <p className='text-sm font-bold text-white'>New Verse</p>
      </div>
    </div>
  );
}
