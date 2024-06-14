import { useContext } from 'react';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function ScenesGoLeftAction() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <WrapperTooltip text={'Prev'}>
      <button
        className='flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full'
        onClick={() => chapterListController.actions.stateActions.goPrev()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <mask
            id='mask0_2939_2709'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='40'
            height='40'
          >
            <rect width='40' height='40' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_2939_2709)'>
            <path
              d='M23.3335 30L13.3335 20L23.3335 10L25.6668 12.3333L18.0002 20L25.6668 27.6667L23.3335 30Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
