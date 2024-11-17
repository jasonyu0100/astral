import { useContext } from 'react';
import { ContextForHomeCreateCreateFromSource } from '../../../../controller/main';

export function HomeCreateCreateFromSourceEditFooter() {
  const { pageTwo } = useContext(ContextForHomeCreateCreateFromSource);
  const { templateProjectChapters, updateTemplateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-row'>
      <div className='border-b-[1px] border-slate-300 px-[0.25rem] pr-[1rem]'>
        <p
          className='animate-pulse-slow cursor-pointer text-lg font-light text-slate-400'
          onClick={() =>
            updateTemplateProjectChapters([
              ...templateProjectChapters,
              {
                title: `Chapter ${templateProjectChapters.length + 1}`,
                objective: '',
                description: '',
                tasks: [],
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
