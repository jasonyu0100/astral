import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarListMode,
} from '../../../../../../controller/main';

export function SpaceJourneySidebarScenesListItemActive() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const journeyController = useContext(ContextForSpaceJourney);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents
        className='flex flex-row items-center space-x-[1rem]'
        onClick={() => {
          sceneListController.actions.stateActions.select(scene);
        }}
      >
        <div
          key={scene.id}
          className='flex flex-col space-y-2 font-bold text-slate-300'
        >
          <div className='text-lg font-bold'>{scene.title || 'Untitled'}</div>
          <div className='text-sm font-light'>
            {scene.objective || 'No description'}
          </div>
          <div className='flex flex-col'>
            {ideaListController.state.objs.map((idea, index) => (
              <div className='font-light text-slate-300'>
                {index + 1}. {idea.title || 'Untitled'}
              </div>
            ))}
          </div>
          <div
            className='w-full cursor-pointer rounded-[1rem] bg-blue-500 p-[1rem] text-center font-bold text-white'
            onClick={() => {
              journeyController.updateListSceneMode(
                SpaceJourneySidebarListMode.LINKS,
              );
            }}
          >
            View Ideas
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
