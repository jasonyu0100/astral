import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import { SpaceDraftContentsPalette } from './palette/main';
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
      <SpaceDraftContentsScene />
      {/* <ContextForTogglable.Provider value={togglableListController}>
        <div style={{ height: '100%' }} className='absolute right-0'>
          <SpaceDraftContentsList />
        </div>
      </ContextForTogglable.Provider> */}
      <ContextForTogglable.Provider value={togglableToolsController}>
        <div style={{ top: '0%', height: '100%' }} className='absolute'>
          <SpaceDraftContentsTools />
        </div>
      </ContextForTogglable.Provider>
      <ContextForTogglable.Provider value={togglableDrawerController}>
        <div
          style={{ width: '100%', height: '100%' }}
          className='absolute flex items-end p-[1rem] opacity-80'
        >
          <SpaceDraftContentsPalette
            toggled={togglableDrawerController.toggled}
            onExpand={() => {
              togglableDrawerController.toggle();
              togglableListController.updateToggle(false);
              togglableToolsController.updateToggle(false);
            }}
            onCollapse={() => {
              togglableDrawerController.toggle();
              togglableListController.updateToggle(true);
              togglableToolsController.updateToggle(true);
            }}
          />
        </div>
      </ContextForTogglable.Provider>
    </div>
  );
}
