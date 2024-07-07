import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../(controller)/create-space/main';

export function CreateSpaceEditFooter() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { templateProjectChapters, updateTemplateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-row'>
      <div className='border-b-[1px] border-slate-300 px-[0.25rem] pr-[1rem]'>
        <p
          className='w-full animate-pulse-slow cursor-pointer text-center text-lg font-bold text-slate-800'
          onClick={() =>
            updateTemplateProjectChapters([
              ...templateProjectChapters,
              {
                chatTemplates: [],
                sceneTemplates: [],
                verseTemplates: [],
                title: `Chapter ${templateProjectChapters.length + 1}`,
                description: '',
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
