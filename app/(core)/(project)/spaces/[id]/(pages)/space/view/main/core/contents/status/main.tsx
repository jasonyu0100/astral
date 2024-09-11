import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpacesSpaceChatStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );

  return (
    <div className='flex h-[8rem] w-[1200px] flex-shrink-0 flex-col items-center space-y-[2rem]'>
      <GlassWindowFrame
        className='h-full flex-shrink-0'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center'>
          <p className='w-full text-center text-xl font-light text-slate-300'>
            <span className='font-bold'>Scene:</span>{' '}
            {sceneListController.state.currentObj?.objective || 'Open-ended'}
          </p>
          <p className='text-md w-full p-[1rem] text-center font-light text-slate-300'>
            {conversationListController.state?.currentObj?.summary ||
              'No status'}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
