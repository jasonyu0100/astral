import { SpaceMapStatusSceneNavigation } from './navigation/main';
import { SpaceMapScenePalette } from './palette/main';
import { SpaceMapScene } from './scene/main';
import { SpaceMapCoreContentsStatus } from './status/main';

export function SpaceMapCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      <SpaceMapCoreContentsStatus />
      <div className='h-full w-full px-[5rem] py-[1rem]'>
        <SpaceMapScene />
      </div>
      <div className='absolute left-[1rem] flex h-full flex-col items-center justify-center'>
        <SpaceMapScenePalette />
      </div>
      <div className='absolute right-[1rem] flex h-full flex-col items-center justify-center'>
        <SpaceMapStatusSceneNavigation />
      </div>
    </div>
  );
}
