import { containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { StormCore } from './core/main';
import { StormChatInput } from './input/main';

export function StormMain() {
  return (
    <GlassAreaContainer
      name={StormMain.name}
      size='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormCore />
      <StormChatInput />
    </GlassAreaContainer>
  );
}
