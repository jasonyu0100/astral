import { containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';
import { StormChat } from './chat/main';
import { StormChatInput } from './input/main';

export function StormMain() {
  return (
    <Layer
      displayName={StormMain.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      <StormChat />
      <StormChatInput />
    </Layer>
  );
}
