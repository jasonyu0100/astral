import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';

export function StormChatInput({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={StormChatInput.name}
      sizeStyle='h-[80px] w-full'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-centered']} px-[1rem]`}
    >
      {children}
    </Layer>
  );
}
