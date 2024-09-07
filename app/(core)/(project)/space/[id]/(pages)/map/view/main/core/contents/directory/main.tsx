import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
} from '../../../../../controller/map/main';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapDirectory() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpaceMap);
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='relative grid h-full w-full grid-cols-4 gap-[2rem] p-[2rem]'>
      {sceneListController.state.objs.map((scene) => (
        <GlassWindowFrame
          className='aspect-square p-[1rem]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents
            key={scene.id}
            className='cursor-pointer font-bold text-slate-300'
            onClick={() => {
              sceneListController.actions.stateActions.select(scene);
              updateDirectoryMode(SpaceMapDirectoryMode.DEFAULT);
            }}
          >
            <div className='text-lg font-bold'>{scene.title || 'Untitled'}</div>
            <div className='text-sm font-light'>
              {scene.objective || 'No description'}
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      ))}
      <GlassWindowFrame
        className='aspect-square p-[1rem]'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents
          className='cursor-pointer'
          onClick={() => {
            modalController.addSceneController.open();
          }}
        >
          <div className='flex flex-row items-center space-x-[1rem]'>
            <div className='text-lg font-bold text-slate-300'>Add Scene</div>
            <AstralAddIcon />
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
