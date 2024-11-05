import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { glassFx } from '@/style/data';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesChannelAgentMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const hoverableController = useControllerForHoverable();
  return (
    <div
      onMouseOver={hoverableController.onHover}
      onMouseOut={hoverableController.onUnhover}
    >
      <GlassWindowFrame>
        <GlassWindowContents className='flex w-full flex-row space-x-[1rem] p-[1rem] py-[2rem]'>
          <img
            src={'/stock/astral.png'}
            className='aspect-square h-[3rem] w-[3rem] flex-shrink-0 rounded-full'
          />
          <div className='flex flex-col space-y-[0.5rem] px-[1rem]'>
            <p className='text-left text-xl font-bold text-slate-300'>
              {message.agentId} - sent{' '}
              {getFormmatedTimeDifference(new Date(message.created))}
            </p>
            <p className='text-lg font-light text-white'>{message.message}</p>
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
