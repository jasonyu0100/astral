import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceVerseDown() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <GlassWindowFrame
      className='h-[50px] w-[50px]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          verseListController.actions.stateActions.goNext();
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-[2rem] w-[2rem]'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3266_13'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3266_13)'>
            <path
              d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
