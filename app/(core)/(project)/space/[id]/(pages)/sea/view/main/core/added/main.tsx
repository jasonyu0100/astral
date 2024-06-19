import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';

export function SpaceSeaCoreAdded() {
  return (
    <div className='flex w-full flex-col space-y-[2rem] overflow-auto p-[2rem]'>
      <p className='text-2xl font-bold text-white'>Added</p>
      <HorizontalDivider />

      <div className='w-full'>
        <div className='flex flex-row flex-wrap space-x-[1rem]'></div>
      </div>
    </div>
  );
}
