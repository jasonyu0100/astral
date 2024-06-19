import { SpaceSeaEditCard } from './card/main';
import { SpaceSeaEditForm } from './form/main';
import { SpaceSeaEditNext } from './next/main';

export function SpaceSeaCardEdit() {
  return (
    <div className='flex w-full flex-row items-center space-x-[4rem]'>
      <SpaceSeaEditCard />
      <SpaceSeaEditForm />
      <SpaceSeaEditNext />
    </div>
  );
}
