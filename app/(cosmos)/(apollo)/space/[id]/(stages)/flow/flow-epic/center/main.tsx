import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function FlowCenter({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={FlowCenter.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']} p-[1rem]`}
      >
        {children}
      </Layer>
    </div>
  );
}
