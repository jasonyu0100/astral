import { ContextForTemplateChapter } from '@/(server)/templates/space/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../(controller)/create-space/main';

export function CreateSpaceEditChapter() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { templateProjectChapters, updateTemplateProjectChapters } = pageTwo;
  const index = useContext(ContextForIndexable);
  const templateChapter = useContext(ContextForTemplateChapter);
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='flex w-full flex-col'
      onMouseOver={hoverableController.onHover}
      onMouseLeave={hoverableController.onUnhover}
    >
      <div className='flex flex-row items-center'>
        <p className='text-lg font-bold'>{index + 1}.</p>
        <input
          placeholder='Enter your title...'
          className='w-auto rounded px-1 text-lg font-bold outline-none'
          value={templateChapter.title}
          onChange={(e) =>
            updateTemplateProjectChapters(
              templateProjectChapters.map((c, i) =>
                i === index ? { ...c, title: e.target.value } : c,
              ),
            )
          }
        />
        {hoverableController.hovered && (
          <button
            className='ml-auto mr-[15px] h-[20px] w-[20px] rounded-full bg-slate-500 bg-opacity-30'
            onClick={() =>
              updateTemplateProjectChapters(
                templateProjectChapters.filter((_, i) => i !== index),
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-full w-full'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_2962_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' className='fill-white' />
              </mask>
              <g mask='url(#mask0_2962_7)'>
                <path
                  d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                  className='fill-white'
                />
              </g>
            </svg>
          </button>
        )}
      </div>
      <textarea
        value={templateChapter.description}
        placeholder='Enter your description...'
        className='flex w-full flex-grow resize-none appearance-none bg-transparent  font-light outline-none'
        onChange={(e) =>
          updateTemplateProjectChapters(
            templateProjectChapters.map((c, i) =>
              i === index ? { ...c, description: e.target.value } : c,
            ),
          )
        }
      />
    </div>
  );
}
