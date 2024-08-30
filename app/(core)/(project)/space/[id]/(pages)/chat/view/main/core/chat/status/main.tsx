import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpaceChatChatStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <GlassWindowFrame
      className='h-full w-full flex-shrink-0'
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col items-center py-[1rem]'>
        <p className='text-xl font-bold text-slate-300'>
          Objective:{' '}
          {sceneListController.state.currentObj?.objective || 'Open-ended'}
        </p>
        <div className='flex h-full flex-col items-center justify-center overflow-auto'>
          <p className='text-md max-w-[900px] text-center font-light text-slate-300'>
            {sceneListController.state?.currentObj?.summary || 'No status'}
          </p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
