import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceMapSidebarScenesSearch() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <GlassWindowFrame
      className='h-[3rem] w-full flex-shrink-0'
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents className='h-full w-full'>
        <input
          className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
          placeholder='Venture forth...'
          onChange={(e) => {
            sceneListController.actions.stateActions.executeQuery(
              e.target.value,
            );
          }}
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
