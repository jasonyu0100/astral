import { containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { StormChat } from './chat/main';
import { StormChatInput } from './input/main';

export function StormCore() {
  return (
    <GlassAreaContainer
      displayName={StormCore.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormChat />
      <StormChatInput />
    </GlassAreaContainer>
  );
}
