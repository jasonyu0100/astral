import { SpaceSeaCoreAdded } from './added/main';
import { SpaceSeaCoreUnadded } from './unadded/main';

export function SpaceSeaCore() {
  return (
    <div className='flex h-full w-full flex-col overflow-auto'>
      <div className='flex w-full flex-col'>
        <SpaceSeaCoreUnadded />
        <SpaceSeaCoreAdded />
      </div>
    </div>
  );
}
