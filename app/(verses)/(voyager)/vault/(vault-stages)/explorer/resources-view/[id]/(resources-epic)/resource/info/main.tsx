import { useContext } from 'react';
import { ResourceContext } from '@/(ouros)/(model)/resource/main';

export function ResourceInfo() {
  const resource = useContext(ResourceContext);

  return (
    <div className='flex flex-col'>
      <p className='text-xl font-extraBold text-slate-300'>{resource.title}</p>
      <p className='text-lg font-bold text-slate-400'>
        {resource?.file?.fileType}
      </p>
      <p className='text-md font-light text-slate-400 mt-[0.5rem]'>{resource.description}</p>
    </div>
  );
}
