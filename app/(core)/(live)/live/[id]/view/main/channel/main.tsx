import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { glassFx, roundedFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
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
      <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[1rem]'
          onClick={() => {
            window.location.href = `${spacesMap.spaces.id.channel.link(
              spaceMainController.state.objId,
            )}?chapter=${chapterListController.state.currentObj?.id}&action=new`;
          }}
        >
          <div className='flex flex-col space-y-[0.5rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-emerald-500'>
                <AstralChatIndicatorIcon />
              </div>
              <p className='text-2xl font-bold text-slate-300'>
                Start Conversation
              </p>
            </div>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      {conversationListController.state.objs.map((conversationObj) => (
        <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
          <GlassWindowContents
            className='flex cursor-pointer flex-col space-y-[1rem]'
            onClick={() => {
              window.location.href = `${spacesMap.spaces.id.channel.link(
                spaceMainController.state.objId,
              )}?chapter=${chapterListController.state.currentObj?.id}&conversation=${conversationObj.id}`;
            }}
          >
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
      ))}
    </div>
  );
}
