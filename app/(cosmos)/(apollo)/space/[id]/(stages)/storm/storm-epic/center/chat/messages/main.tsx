import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function StormChatMessages({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={StormChatMessages.name}
      sizeStyle='max-w-[900px] w-full flex-grow h-full'
      className={`${containerStyles.col} p-[1rem] space-y-[1rem]`}
    >
      {children}
    </Layer>
  );
}
