import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { AstralSourceIcon } from '@/icons/source/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
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
                    Scenes /{' '}
                  </p>
                </GlassWindowContents>
              </GlassWindowFrame>
            ) : (
              <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
                <GlassWindowContents className='flex h-full w-full items-center space-x-[1rem]'>
                  <p className='cursor-pointer text-sm font-bold text-slate-500'>
                    <span
                      onClick={() => {
                        mapController.updateListSceneMode(
                          SpaceMapSidebarListMode.SCENES,
                        );
                      }}
                    >
                      Scenes /{' '}
                    </span>
                    <span
                      onClick={() => {
                        mapController.updateListSceneMode(
                          SpaceMapSidebarListMode.DEFAULT,
                        );
                      }}
                    >
                      {sceneListController.state.currentObj?.title}
                    </span>
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
                  onChange={(e) => {
                    if (
                      mapController.listSceneMode ===
                      SpaceMapSidebarListMode.SCENES
                    ) {
                      sceneListController.actions.stateActions.executeQuery(
                        e.target.value,
                      );
                    } else if (
                      mapController.listSceneMode ===
                      SpaceMapSidebarListMode.DEFAULT
                    ) {
                      ideaListController.actions.stateActions.executeQuery(
                        e.target.value,
                      );
                    }
                  }}
                />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
          <div className='flex flex-col space-y-[1rem] p-[1rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              {mapController.listSceneMode ===
                SpaceMapSidebarListMode.SCENES && (
                <>
                  {sceneListController.state.objs.map((scene, index) => (
                    <GlassWindowFrame
                      className='p-[1rem]'
                      roundedFx={roundedFx.rounded}
                      borderFx={borderFx['border-around']}
                    >
                      <GlassWindowContents
                        className='flex flex-row items-center space-x-[1rem]'
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
                          className='flex flex-col font-bold text-slate-300'
                        >
                          <div className='text-lg font-bold'>
                            {scene.title || 'Untitled'}
                          </div>
                          <div className='text-sm font-light'>
                            {scene.description || 'No description'}
                          </div>
                        </div>
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  ))}
                </>
              )}
              {mapController.listSceneMode ===
                SpaceMapSidebarListMode.DEFAULT && (
                <>
                  {ideaListController.state.more.queryResults.map(
                    (idea, index) => (
                      <GlassWindowFrame
                        className='p-[1rem]'
                        roundedFx={roundedFx.rounded}
                        borderFx={borderFx['border-around']}
                      >
                        <GlassWindowContents className='flex w-full flex-row items-center justify-between'>
                          <div className='flex flex-row items-center space-x-[1rem]'>
                            <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                              <p className='text-center font-bold text-white'>
                                {index + 1}
                              </p>
                            </div>
                            <div
                              key={idea.id}
                              className='flex flex-col font-bold text-slate-300'
                            >
                              <div className='text-lg font-bold'>
                                {idea.title || 'Untitled'}
                              </div>
                              <div className='text-sm font-light'>
                                {idea.description || 'No description'}
                              </div>
                            </div>
                          </div>
                          {idea.visible ? (
                            <AstralSourceIcon
                              onClick={() => {
                                ideaListController.actions.editActions.edit(
                                  idea.id,
                                  {
                                    visible: false,
                                  },
                                );
                              }}
                            />
                          ) : (
                            <AstralHideSourceIcon
                              onClick={() => {
                                ideaListController.actions.editActions.edit(
                                  idea.id,
                                  {
                                    visible: true,
                                  },
                                );
                              }}
                            />
                          )}
                        </GlassWindowContents>
                        <GlassWindowPane glassFx={glassFx['glass-5']} />
                      </GlassWindowFrame>
                    ),
                  )}
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
