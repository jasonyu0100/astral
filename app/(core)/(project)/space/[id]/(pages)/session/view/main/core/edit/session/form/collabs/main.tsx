import { exampleFileElems } from '@/(server)/(model)/elements/file/main';

export function SpaceSessionUpdateFormCollaborators() {
  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <p className='text-xs font-bold text-slate-300'>Collabs</p>
      <div className='flex flex-row flex-wrap gap-[0.5rem]'>
        {exampleFileElems.map((fileElem) => (
          <img
            className='h-[2rem] w-[2rem] rounded-full object-cover'
            src={fileElem.src}
          />
        ))}
      </div>
    </div>
  );
}
