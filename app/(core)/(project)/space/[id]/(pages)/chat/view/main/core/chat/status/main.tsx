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
      className='h-full w-[1200px] flex-shrink-0'
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col items-center justify-center'>
        <p className='text-xl font-bold text-slate-300'>
          Chapter Objective:{' '}
          {chapterListController.state.currentObj?.objective || 'Open-ended'}
        </p>
        <p className='text-xl font-bold text-slate-300'>
          Scene Objective:{' '}
          {sceneListController.state.currentObj?.objective || 'Open-ended'}
        </p>
        <p className='text-md text-center font-light text-slate-300'>
          Chapter Description:{' '}
          {chapterListController.state.currentObj?.description || 'Open-ended'}
        </p>
        <p className='text-md text-center font-light text-slate-300'>
          Scene Summary{' '}
          {sceneListController.state?.currentObj?.summary || 'No status'}
        </p>
        <p className='text-md text-center font-light text-slate-300'>
          Conversation Summary{' '}
          {conversationListController.state?.currentObj?.summary || 'No status'}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
