import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import Link from 'next/link';
import { useContext } from 'react';

export function PublicSpaceChapterChannel() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='flex flex-col space-y-[1rem] py-[2rem]'>
      {conversationListController.state.objs.map((conversationObj) => (
        <Link
          href={`${spacesMap.spaces.id.channel.link(
            spaceMainController.state.objId,
          )}?chapter=${chapterListController.state.currentObj?.id}&conversation=${conversationObj.id}`}
        >
          <GlassWindowFrame
            className='p-[1rem]'
            roundedFx={roundedFx.rounded}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex cursor-pointer flex-col space-y-[1rem]'>
              <div className='flex flex-col space-y-[0.5rem]'>
                <p className='text-2xl font-light text-slate-300'>
                  {getFormattedAMPM(new Date(conversationObj?.created || ''))}
                  <span>, </span>
                  {getFormattedDate(new Date(conversationObj?.created || ''))}
                </p>
                <p className='text-sm text-slate-300'>
                  <span className='text-md font-bold text-slate-300'>
                    {conversationObj.title || 'Untitled'} -{' '}
                  </span>
                  {conversationObj.summary || 'Untitled'}
                </p>
              </div>
              <GlassWindowFrame
                roundedFx={roundedFx['rounded-full']}
                className='w-[180px]'
              >
                <GlassWindowContents className='flex cursor-pointer flex-row items-center space-x-[1rem] px-[1rem] py-[0.5rem]'>
                  <AstralChatIndicatorIcon />
                  <p className='font-bold text-slate-300'>
                    {messageListController.state.objs.length} messages
                  </p>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </Link>
      ))}
    </div>
  );
}
