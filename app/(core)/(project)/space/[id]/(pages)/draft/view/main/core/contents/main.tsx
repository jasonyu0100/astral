import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import { SpaceDraftContentsScene } from './scene/main';
import { SpaceDraftContentsTools } from './tools/main';

export function SpaceDraftCoreContents() {
  const togglableToolsController = useControllerForTogglable();

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <SpaceDraftContentsScene />
      <ContextForTogglable.Provider value={togglableToolsController}>
        <div style={{ top: '0%', height: '100%' }} className='absolute'>
          <SpaceDraftContentsTools />
        </div>
      </ContextForTogglable.Provider>
    </div>
  );
}
