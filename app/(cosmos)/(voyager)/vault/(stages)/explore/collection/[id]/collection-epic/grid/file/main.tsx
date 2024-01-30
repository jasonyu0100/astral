import { ResourceObj } from '@/tables/resource/main';

export function CollectionResource({
  resource: resource,
}: {
  resource: ResourceObj;
}) {
  return (
    <div className='flex flex-row h-[150px] aspect-[36/16] items-center space-x-[3rem]'>
      <img
        src={resource.file.src}
        className='w-[150px] h-[150px] rounded-full'
      />
      <div className='flex flex-col'>
        <p className='text-slate-300 text-xl font-bold'>{resource.name}</p>
        <p className='text-slate-400 text-lg font-bold'>{resource.file.type}</p>
        <p className='text-slate-400 text-lg font-bold'>
          {resource.description}
        </p>
      </div>
    </div>
  );
}
