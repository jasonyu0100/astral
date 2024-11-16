import { useContext } from 'react';
import { ContextForCreateFlowCreateSpace } from '../../../../controller/main';

export function CreateFlowCreateSpaceTemplateStructure() {
  const { state: pageTwo } = useContext(ContextForCreateFlowCreateSpace);
  const { templateProjectChapters } = pageTwo;
  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {templateProjectChapters.map((template, index) => (
        <p className='text-md overflow-hidden font-bold' key={index}>
          {index + 1}. {template.title} -{' '}
          <span className='font-light'>{template.objective}</span>
        </p>
      ))}
    </div>
  );
}
