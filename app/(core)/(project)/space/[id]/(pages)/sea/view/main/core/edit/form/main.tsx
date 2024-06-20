import { exampleFileElems } from '@/(server)/(model)/elements/file/main';

export function SpaceSeaEditForm() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xl font-bold text-slate-300'>Title</p>
      <p className='text-md text-slate-300'>A new chapter</p>
      <p className='text-xl font-bold text-slate-300'>Description</p>
      <p className='text-md text-slate-300'>
        I worked on adding a new chapter into the vision and it didn't work so
        well.
      </p>
      <p className='text-xl font-bold text-slate-300'>Collabs</p>
      <div className='flex flex-row flex-wrap gap-[1rem]'>
        {exampleFileElems.map((fileElem) => (
          <img
            className='h-[3rem] w-[3rem] rounded-full object-cover'
            src={fileElem.src}
          />
        ))}
      </div>
    </div>
  );
}
