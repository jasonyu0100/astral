import { SpaceDraftSceneOverlay } from './overlay/main';
import { SpaceDraftScene } from './scene/main';

export function SpaceDraftCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftSceneOverlay />
      </div>
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftScene />
      </div>
    </div>
  );
}
