import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { borderFx } from '@/style/data';
import { useContext } from 'react';
import { SpacesChatStatusInProgress } from './in-progress/main';

export function SpacesChatStatusContents() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='p-[1rem]'>
      <GlassWindowFrame
        className='flex h-full w-full p-[1rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex w-full flex-row justify-between space-x-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <p className='text-2xl font-bold text-slate-300'>
                {chapterListController.state.currentObj?.title}
              </p>
              <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
                <p className='text-lg font-bold text-slate-300'>
                  {messageListController.state.objs.length}
                </p>
              </div>
            </div>
            <div className='flex flex-col space-y-[0.5rem]'>
              <p className='text-lg font-light text-slate-300'>
                {chapterListController.state.currentObj?.objective}
              </p>
              <p className='text-lg font-light text-slate-300'>
                {chapterListController.state.currentObj?.description}
              </p>
            </div>
          </div>
          <SpacesChatStatusInProgress />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
