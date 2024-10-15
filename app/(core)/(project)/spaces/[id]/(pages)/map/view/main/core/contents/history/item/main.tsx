import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
} from '../../../../../../controller/main';

export function SpacesMapHistoryItem() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpacesMap);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const scene = useContext(ContextForIdeaSceneObj);
  const hoverableController = useControllerForHoverable();

  return (
    <div
      onMouseOut={hoverableController.onUnhover}
      onMouseOver={hoverableController.onHover}
    >
      <GlassWindowFrame
        className='h-[5rem] w-full'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents
          key={scene.id}
          className='flex h-full cursor-pointer flex-row items-center justify-items-center space-x-[1rem] p-[1rem] text-center font-bold text-slate-300'
          onClick={() => {
            sceneListController.actions.stateActions.select(scene);
            updateDirectoryMode(SpacesMapDirectoryMode.DEFAULT);
          }}
        >
          <div className='text-lg font-light'>
            {getFormattedAMPM(new Date(scene.created))}
          </div>
          <div className='text-lg font-light'>-</div>
          <div className='text-lg font-light'>
            {scene.title?.trim() || 'Untitled'}
          </div>
          <div className='text-lg font-light'>
            {scene.objective || 'No objective'}
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
