import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormChatMessageInput } from './text/main';
import { useContext } from 'react';
import { MessagesHandlerContext } from '@/(logic)/internal/handler/storm/messages/main';


export function StormChatInput() {
  const messagesHandler = useContext(MessagesHandlerContext)

  return (
    <GlassAreaContainer
      name={StormChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`${containerFx['row-centered']} px-[1rem]`}
    >
      <StormChatInputLeft />
      <StormChatMessageInput
        onChange={(e) => messagesHandler.messageActions.updateInputMessage(e.target.value)}
        value={messagesHandler.inputMessage}
      />
      <StormChatInputRight/>
    </GlassAreaContainer>
  );
}
