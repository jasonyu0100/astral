import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceBoardAddSceneModal } from '../../../../../../(modal)/add/scene/main';

export function SpaceBoardSceneList() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();
  const activeId = sceneListController.state.objId;

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceBoardAddSceneModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
        <div className='flex w-full flex-row items-center space-x-[1rem]'>
          <p className={`text-lg font-bold text-slate-400`}>Scenes</p>
          <GlassWindowFrame
            roundedFx={roundedFx['rounded']}
            className='h-[1rem] w-[1rem]'
          >
            <GlassWindowContents
              className='flex cursor-pointer items-center justify-center'
              onClick={openableController.open}
            >
              <p className={`text-md font-bold text-slate-400`}>+</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        {sceneListController.state.objs.map((scene, index) => (
          <GlassWindowFrame key={scene.id} roundedFx={roundedFx['rounded']}>
            <GlassWindowContents
              className='animate-pulse-slow cursor-pointer'
              onClick={() =>
                sceneListController.actions.stateActions.select(scene)
              }
            >
              <p
                className={`text-md font-bold ${activeId === scene.id ? 'animate-pulse-slow text-slate-400' : 'text-slate-500'}`}
              >
                {index + 1}. {scene.title}
              </p>
            </GlassWindowContents>
          </GlassWindowFrame>
        ))}
      </div>
    </>
  );
}
