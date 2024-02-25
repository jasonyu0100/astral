import { containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';
import { StormChat } from './chat/main';
import { StormChatInput } from './input/main';

export function StormCore() {
  return (
    <Glass
      displayName={StormCore.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormChat />
      <StormChatInput />
    </Glass>
  );
}
