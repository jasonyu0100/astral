import { SpaceBoardPanel } from './panel/main';
import { SpaceBoardScene } from './scene/main';

export function SpaceBoardCoreContents() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <SpaceBoardScene />
      <SpaceBoardPanel />
    </div>
  );
}
