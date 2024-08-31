import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpaceChatChatStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );

  return (
    <GlassWindowFrame
      className='h-full flex-shrink-0'
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center'>
        <p className='text-center text-xl font-light text-slate-300'>
          <span className='font-bold'>Scene:</span>{' '}
          {sceneListController.state.currentObj?.objective || 'Open-ended'}
        </p>
        {/* <p className='text-md font-light text-slate-300'>
          <span className='font-bold'>Overview: </span>
          {sceneListController.state?.currentObj?.summary || 'No status'}
        </p> */}
        <p className='text-md text-center font-light text-slate-300'>
          {conversationListController.state?.currentObj?.summary || 'No status'}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
