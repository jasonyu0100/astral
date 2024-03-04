import { useContext } from 'react';
import { DraftContext } from '../../../draft/page';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';

export function DraftChaptersRightButton() {
  const { chapterHandler } = useContext(DraftContext);
  return (
    <WrapperTooltip text={'Next'}>
      <button
        className='flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterHandler.goToNextChapter()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <mask
            id='mask0_2939_2703'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='40'
            height='40'
          >
            <rect width='40' height='40' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_2939_2703)'>
            <path
              d='M21.0002 20L13.3335 12.3333L15.6668 10L25.6668 20L15.6668 30L13.3335 27.6667L21.0002 20Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
