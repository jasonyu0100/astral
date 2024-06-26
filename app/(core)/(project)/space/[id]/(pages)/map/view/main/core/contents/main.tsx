import { SpaceMapContentsScene } from './scene/main';
import { SpaceMapContentsTools } from './tools/main';

export function SpaceMapCoreContents() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='relative'>
      <SpaceMapContentsScene />
      <SpaceMapContentsTools />
    </div>
  );
}
