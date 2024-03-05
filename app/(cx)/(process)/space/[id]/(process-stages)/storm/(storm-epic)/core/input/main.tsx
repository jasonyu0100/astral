import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormChatMessageInput } from './text/main';
import { useContext } from 'react';
import { StormContext } from '../../../page';


export function StormChatInput() {
  const {  inputMessage, messageHandler } = useContext(StormContext);
  return (
    <GlassContainer
      displayName={StormChatInput.name}
      sizeStyle='h-[80px] w-full'
      glassStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-centered']} px-[1rem]`}
    >
      <StormChatInputLeft />
      <StormChatMessageInput
        onChange={(e) => messageHandler.updateInputMessage(e.target.value)}
        value={inputMessage}
      />
      <StormChatInputRight/>
    </GlassContainer>
  );
}
