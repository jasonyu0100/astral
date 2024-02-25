import { Glass } from '@/(components)/(basic)/glass/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { StormModalContext } from '../../../../../../../../../../../../(modals)/process/storm-modal/main';

export function StormChapterChatAdd() {
  const { addChatModal: newChat } = useContext(StormModalContext);

  return (
    <>
      <button
        className='flex w-full flex-row items-center space-x-[1rem]'
        onClick={() => newChat.open()}
      >
        <Glass
          displayName={StormChapterChatAdd.name}
          sizeStyle='w-[50px] h-[50px] rounded-full overflow-hidden'
          backgroundStyle='bg-gradient-to-r from-slate-100 to-slate-500 opacity-10'
          className={`${containerStyles['col-centered']}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            className="w-1/2 h-1/2"
            viewBox='0 0 32 32'
            fill='none'
          >
            <mask
              id='mask0_1642_21997'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='32'
              height='32'
            >
              <rect width='32' height='32' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_1642_21997)'>
              <path
                d='M14.6667 17.3334H6.66669V14.6667H14.6667V6.66669H17.3334V14.6667H25.3334V17.3334H17.3334V25.3334H14.6667V17.3334Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </Glass>
        <p className='text-lg font-bold text-slate-500'>New Chat</p>
      </button>
    </>
  );
}
