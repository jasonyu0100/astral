
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { StormCore } from './core/main';
import { StormChatInput } from './input/main';

export function StormMain() {
  return (
    <GlassAreaContainer
      name={StormMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <StormCore />
      <StormChatInput />
    </GlassAreaContainer>
  );
}
