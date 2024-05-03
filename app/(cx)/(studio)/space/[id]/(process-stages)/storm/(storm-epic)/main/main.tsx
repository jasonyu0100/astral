import { containerFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { StormCore } from './core/main';
import { StormChatInput } from './input/main';

export function StormMain() {
  return (
    <GlassAreaContainer
      name={StormMain.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']}`}
    >
      <StormCore />
      <StormChatInput />
    </GlassAreaContainer>
  );
}
