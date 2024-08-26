import { SpaceMapCoreContentsPalette } from './palette/main';
import { SpaceMapContentsScene } from './scene/main';
import { SpaceMapCoreContentsStatus } from './status/main';

export function SpaceMapCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col'
    >
      <div
        className='flex w-full flex-row justify-between'
        style={{ height: '100%' }}
      >
        <div className='h-full flex-grow'>
          <SpaceMapContentsScene />
        </div>
        <div className='z-40 flex h-full w-[6rem] flex-col items-center justify-center space-y-[1rem] px-[1rem]'>
          <SpaceMapCoreContentsPalette />
        </div>
      </div>
      <SpaceMapCoreContentsStatus />
    </div>
  );
}
