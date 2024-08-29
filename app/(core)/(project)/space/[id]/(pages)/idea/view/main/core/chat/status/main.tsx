import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';

export function SpaceIdeaChatStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      <GlassWindowFrame className='w-full flex-shrink-0 px-[1rem]'>
        <GlassWindowContents className='flex flex-col items-center space-y-[1rem]'>
          <p className='text-xl font-bold text-slate-300'>
            Objective:{' '}
            {sceneListController.state.currentObj?.description || 'Open-ended'}
          </p>
          <p className='max-h-[10rem] overflow-auto text-center text-xl font-light text-slate-300'>
            {sceneListController.state?.currentObj?.summary || 'No status'}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <HorizontalDivider />
    </div>
  );
}
