import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarListMode,
  SpaceMapSidebarMode,
} from '../../controller/map/main';
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
  const chapterController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <SpaceMapSidebarContainer>
      {mapController.sidebarMode === SpaceMapSidebarMode.LIST ? (
        <>
          <div className='flex w-full flex-col items-center justify-center p-[1rem] shadow-glow'>
            {mapController.listSceneMode === SpaceMapSidebarListMode.SCENES ? (
              <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
                <GlassWindowContents className='flex h-full w-full items-center'>
                  <p
                    className='cursor-pointer text-sm font-bold text-slate-500'
                    onClick={() => {
                      mapController.updateListSceneMode(
                        SpaceMapSidebarListMode.SCENES,
                      );
                    }}
                  >
                    {chapterController.state.currentObj?.title}
                  </p>
                </GlassWindowContents>
              </GlassWindowFrame>
            ) : (
              <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
                <GlassWindowContents className='flex h-full w-full items-center'>
                  <p
                    className='cursor-pointer text-sm font-bold text-slate-500'
                    onClick={() => {
                      mapController.updateListSceneMode(
                        SpaceMapSidebarListMode.SCENES,
                      );
                    }}
                  >
                    {chapterController.state.currentObj?.title} /
                  </p>
                  <p
                    className='cursor-pointer text-sm font-bold text-slate-500'
                    onClick={() => {
                      mapController.updateListSceneMode(
                        SpaceMapSidebarListMode.DEFAULT,
                      );
                    }}
                  >
                    {sceneListController.state.currentObj?.title}
                  </p>
                </GlassWindowContents>
              </GlassWindowFrame>
            )}
            <GlassWindowFrame
              className='h-[3rem] w-full flex-shrink-0'
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents className='h-full w-full'>
                <input
                  className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
                  placeholder='Venture forth...'
                ></input>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
          <div className='flex flex-col space-y-[1rem] p-[1rem]'>
            <div className='flex flex-col space-y-[2rem]'>
              {mapController.listSceneMode ===
                SpaceMapSidebarListMode.SCENES && (
                <>
                  {sceneListController.state.objs.map((scene, index) => (
                    <GlassWindowFrame>
                      <GlassWindowContents
                        className='flex flex-row space-x-[1rem]'
                        onClick={() => {
                          mapController.updateListSceneMode(
                            SpaceMapSidebarListMode.DEFAULT,
                          );
                          sceneListController.actions.stateActions.select(
                            scene,
                          );
                        }}
                      >
                        <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-purple-500'>
                          <p className='text-center font-bold text-white'>
                            {index + 1}
                          </p>
                        </div>
                        <div
                          key={scene.id}
                          className='flex flex-col space-y-2 font-bold text-slate-300'
                        >
                          <div className='text-lg font-bold'>
                            {scene.title || 'Untitled'}
                          </div>
                          <div className='text-sm font-light'>
                            {scene.description || 'No description'}
                          </div>
                        </div>
                      </GlassWindowContents>
                    </GlassWindowFrame>
                  ))}
                </>
              )}
              {mapController.listSceneMode ===
                SpaceMapSidebarListMode.DEFAULT && (
                <>
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
                </>
              )}
            </div>
          </div>
        </>
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
