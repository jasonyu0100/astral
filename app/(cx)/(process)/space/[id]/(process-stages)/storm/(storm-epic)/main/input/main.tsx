import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
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
      size='h-[80px] w-full'
      glass={glassStyles['glass-5']}
      className={`${containerStyles['row-centered']} px-[1rem]`}
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
