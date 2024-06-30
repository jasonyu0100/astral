import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../(controller)/create-space/main';

export function CreateSpaceTemplateStructure() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { templateProjectChapters } = pageTwo;
  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {templateProjectChapters.map((template, index) => (
        <p className='text-md overflow-hidden font-bold' key={index}>
          {index + 1}. {template.title} -{' '}
          <span className='font-light'>{template.description}</span>
        </p>
      ))}
    </div>
  );
}
