import { SpaceDraftContentsDrawer } from './drawer/main';
import { SpaceDraftContentsOverlay } from './overlay/main';
import { SpaceDraftContentsScene } from './scene/main';
import { SpaceDraftContentsTools } from './tools/main';

export function SpaceDraftCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftContentsOverlay />
      </div>
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftContentsScene />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex justify-end'
      >
        <SpaceDraftContentsTools />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex items-end px-[1rem]'
      >
        <SpaceDraftContentsDrawer />
      </div>
    </div>
  );
}
