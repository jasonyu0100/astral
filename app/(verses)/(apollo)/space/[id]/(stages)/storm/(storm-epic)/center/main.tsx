import { containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';
import { StormChat } from './chat/main';
import { StormChatInput } from './input/main';

export function StormBody() {
  return (
    <Glass
      displayName={StormBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormChat />
      <StormChatInput />
    </Glass>
  );
}
