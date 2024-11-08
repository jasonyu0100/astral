import { AstralCloseIcon } from '@/icons/close/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../controller/main';

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
        <p className='text-lg font-bold text-slate-300'>{index + 1}.</p>
        <input
          placeholder='Enter your title...'
          className='w-full rounded bg-transparent px-1 text-lg font-bold text-slate-300 outline-none'
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
            <AstralCloseIcon className='h-full w-full' />
          </button>
        )}
      </div>
      <textarea
        value={templateChapter.objective}
        placeholder='Enter your description...'
        className='flex w-full flex-grow resize-none appearance-none bg-transparent  font-light text-slate-300 outline-none'
        onChange={(e) =>
          updateTemplateProjectChapters(
            templateProjectChapters.map((c, i) =>
              i === index ? { ...c, objective: e.target.value } : c,
            ),
          )
        }
      />
    </div>
  );
}
