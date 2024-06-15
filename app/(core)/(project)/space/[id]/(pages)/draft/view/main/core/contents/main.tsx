import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import { SpaceDraftContentsDrawerDefault } from './drawer/default/main';
import { SpaceDraftContentsDrawerExpanded } from './drawer/expanded/main';
import { SpaceDraftContentsList } from './list/main';
import { SpaceDraftContentsScene } from './scene/main';
import { SpaceDraftContentsTools } from './tools/main';

export function SpaceDraftCoreContents() {
  const togglableDrawerController = useControllerForTogglable();
  const togglableListController = useControllerForTogglable();
  const togglableToolsController = useControllerForTogglable();

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <ContextForTogglable.Provider value={togglableListController}>
        <div style={{ width: '100%', height: '100%' }} className='absolute'>
          {togglableListController.toggled && <SpaceDraftContentsList />}
        </div>
      </ContextForTogglable.Provider>
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftContentsScene />
      </div>
      <ContextForTogglable.Provider value={togglableToolsController}>
        <div
          style={{ width: '100%', height: '100%' }}
          className='absolute flex justify-end'
        >
          {togglableToolsController.toggled && <SpaceDraftContentsTools />}
        </div>
      </ContextForTogglable.Provider>
      <ContextForTogglable.Provider value={togglableDrawerController}>
        <div
          style={{ width: '100%', height: '100%' }}
          className='absolute flex items-end px-[1rem]'
        >
          {togglableDrawerController.toggled ? (
            <SpaceDraftContentsDrawerExpanded
              onToggle={() => {
                togglableDrawerController.toggle();
                togglableListController.updateToggle(true);
                togglableToolsController.updateToggle(true);
              }}
            />
          ) : (
            <SpaceDraftContentsDrawerDefault
              onToggle={() => {
                togglableDrawerController.toggle();
                togglableListController.updateToggle(false);
                togglableToolsController.updateToggle(false);
              }}
            />
          )}
        </div>
      </ContextForTogglable.Provider>
    </div>
  );
}
