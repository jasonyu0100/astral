import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../(controller)/create-space/main';

export function CreateSpaceEditFooter() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { templateProjectChapters, updateTemplateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-row'>
      <div className='border-b-[1px] border-slate-300 px-[0.25rem] pr-[1rem]'>
        <p
          className='animate-pulse-slow cursor-pointer text-lg font-light text-slate-500'
          onClick={() =>
            updateTemplateProjectChapters([
              ...templateProjectChapters,
              {
                sceneTemplates: [],
                postTemplates: [],
                title: `Chapter ${templateProjectChapters.length + 1}`,
                objective: '',
                logTemplates: [],
                description: '',
                summary: '',
              },
            ])
          }
        >
          New Chapter
        </p>
      </div>
    </div>
  );
}
