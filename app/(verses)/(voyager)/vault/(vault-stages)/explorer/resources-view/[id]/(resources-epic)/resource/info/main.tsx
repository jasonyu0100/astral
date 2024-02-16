import { useContext } from 'react';
import { ResourceContext } from '@/(ouros)/(model)/resource/main';

export function ResourceInfo() {
  const resource = useContext(ResourceContext);

  return (
    <div className='flex flex-col'>
      <p className='text-xl font-bold text-slate-300'>{resource.title}</p>
      <p className='text-lg font-bold text-slate-400'>
        {resource?.file?.fileType}
      </p>
      <p className='text-lg font-bold text-slate-400'>{resource.description}</p>
    </div>
  );
}
