import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import { SpaceMapContentsScene } from './scene/main';
import { SpaceMapContentsTools } from './tools/main';

export function SpaceMapCoreContents() {
  const togglableToolsController = useControllerForTogglable();

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <SpaceMapContentsScene />
      <ContextForTogglable.Provider value={togglableToolsController}>
        <div style={{ top: '0%', height: '100%' }} className='absolute'>
          <SpaceMapContentsTools />
        </div>
      </ContextForTogglable.Provider>
    </div>
  );
}
