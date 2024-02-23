import { useContext } from 'react';
import { ResourceContext } from '@/(logic)/model/resource/main';

export function CollectionResourceInfo() {
  const resource = useContext(ResourceContext);
  return (
    <div className='flex flex-grow flex-col'>
      <p className='font-extraBold text-slate-400'>{resource.title}</p>
      <p className='font-regular text-slate-500'>{resource.description}</p>
    </div>
  );
}
