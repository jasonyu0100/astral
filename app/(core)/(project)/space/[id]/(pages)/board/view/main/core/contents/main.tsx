import { SpaceBoardSceneOverlay } from './overlay/main';
import { SpaceBoardScene } from './scene/main';

export function SpaceBoardCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceBoardSceneOverlay />
      </div>
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceBoardScene />
      </div>
    </div>
  );
}
