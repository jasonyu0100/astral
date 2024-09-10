import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
} from '../../../../../../controller/main';

export function SpaceMapHistoryItem() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);
  const scene = useContext(ContextForChapterSceneObj);
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
            updateDirectoryMode(SpaceMapDirectoryMode.DEFAULT);
          }}
        >
          <div className='text-lg font-light'>
            {getFormattedAMPM(new Date(scene.created))}
          </div>
          <div className='text-lg font-light'>-</div>
          <div className='text-lg font-light'>{scene.title || 'Untitled'}</div>
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
