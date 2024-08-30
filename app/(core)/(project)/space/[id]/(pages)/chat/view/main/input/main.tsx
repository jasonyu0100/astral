import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import { SpaceChatInputLeft } from './left/main';
import { SpaceChatInputRight } from './right/main';
import { SpaceChatInputText } from './text/main';

export function SpaceChatInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <GlassAreaContainer
      name={SpaceChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center px-[1rem]`}
    >
      <SpaceChatInputLeft />
      <SpaceChatInputText />
      <SpaceChatInputRight />
    </GlassAreaContainer>
  );
}
