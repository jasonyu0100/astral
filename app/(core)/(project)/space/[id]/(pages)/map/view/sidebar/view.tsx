import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarMode,
} from '../../(controller)/map/main';
import {
  ContextForSpaceMapSidebar,
  SpaceMapSidebarMediaMode,
} from '../../page';
import { SpaceMapSidebarContainer } from './container/main';
import { SpaceMapGalleryCollectionsMode } from './modes/(gallery)/main';
import { SpaceMapSidebarHomeGallerysMode } from './modes/(home)/main';
import { SpaceMapCollectionResourcesMode } from './modes/(resources)/main';

export function SpaceMapSidebarView() {
  const mapSidebarController = useContext(ContextForSpaceMapSidebar);
  const mapController = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const currentScene = sceneListController.state.currentObj;

  return (
    <SpaceMapSidebarContainer>
      {mapController.sidebarMode === SpaceMapSidebarMode.LIST ? (
        <div className='flex flex-col space-y-[1rem] p-[1rem]'>
          <div className='text-lg font-bold text-slate-300'>
            Idea List - {currentScene?.title}
          </div>
          <HorizontalDivider />
          <div className='flex flex-col space-y-[2rem] pt-[1rem]'>
            {ideaListController.state.objs.map((idea, index) => (
              <GlassWindowFrame>
                <GlassWindowContents className='flex flex-row space-x-[1rem]'>
                  <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <p className='text-center font-bold text-white'>
                      {index + 1}
                    </p>
                  </div>
                  <div
                    key={idea.id}
                    className='flex flex-col space-y-2 font-bold text-slate-300'
                  >
                    <div className='text-lg font-bold'>
                      {idea.title || 'Untitled'}
                    </div>
                    <div className='text-sm font-light'>
                      {idea.description || 'No description'}
                    </div>
                  </div>
                </GlassWindowContents>
              </GlassWindowFrame>
            ))}
          </div>
        </div>
      ) : (
        <>
          {mapSidebarController.mode === SpaceMapSidebarMediaMode.Home && (
            <SpaceMapSidebarHomeGallerysMode />
          )}
          {mapSidebarController.mode === SpaceMapSidebarMediaMode.Gallery && (
            <SpaceMapGalleryCollectionsMode />
          )}
          {mapSidebarController.mode ===
            SpaceMapSidebarMediaMode.Collection && (
            <SpaceMapCollectionResourcesMode />
          )}
        </>
      )}
    </SpaceMapSidebarContainer>
  );
}
