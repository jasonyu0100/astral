import { containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function StormMain({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={StormMain.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']}`}
    >
      {children}
    </Layer>
  );
}
