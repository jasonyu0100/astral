import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceVerseActionUp() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <GlassWindowFrame
      className='h-[50px] w-[50px]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          verseListController.actions.stateActions.goPrev();
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-[2rem] w-[2rem]'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3266_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.0400391'
              y='0.563477'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3266_7)'>
            <path
              d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
