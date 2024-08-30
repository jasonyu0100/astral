import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarListMode,
} from '../../controller/main';

export function SpaceJourneySidebar() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const progressController = useContext(ContextForSpaceJourney);

  return (
    <>
      <GlassAreaContainer
        name={SpaceJourneySidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <div className='flex w-full flex-col items-center justify-center p-[1rem] shadow-glow'>
          <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
            <GlassWindowContents className='flex h-full w-full items-center'>
              {progressController.listSceneMode !==
              SpaceJourneySidebarListMode.DEFAULT ? (
                <p
                  className='cursor-pointer text-sm font-bold text-slate-500'
                  onClick={() => {
                    progressController.updateListSceneMode(
                      SpaceJourneySidebarListMode.SCENES,
                    );
                  }}
                >
                  Scenes /{' '}
                </p>
              ) : (
                <p className='cursor-pointer text-sm font-bold text-slate-500'>
                  <span
                    onClick={() => {
                      progressController.updateListSceneMode(
                        SpaceJourneySidebarListMode.SCENES,
                      );
                    }}
                  >
                    Scenes /{' '}
                  </span>
                  <span
                    onClick={() => {
                      progressController.updateListSceneMode(
                        SpaceJourneySidebarListMode.DEFAULT,
                      );
                    }}
                  >
                    {sceneListController.state.currentObj?.title}
                  </span>
                </p>
              )}
            </GlassWindowContents>
          </GlassWindowFrame>
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
                    progressController.listSceneMode ===
                    SpaceJourneySidebarListMode.DEFAULT
                  ) {
                    ideaListController.actions.stateActions.executeQuery(
                      e.target.value,
                    );
                  } else if (
                    progressController.listSceneMode ===
                    SpaceJourneySidebarListMode.SCENES
                  ) {
                    sceneListController.actions.stateActions.executeQuery(
                      e.target.value,
                    );
                  }
                }}
              ></input>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div className='flex flex-col space-y-[1rem] p-[1rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              {progressController.listSceneMode ===
              SpaceJourneySidebarListMode.DEFAULT ? (
                <>
                  {ideaListController.state.more.queryResults.map(
                    (idea, index) => (
                      <GlassWindowFrame
                        className='p-[1rem]'
                        roundedFx={roundedFx.rounded}
                        borderFx={borderFx['border-around']}
                      >
                        <GlassWindowContents className='flex flex-row items-center space-x-[1rem]'>
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
                        <GlassWindowPane glassFx={glassFx['glass-5']} />
                      </GlassWindowFrame>
                    ),
                  )}
                </>
              ) : (
                <>
                  {sceneListController.state.more.queryResults.map(
                    (scene, index) => (
                      <GlassWindowFrame
                        className='p-[1rem]'
                        roundedFx={roundedFx.rounded}
                        borderFx={borderFx['border-around']}
                      >
                        <GlassWindowContents
                          className='flex flex-row items-center space-x-[1rem]'
                          onClick={() => {
                            sceneListController.actions.stateActions.select(
                              scene,
                            );
                            progressController.updateListSceneMode(
                              SpaceJourneySidebarListMode.DEFAULT,
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
                              {scene.objective || 'No description'}
                            </div>
                          </div>
                        </GlassWindowContents>
                        <GlassWindowPane glassFx={glassFx['glass-5']} />
                      </GlassWindowFrame>
                    ),
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
