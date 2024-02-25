import { containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { StormChat } from './chat/main';
import { StormChatInput } from './input/main';

export function StormCore() {
  return (
    <GlassContainer
      displayName={StormCore.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormChat />
      <StormChatInput />
    </GlassContainer>
  );
}
